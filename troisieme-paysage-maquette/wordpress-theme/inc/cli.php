<?php
/**
 * Importeur WP-CLI : crée les types de mission, régions, domaines, projets, équipe,
 * expertises, pages et menu à partir des fichiers du dossier data/.
 * Utilisation : wp tp import   (relançable sans doublons)
 */
if (!defined('ABSPATH')) exit;

class TP_CLI_Command {

	private $dir;

	private function read($file) {
		$data = json_decode(file_get_contents($this->dir . '/data/' . $file), true);
		if (!is_array($data)) WP_CLI::error("Fichier illisible : data/$file");
		return $data;
	}

	/** Copie une image du thème dans la médiathèque (une seule fois par fichier). */
	private function sideload($file, $post_id, $title) {
		$existing = get_posts(array('post_type' => 'attachment', 'post_status' => 'inherit', 'meta_key' => '_tp_seed_file', 'meta_value' => $file, 'posts_per_page' => 1, 'fields' => 'ids'));
		if ($existing) return (int) $existing[0];
		$src = $this->dir . '/assets/seed/img/' . $file;
		if (!file_exists($src)) return 0;
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/media.php';
		require_once ABSPATH . 'wp-admin/includes/image.php';
		$tmp = wp_tempnam($file);
		copy($src, $tmp);
		$id = media_handle_sideload(array('name' => $file, 'tmp_name' => $tmp), $post_id, $title);
		if (is_wp_error($id)) { @unlink($tmp); WP_CLI::warning($file . ' : ' . $id->get_error_message()); return 0; }
		update_post_meta($id, '_tp_seed_file', $file);
		update_post_meta($id, '_wp_attachment_image_alt', $title);
		return (int) $id;
	}

	private function term($name, $tax, $slug = '') {
		$t = term_exists($slug ? $slug : $name, $tax);
		if (!$t) $t = wp_insert_term($name, $tax, $slug ? array('slug' => $slug) : array());
		return is_wp_error($t) ? 0 : (int) (is_array($t) ? $t['term_id'] : $t);
	}

	private function upsert($type, $slug, $args) {
		$existing = get_page_by_path($slug, OBJECT, $type);
		$args = array_merge(array('post_type' => $type, 'post_name' => $slug, 'post_status' => 'publish'), $args);
		if ($existing) { $args['ID'] = $existing->ID; return wp_update_post($args); }
		return wp_insert_post($args);
	}

