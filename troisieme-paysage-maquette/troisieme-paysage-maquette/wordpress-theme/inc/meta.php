<?php
/** Champs personnalisés : fiche projet, membre, expertise. */
if (!defined('ABSPATH')) exit;

function tp_project_fields() {
	return array(
		'tp_lieu'      => array('Lieu', 'text'),
		'tp_dept'      => array('Département (numéro)', 'text'),
		'tp_mots_cles' => array('Mots-clés', 'text'),
		'tp_mo'        => array('Maîtrise d’ouvrage', 'text'),
		'tp_equipe'    => array('Équipe', 'textarea'),
		'tp_superficie'=> array('Superficie', 'text'),
		'tp_budget'    => array('Budget', 'text'),
		'tp_date'      => array('Date', 'text'),
	);
}

add_action('add_meta_boxes', function () {
	add_meta_box('tp_projet', 'Fiche projet', 'tp_projet_box', 'projet', 'normal', 'high');
	add_meta_box('tp_membre', 'Fonction', 'tp_membre_box', 'membre', 'normal', 'high');
	add_meta_box('tp_expertise', 'Missions concernées', 'tp_expertise_box', 'expertise', 'normal', 'high');
});

function tp_projet_box($post) {
	wp_nonce_field('tp_save', 'tp_nonce');
	echo '<p class="description">Le titre, l’image à la une et l’extrait (introduction) se renseignent dans les blocs habituels. Le texte principal se rédige dans l’éditeur : utilisez des titres de niveau 2 pour les sections.</p>';
	echo '<table class="form-table"><tbody>';
	foreach (tp_project_fields() as $key => $f) {
		$v = get_post_meta($post->ID, $key, true);
		echo '<tr><th><label for="' . esc_attr($key) . '">' . esc_html($f[0]) . '</label></th><td>';
		if ($f[1] === 'textarea') {
			echo '<textarea class="large-text" rows="3" id="' . esc_attr($key) . '" name="' . esc_attr($key) . '">' . esc_textarea($v) . '</textarea>';
		} else {
			echo '<input class="large-text" type="text" id="' . esc_attr($key) . '" name="' . esc_attr($key) . '" value="' . esc_attr($v) . '">';
		}
		echo '</td></tr>';
	}
	$une = get_post_meta($post->ID, 'tp_une', true);
	echo '<tr><th>Page d’accueil</th><td><label><input type="checkbox" name="tp_une" value="1"' . checked($une, '1', false) . '> Afficher dans « Projets sélectionnés »</label></td></tr>';
	$gal = get_post_meta($post->ID, 'tp_galerie', true);
	echo '<tr><th>Galerie</th><td><input type="hidden" id="tp_galerie" name="tp_galerie" value="' . esc_attr($gal) . '">'
		. '<button type="button" class="button" id="tp_galerie_btn">Choisir les images</button> <span id="tp_galerie_n">' . count(array_filter(explode(',', (string) $gal))) . ' image(s)</span>'
		. '<p class="description">Photographies complémentaires, plans et dessins affichés sous le texte, dans l’ordre choisi.</p></td></tr>';
	echo '</tbody></table>';
}

function tp_membre_box($post) {
	wp_nonce_field('tp_save', 'tp_nonce');
	$v = get_post_meta($post->ID, 'tp_fonction', true);
	echo '<p><label for="tp_fonction">Fonction et spécialités (une par ligne)</label></p>';
	echo '<textarea class="large-text" rows="4" id="tp_fonction" name="tp_fonction">' . esc_textarea($v) . '</textarea>';
}

function tp_expertise_box($post) {
	wp_nonce_field('tp_save', 'tp_nonce');
	$v = get_post_meta($post->ID, 'tp_missions', true);
	$d = get_post_meta($post->ID, 'tp_domaine', true);
	echo '<p><label for="tp_missions">Types de missions</label></p><input class="large-text" type="text" id="tp_missions" name="tp_missions" value="' . esc_attr($v) . '">';
	echo '<p><label for="tp_domaine">Domaine lié (identifiant de la taxonomie « Domaines »)</label></p><input class="large-text" type="text" id="tp_domaine" name="tp_domaine" value="' . esc_attr($d) . '">';
	echo '<p class="description">Les projets portant ce domaine sont listés avec l’expertise.</p>';
}

add_action('save_post', function ($post_id) {
	if (!isset($_POST['tp_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['tp_nonce'])), 'tp_save')) return;
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
	if (!current_user_can('edit_post', $post_id)) return;
	$type = get_post_type($post_id);
	if ($type === 'projet') {
		foreach (tp_project_fields() as $key => $f) {
			if (!isset($_POST[$key])) continue;
			$raw = wp_unslash($_POST[$key]);
			update_post_meta($post_id, $key, $f[1] === 'textarea' ? sanitize_textarea_field($raw) : sanitize_text_field($raw));
		}
		update_post_meta($post_id, 'tp_une', isset($_POST['tp_une']) ? '1' : '');
		if (isset($_POST['tp_galerie'])) {
			$ids = array_filter(array_map('absint', explode(',', sanitize_text_field(wp_unslash($_POST['tp_galerie'])))));
			update_post_meta($post_id, 'tp_galerie', implode(',', $ids));
		}
	} elseif ($type === 'membre' && isset($_POST['tp_fonction'])) {
		update_post_meta($post_id, 'tp_fonction', sanitize_textarea_field(wp_unslash($_POST['tp_fonction'])));
	} elseif ($type === 'expertise') {
		if (isset($_POST['tp_missions'])) update_post_meta($post_id, 'tp_missions', sanitize_text_field(wp_unslash($_POST['tp_missions'])));
		if (isset($_POST['tp_domaine'])) update_post_meta($post_id, 'tp_domaine', sanitize_title(wp_unslash($_POST['tp_domaine'])));
	}
});

/** Sélecteur de galerie (médiathèque WordPress). */
add_action('admin_enqueue_scripts', function ($hook) {
	if (!in_array($hook, array('post.php', 'post-new.php'), true)) return;
	$screen = get_current_screen();
	if (!$screen || $screen->post_type !== 'projet') return;
	wp_enqueue_media();
	wp_add_inline_script('jquery-core', "jQuery(function($){var f;$('#tp_galerie_btn').on('click',function(e){e.preventDefault();if(!f){f=wp.media({title:'Galerie du projet',multiple:'add',library:{type:'image'}});f.on('open',function(){var ids=($('#tp_galerie').val()||'').split(',').filter(Boolean),s=f.state().get('selection');ids.forEach(function(id){var a=wp.media.attachment(id);a.fetch();s.add(a)})});f.on('select',function(){var ids=f.state().get('selection').map(function(a){return a.id});$('#tp_galerie').val(ids.join(','));$('#tp_galerie_n').text(ids.length+' image(s)')})}f.open()})});");
});
