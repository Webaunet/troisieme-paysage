<?php if (!defined('ABSPATH')) exit; ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="screen-reader-text" href="#app">Aller au contenu</a>
<header class="top">
	<div class="wrap">
		<?php if (has_custom_logo()) : ?>
			<?php the_custom_logo(); ?>
		<?php else : ?>
			<a class="brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php echo esc_attr(get_bloginfo('name')); ?>, accueil"><b><?php echo esc_html(get_bloginfo('name')); ?></b><span><?php echo esc_html(tp_opt('tagline')); ?></span></a>
		<?php endif; ?>
		<button class="burger" id="burger" aria-expanded="false" aria-controls="nav">Menu</button>
		<nav class="main" id="nav" aria-label="Navigation principale">
			<?php wp_nav_menu(array('theme_location' => 'primary', 'container' => false, 'menu_class' => 'menu', 'fallback_cb' => 'tp_fallback_menu', 'depth' => 1)); ?>
		</nav>
	</div>
</header>
<main id="app">
