<?php
/** Types de contenu et taxonomies. */
if (!defined('ABSPATH')) exit;

function tp_register_types() {
	register_post_type('projet', array(
		'labels' => array(
			'name' => 'Projets', 'singular_name' => 'Projet', 'add_new_item' => 'Ajouter un projet',
			'edit_item' => 'Modifier le projet', 'all_items' => 'Tous les projets', 'menu_name' => 'Projets',
		),
		'public' => true, 'has_archive' => 'projets', 'rewrite' => array('slug' => 'projet', 'with_front' => false),
		'menu_icon' => 'dashicons-location-alt', 'menu_position' => 5, 'show_in_rest' => true,
		'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes'),
	));
	register_post_type('membre', array(
		'labels' => array('name' => 'Équipe', 'singular_name' => 'Membre', 'add_new_item' => 'Ajouter un membre', 'menu_name' => 'Équipe'),
		'public' => false, 'show_ui' => true, 'menu_icon' => 'dashicons-groups', 'menu_position' => 6,
		'supports' => array('title', 'thumbnail', 'page-attributes'),
	));
	register_post_type('expertise', array(
		'labels' => array('name' => 'Expertises', 'singular_name' => 'Expertise', 'add_new_item' => 'Ajouter une expertise', 'menu_name' => 'Expertises'),
		'public' => false, 'show_ui' => true, 'menu_icon' => 'dashicons-lightbulb', 'menu_position' => 7,
		'supports' => array('title', 'excerpt', 'thumbnail', 'page-attributes'),
	));

	register_taxonomy('mission', 'projet', array(
		'labels' => array('name' => 'Types de mission', 'singular_name' => 'Type de mission', 'menu_name' => 'Types de mission'),
		'hierarchical' => true, 'public' => true, 'show_admin_column' => true, 'show_in_rest' => true,
		'rewrite' => array('slug' => 'mission', 'with_front' => false),
	));
	register_taxonomy('region', 'projet', array(
		'labels' => array('name' => 'Régions', 'singular_name' => 'Région', 'menu_name' => 'Régions'),
		'hierarchical' => false, 'public' => true, 'show_admin_column' => true, 'show_in_rest' => true,
		'rewrite' => array('slug' => 'region', 'with_front' => false),
	));
	register_taxonomy('domaine', 'projet', array(
		'labels' => array('name' => 'Domaines d’expertise', 'singular_name' => 'Domaine d’expertise', 'menu_name' => 'Domaines'),
		'hierarchical' => false, 'public' => true, 'show_admin_column' => false, 'show_in_rest' => true,
		'rewrite' => array('slug' => 'domaine', 'with_front' => false),
	));
}
add_action('init', 'tp_register_types');

/** Le portfolio affiche tous les projets sur une seule page. */
add_action('pre_get_posts', function ($q) {
	if (is_admin() || !$q->is_main_query()) return;
	if ($q->is_post_type_archive('projet') || $q->is_tax(array('mission', 'region', 'domaine'))) {
		$q->set('posts_per_page', -1);
		$q->set('orderby', array('menu_order' => 'ASC', 'date' => 'DESC'));
	}
});

add_action('after_switch_theme', function () {
	tp_register_types();
	flush_rewrite_rules();
});
