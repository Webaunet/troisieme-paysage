<?php
/** Fonctions utilitaires pour les gabarits. */
if (!defined('ABSPATH')) exit;

/** Texte modifiable : valeur du Personnaliseur, sinon valeur par défaut. */
function tp_opt($key) {
	$d = tp_defaults();
	return get_theme_mod($key, isset($d[$key]) ? $d[$key] : '');
}

/** Texte avec <em> et <br> autorisés. */
function tp_rich($key) {
	return wp_kses(tp_opt($key), array('em' => array('class' => array()), 'br' => array(), 'strong' => array()));
}

/** URL d’une page par son identifiant (slug), avec repli sur l’accueil. */
function tp_url($slug) {
	if ($slug === 'projets') {
		$u = get_post_type_archive_link('projet');
		return $u ? $u : home_url('/projets/');
	}
	$p = get_page_by_path($slug);
	return $p ? get_permalink($p) : home_url('/' . $slug . '/');
}

/** Emplacement tonal ou image, au bon ratio. */
function tp_figure($attachment_id, $label, $tone = 1, $ratio = '', $size = 'large', $fallback = '') {
	if (!$attachment_id && $fallback && file_exists(get_template_directory() . '/assets/seed/img/' . $fallback)) {
		return '<figure class="ph" data-t="' . (int) $tone . '" style="aspect-ratio:' . esc_attr($ratio ? $ratio : '4/3') . '"><img src="' . esc_url(get_template_directory_uri() . '/assets/seed/img/' . $fallback) . '" alt="' . esc_attr($label) . '" loading="lazy" decoding="async"></figure>';
	}
	if ($attachment_id) {
		if (!$ratio) {
			$m = wp_get_attachment_metadata($attachment_id);
			if (!empty($m['width']) && !empty($m['height'])) $ratio = (int) $m['width'] . '/' . (int) $m['height'];
		}
		$alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
		$img = wp_get_attachment_image($attachment_id, $size, false, array('alt' => $alt ? $alt : $label, 'loading' => 'lazy', 'decoding' => 'async'));
		return '<figure class="ph" data-t="' . (int) $tone . '" style="aspect-ratio:' . esc_attr($ratio ? $ratio : '4/3') . '">' . $img . '</figure>';
	}
	return '<figure class="ph" data-t="' . (int) $tone . '" style="aspect-ratio:' . esc_attr($ratio ? $ratio : '4/3') . '"><span class="ph-l">' . esc_html($label) . '</span></figure>';
}

/** Carte projet (portfolio, accueil, projets similaires). */
function tp_project_card($post_id, $class = '', $ratio = '') {
	$mission = get_the_terms($post_id, 'mission');
	$region = get_the_terms($post_id, 'region');
	$m = ($mission && !is_wp_error($mission)) ? $mission[0] : null;
	$r = ($region && !is_wp_error($region)) ? $region[0] : null;
	$lieu = get_post_meta($post_id, 'tp_lieu', true);
	$dept = get_post_meta($post_id, 'tp_dept', true);
	$where = $lieu ? $lieu . ($dept ? ' (' . $dept . ')' : '') : '';
	$tone = (get_post_field('menu_order', $post_id) % 4) + 1;
	$title = get_the_title($post_id);
	ob_start();
	?>
	<a class="card <?php echo esc_attr($class); ?>" href="<?php echo esc_url(get_permalink($post_id)); ?>"
		data-mission="<?php echo esc_attr($m ? $m->slug : ''); ?>" data-region="<?php echo esc_attr($r ? $r->slug : ''); ?>">
		<?php echo tp_figure(get_post_thumbnail_id($post_id), 'Photo · ' . $title, $tone, $ratio); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="meta">
			<div><h3><?php echo esc_html($title); ?></h3><?php if ($m) : ?><span class="pill"><?php echo esc_html($m->name); ?></span><?php endif; ?></div>
			<?php if ($where) : ?><span class="where"><?php echo esc_html($where); ?></span><?php endif; ?>
		</div>
	</a>
	<?php
	return ob_get_clean();
}

/** Projets d’un domaine d’expertise. */
function tp_projects_for_domaine($slug, $limit = 3) {
	if (!$slug) return array();
	return get_posts(array('post_type' => 'projet', 'posts_per_page' => $limit, 'orderby' => array('menu_order' => 'ASC', 'date' => 'DESC'),
		'tax_query' => array(array('taxonomy' => 'domaine', 'field' => 'slug', 'terms' => $slug)), 'no_found_rows' => true));
}

/** Menu de repli tant qu’aucun menu n’est affecté. */
function tp_fallback_menu() {
	$items = array('projets' => 'Projets', 'agence' => 'Agence', 'expertises' => 'Expertises', 'concept' => 'Concept', 'contact' => 'Contact');
	echo '<ul class="menu">';
	foreach ($items as $slug => $label) {
		echo '<li' . ($slug === 'contact' ? ' class="cta-nav"' : '') . '><a href="' . esc_url(tp_url($slug)) . '">' . esc_html($label) . '</a></li>';
	}
	echo '</ul>';
}

/** Région d’un projet à partir du numéro de département. */
function tp_region_for_dept($dept) {
	static $map = array(
		'75' => 'Île-de-France', '77' => 'Île-de-France', '91' => 'Île-de-France', '92' => 'Île-de-France', '94' => 'Île-de-France',
		'59' => 'Hauts-de-France', '62' => 'Hauts-de-France', '80' => 'Hauts-de-France', '02' => 'Hauts-de-France',
		'76' => 'Normandie', '50' => 'Normandie', '45' => 'Centre-Val de Loire', '37' => 'Centre-Val de Loire',
		'67' => 'Grand Est', '66' => 'Occitanie', '44' => 'Pays de la Loire', '63' => 'Auvergne-Rhône-Alpes',
	);
	return isset($map[$dept]) ? $map[$dept] : '';
}
