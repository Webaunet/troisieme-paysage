<?php
/** Gabarit de secours. */
if (!defined('ABSPATH')) exit;
get_header(); ?>
<div class="wrap page-head"><h1><?php echo is_search() ? 'Recherche' : esc_html(get_bloginfo('name')); ?></h1></div>
<div class="wrap"><div class="page-prose">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<article><h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2><?php the_excerpt(); ?></article>
<?php endwhile; else : ?><p>Aucun contenu.</p><?php endif; ?>
</div></div>
<?php get_footer();
