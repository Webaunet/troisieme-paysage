<?php
/**
 * Template Name: Agence
 * Page de présentation de l’Atelier : équipe, histoire, implantations.
 */
if (!defined('ABSPATH')) exit;
get_header();
$membres = get_posts(array('post_type' => 'membre', 'posts_per_page' => 20, 'orderby' => 'menu_order', 'order' => 'ASC', 'no_found_rows' => true));
?>
<div class="wrap page-head">
	<h1><?php the_title(); ?></h1>
	<div class="lead muted"><?php while (have_posts()) { the_post(); the_content(); } ?></div>
</div>

<?php if ($membres) : ?>
<section style="padding-top:24px"><div class="wrap">
	<div class="team">
		<?php foreach ($membres as $i => $m) : $lines = preg_split('/\R/', (string) get_post_meta($m->ID, 'tp_fonction', true)); ?>
			<div>
				<?php echo tp_figure(get_post_thumbnail_id($m), 'Portrait · ' . get_the_title($m), ($i % 4) + 1, '3/4'); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<h3><?php echo esc_html(get_the_title($m)); ?></h3>
				<p><?php echo wp_kses(implode('<br>', array_map('esc_html', $lines)), array('br' => array())); ?></p>
			</div>
		<?php endforeach; ?>
	</div>
	<?php if (tp_opt('alumni')) : ?><p class="muted" style="margin-top:36px;font-size:.88rem"><?php echo esc_html(tp_opt('alumni')); ?></p><?php endif; ?>
</div></section>
<?php endif; ?>

<section class="rule"><div class="wrap">
	<div class="split" style="margin-bottom:56px"><h2>Né d’une rencontre, d’une expérience et d’une envie.</h2>
		<p class="lead">Cette pluralité permet d’approcher les sujets par des regards multiples. De nombreux échanges nourrissent chaque projet et amènent une approche unique.</p></div>
	<div class="hist">
		<?php for ($i = 1; $i <= 3; $i++) : ?>
			<div><?php echo tp_figure(0, 'Photo · ' . tp_opt("hist_{$i}_t"), $i, '4/3'); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<div class="y"><?php echo esc_html(tp_opt("hist_{$i}_y")); ?></div><h3><?php echo esc_html(tp_opt("hist_{$i}_t")); ?></h3><p><?php echo esc_html(tp_opt("hist_{$i}_d")); ?></p></div>
		<?php endfor; ?>
	</div>
	<div class="after">
		<?php for ($i = 4; $i <= 5; $i++) : ?>
			<div><div class="y"><?php echo esc_html(tp_opt("hist_{$i}_y")); ?></div><p><?php echo esc_html(tp_opt("hist_{$i}_d")); ?></p></div>
		<?php endfor; ?>
	</div>
	<?php if (tp_opt('soutien')) : ?><p class="muted" style="margin-top:36px;max-width:64ch"><?php echo esc_html(tp_opt('soutien')); ?></p><?php endif; ?>
</div></section>

<section class="rule"><div class="wrap">
	<h2 style="margin-bottom:40px">Retrouvez l’agence</h2>
	<div class="sites">
		<div><?php echo tp_figure(0, 'Photo · L’agence de Paris', 4, '3/2'); // phpcs:ignore WordPress.Security.EscapeOutput ?><h3>Paris</h3><p class="muted"><?php echo esc_html(tp_opt('address')); ?><br><?php echo esc_html(tp_opt('phone')); ?></p></div>
		<div><?php echo tp_figure(0, 'Photo · L’antenne de Vendôme', 2, '3/2'); // phpcs:ignore WordPress.Security.EscapeOutput ?><h3>Vendôme</h3><p class="muted"><?php echo esc_html(tp_opt('vendome_text')); ?></p></div>
	</div>
	<p style="margin-top:40px"><a class="btn ghost arrow" href="<?php echo esc_url(tp_url('expertises')); ?>">Le concept du troisième paysage</a></p>
</div></section>
<?php get_template_part('template-parts/contact-band'); ?>
<?php get_footer(); ?>
