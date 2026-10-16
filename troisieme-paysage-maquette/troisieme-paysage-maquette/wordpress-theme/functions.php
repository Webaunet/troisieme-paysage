<?php
/** Thème Troisième Paysage. */
if (!defined('ABSPATH')) exit;

define('TP_VERSION', '1.0.0');

require_once get_template_directory() . '/inc/defaults.php';
require_once get_template_directory() . '/inc/post-types.php';
require_once get_template_directory() . '/inc/meta.php';
require_once get_template_directory() . '/inc/customizer.php';
require_once get_template_directory() . '/inc/helpers.php';
if (defined('WP_CLI') && WP_CLI) {
	require_once get_template_directory() . '/inc/cli.php';
}

add_action('after_setup_theme', function () {
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support('html5', array('search-form', 'gallery', 'caption', 'style', 'script'));
	add_theme_support('responsive-embeds');
	add_theme_support('custom-logo', array('height' => 80, 'width' => 220, 'flex-width' => true, 'flex-height' => true));
	register_nav_menus(array('primary' => 'Menu principal'));
	add_image_size('tp-wide', 1600, 0, false);
});

add_action('wp_enqueue_scripts', function () {
	wp_enqueue_style('tp-fonts', 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap', array(), null);
	wp_enqueue_style('tp-style', get_stylesheet_uri(), array('tp-fonts'), TP_VERSION);
	wp_enqueue_script('tp-main', get_template_directory_uri() . '/assets/js/main.js', array(), TP_VERSION, array('in_footer' => true, 'strategy' => 'defer'));
});

add_filter('wp_resource_hints', function ($urls, $relation) {
	if ($relation === 'preconnect') {
		$urls[] = 'https://fonts.googleapis.com';
		$urls[] = array('href' => 'https://fonts.gstatic.com', 'crossorigin');
	}
	return $urls;
}, 10, 2);

add_filter('excerpt_length', function () { return 40; });
