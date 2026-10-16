<?php
/**
 * Template Name: Expertises
 * Domaines de compétence, alimentés par le type de contenu « Expertises ».
 */
if (!defined('ABSPATH')) exit;
get_header();
$expertises = get_posts(array('post_type' => 'expertise', 'posts_per_page' => 20, 'orderby' => 'menu_order', 'order' => 'ASC', 'no_found_rows' => true));
?>
<div class="wrap page-head"><h1><?php the_title(); ?></h1><p class="lead muted"><?php echo esc_html(tp_opt('expertises_intro')); ?></p></div>
<div class="wrap">
	<?php foreach ($expertises as $i => $e) :
		$projets = tp_projects_for_domaine(get_post_meta($e->ID, 'tp_domaine', true), 8);
		$missions = get_post_meta($e->ID, 'tp_missions', true);
		$thumb = get_post_thumbnail_id($e);
		if (!$thumb && $projets) $thumb = get_post_thumbnail_id($projets[0]); ?>
		<article class="xp">
			<?php echo tp_figure($thumb, $thumb ? get_the_title($e) : 'Visuel à fournir par l’agence', ($i % 4) + 1, '4/3'); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			<div class="t">
				<h2><?php echo esc_html(get_the_title($e)); ?></h2>
				<p><?php echo esc_html($e->post_excerpt); ?></p>
				<?php if ($missions) : ?><dl><dt>Types de missions</dt><dd><?php echo esc_html($missions); ?></dd></dl><?php endif; ?>
				<?php if ($projets) : ?><div><dl><dt style="margin-bottom:8px">Projets</dt></dl>
					<div class="chips"><?php foreach ($projets as $p) : ?><a class="chip" href="<?php echo esc_url(get_permalink($p)); ?>"><?php echo esc_html(get_post_meta($p->ID, 'tp_lieu', true) ?: get_the_title($p)); ?></a><?php endforeach; ?></div></div><?php endif; ?>
			</div>
		</article>
	<?php endforeach; ?>
</div>
<section class="rule"><div class="wrap"><div class="cta"><a class="btn arrow" href="<?php echo esc_url(tp_url('projets')); ?>">Découvrir les projets</a><a class="btn ghost" href="<?php echo esc_url(tp_url('concept')); ?>">Le concept du troisième paysage</a></div></div></section>
<?php get_template_part('template-parts/contact-band'); ?>
<?php get_footer(); ?>
