<?php
/** Page standard (mentions légales, etc.). */
if (!defined('ABSPATH')) exit;
get_header();
while (have_posts()) : the_post(); ?>
	<div class="wrap page-head"><h1><?php the_title(); ?></h1></div>
	<div class="wrap"><div class="page-prose"><?php the_content(); ?></div></div>
<?php endwhile;
get_footer();
