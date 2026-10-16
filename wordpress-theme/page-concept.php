<?php
/**
 * Template Name: Concept
 * Le contenu de la page sert de texte du concept ; l’image à la une sert de frise (sinon l’illustration du thème).
 */
if (!defined('ABSPATH')) exit;
get_header();
while (have_posts()) : the_post(); ?>
<div class="wrap page-head"><h1><?php the_title(); ?></h1><p class="lead muted">Du protopaysage au troisième paysage : comment l’Atelier lit l’évolution des territoires.</p></div>
<section style="padding-top:24px"><div class="wrap">
	<div class="split"><div><p class="eyebrow" style="margin-bottom:16px">Le concept</p><h2>Premier, second, <em class="acc">troisième</em> paysage.</h2></div>
		<div style="display:grid;gap:18px;max-width:62ch"><?php the_content(); ?></div></div>
	<?php
	$fig = tp_figure(get_post_thumbnail_id(), 'Frise illustrée : du protopaysage au premier, au second puis au troisième paysage, le long d’une rivière', 3, '1188/2048', 'large', 'frise-paysages.jpg');
	echo str_replace('class="ph"', 'class="ph frise-tall"', $fig); // phpcs:ignore WordPress.Security.EscapeOutput
	?>
	<div class="cta" style="margin-top:40px"><a class="btn arrow" href="<?php echo esc_url(tp_url('projets')); ?>">Découvrir les projets</a><a class="btn ghost" href="<?php echo esc_url(tp_url('expertises')); ?>">Les expertises</a></div>
</div></section>
<?php endwhile;
get_template_part('template-parts/contact-band');
get_footer();