	public function import($args, $assoc) {
		$this->dir = get_template_directory();
		tp_register_types();

		$missions = array('etudes' => $this->term('Études', 'mission', 'etudes'), 'maitrises-oeuvre' => $this->term('Maîtrises d’œuvre', 'mission', 'maitrises-oeuvre'));

		$n = 0;
		foreach ($this->read('projets.json') as $p) {
			$id = $this->upsert('projet', $p['slug'], array('post_title' => $p['title'], 'post_content' => $p['content'], 'post_excerpt' => $p['intro'], 'menu_order' => (int) $p['order']));
			if (!$id || is_wp_error($id)) { WP_CLI::warning('Projet ignoré : ' . $p['slug']); continue; }
			foreach (array('lieu' => 'lieu', 'dept' => 'dept', 'mots_cles' => 'mots_cles', 'mo' => 'mo', 'equipe' => 'equipe', 'superficie' => 'superficie', 'budget' => 'budget', 'date' => 'date') as $k => $src) {
				update_post_meta($id, 'tp_' . $k, $p[$src]);
			}
			update_post_meta($id, 'tp_une', !empty($p['une']) ? '1' : '');
			wp_set_object_terms($id, array((int) $missions[$p['mission']]), 'mission');
			$region = $p['region'] ? $p['region'] : tp_region_for_dept($p['dept']);
			if ($region) wp_set_object_terms($id, array($region), 'region');
			if (!empty($p['domaines'])) wp_set_object_terms($id, $p['domaines'], 'domaine');
			if (!empty($p['image']) && !has_post_thumbnail($id)) {
				$att = $this->sideload($p['image'], $id, $p['title'] . ', ' . $p['lieu']);
				if ($att) set_post_thumbnail($id, $att);
			}
			$n++;
		}
		WP_CLI::log("$n projets importés.");

		foreach ($this->read('equipe.json') as $m) {
			$id = $this->upsert('membre', sanitize_title($m['nom']), array('post_title' => $m['nom'], 'menu_order' => (int) $m['order']));
			if ($id && !is_wp_error($id)) update_post_meta($id, 'tp_fonction', $m['fonction']);
		}
		foreach ($this->read('expertises.json') as $e) {
			$id = $this->upsert('expertise', sanitize_title($e['title']), array('post_title' => $e['title'], 'post_excerpt' => $e['excerpt'], 'menu_order' => (int) $e['order']));
			if (!$id || is_wp_error($id)) continue;
			update_post_meta($id, 'tp_missions', $e['missions']);
			update_post_meta($id, 'tp_domaine', $e['domaine']);
			$this->term($e['domaine_nom'], 'domaine', $e['domaine']);
		}
		WP_CLI::log('Équipe et expertises importées.');

		// Pages
		$home = $this->upsert('page', 'accueil', array('post_title' => 'Accueil', 'post_content' => ''));
		$puteaux = get_page_by_path('jardin-de-la-rose-des-vents-puteaux-92', OBJECT, 'projet');
		if ($puteaux && get_post_thumbnail_id($puteaux) && !has_post_thumbnail($home)) set_post_thumbnail($home, get_post_thumbnail_id($puteaux));

		$agence = $this->upsert('page', 'agence', array('post_title' => 'L’Atelier est avant tout la somme de ceux qui le composent.',
			'post_content' => '<!-- wp:paragraph --><p>Les paysagistes concepteurs et géographes de l’Atelier sont issus d’écoles, de formations et d’expériences différentes. Ensemble, ils forment la singularité et l’essence de Troisième Paysage.</p><!-- /wp:paragraph -->'));
		update_post_meta($agence, '_wp_page_template', 'page-agence.php');

		$concept = '<!-- wp:paragraph --><p><strong>Le premier paysage</strong> regroupe les dynamiques naturelles végétales laissées à leur libre développement : un Éden révolu où l’homme n’aurait pas encore imposé sa marque.</p><!-- /wp:paragraph -->'
			. '<!-- wp:paragraph --><p><strong>Le second paysage</strong> est celui de l’aire industrielle et de la volonté de l’homme moderne d’adapter son environnement à ses attentes : villes minérales, domestication végétale, schéma automobile global.</p><!-- /wp:paragraph -->'
			. '<!-- wp:paragraph --><p><strong>Le troisième paysage</strong> est la symbiose vers laquelle tend l’Atelier : composer entre les attentes et les usages de la société, sans dénaturer les paysages, en offrant à la nature un espace d’expression. Travailler cet équilibre, c’est préserver les paysages et les milieux, œuvrer pour la biodiversité et augmenter la qualité de vie.</p><!-- /wp:paragraph -->'
			. '<!-- wp:paragraph --><p>Conscient de la dualité entre dynamiques urbaines et rurales, l’Atelier accompagne cet équilibre en conservant les spécificités de chaque milieu.</p><!-- /wp:paragraph -->';
		$exp = $this->upsert('page', 'expertises', array('post_title' => 'Ce que l’Atelier prend en charge', 'post_content' => $concept));
		update_post_meta($exp, '_wp_page_template', 'page-expertises.php');

		$contact = $this->upsert('page', 'contact', array('post_title' => 'Contact', 'post_content' => ''));
		update_post_meta($contact, '_wp_page_template', 'page-contact.php');

		update_option('show_on_front', 'page');
		update_option('page_on_front', $home);
		update_option('permalink_structure', '/%postname%/');

		// Menu principal
		$menu = wp_get_nav_menu_object('Menu principal');
		$menu_id = $menu ? $menu->term_id : wp_create_nav_menu('Menu principal');
		if (!is_wp_error($menu_id) && !wp_get_nav_menu_items($menu_id)) {
			wp_update_nav_menu_item($menu_id, 0, array('menu-item-title' => 'Projets', 'menu-item-url' => get_post_type_archive_link('projet'), 'menu-item-type' => 'custom', 'menu-item-status' => 'publish'));
			foreach (array($agence => 'Agence', $exp => 'Expertises', $contact => 'Contact') as $pid => $label) {
				wp_update_nav_menu_item($menu_id, 0, array('menu-item-title' => $label, 'menu-item-object' => 'page', 'menu-item-object-id' => $pid, 'menu-item-type' => 'post_type', 'menu-item-status' => 'publish', 'menu-item-classes' => $label === 'Contact' ? 'cta-nav' : ''));
			}
		}
		$locations = get_theme_mod('nav_menu_locations', array());
		$locations['primary'] = $menu_id;
		set_theme_mod('nav_menu_locations', $locations);

		flush_rewrite_rules();
		WP_CLI::success('Import terminé. Ouvrez Apparence > Personnaliser > Troisième Paysage pour modifier les textes.');
	}
}

WP_CLI::add_command('tp', 'TP_CLI_Command');
