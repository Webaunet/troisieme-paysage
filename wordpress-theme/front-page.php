<?php
/** Page d’accueil. */
if (!defined('ABSPATH')) exit;
get_header();

$hero_id = has_post_thumbnail() ? get_post_thumbnail_id() : 0;
$une = get_posts(array('post_type' => 'projet', 'posts_per_page' => 5, 'meta_key' => 'tp_une', 'meta_value' => '1',
	'orderby' => array('menu_order' => 'ASC', 'date' => 'DESC'), 'no_found_rows' => true));
$classes = array('c7', 'c5 off', 'c5', 'c3 off', 'c4');
$membres = get_posts(array('post_type' => 'membre', 'posts_per_page' => 12, 'orderby' => 'menu_order', 'order' => 'ASC', 'no_found_rows' => true));
$expertises = get_posts(array('post_type' => 'expertise', 'posts_per_page' => 12, 'orderby' => 'menu_order', 'order' => 'ASC', 'no_found_rows' => true));
?>
<div class="wrap hero">
	<p class="eyebrow"><?php echo esc_html(tp_opt('hero_eyebrow')); ?></p>
	<h1><?php echo tp_rich('hero_title'); // phpcs:ignore WordPress.Security.EscapeOutput ?></h1>
	<div class="hero-foot">
		<p class="lead"><?php echo esc_html(tp_opt('hero_intro')); ?></p>
		<div class="cta">
			<a class="btn arrow" href="<?php echo esc_url(tp_url('projets')); ?>">Découvrir les projets</a>
			<a class="btn ghost" href="<?php echo esc_url(tp_url('contact')); ?>">Nous contacter</a>
		</div>
	</div>
</div>
<div class="wrap">
	<?php echo tp_figure($hero_id, 'Photo d’ouverture (image à la une de la page d’accueil)', 1, '', 'tp-wide'); // phpcs:ignore WordPress.Security.EscapeOutput ?>
</div>

<section><div class="wrap">
	<p class="eyebrow" style="margin-bottom:28px">Le concept</p>
	<div class="concept">
		<?php for ($i = 1; $i <= 3; $i++) : ?>
			<div><b><?php echo esc_html(tp_opt("concept_{$i}_t")); ?></b><p><?php echo esc_html(tp_opt("concept_{$i}_d")); ?></p></div>
		<?php endfor; ?>
	</div>
	<p style="margin-top:28px"><a class="btn ghost arrow" href="<?php echo esc_url(tp_url('expertises')); ?>">Lire le concept</a></p>
</div></section>

<section class="rule"><div class="wrap split">
	<h2><?php echo esc_html(tp_opt('atelier_title')); ?></h2>
	<div style="display:grid;gap:20px">
		<p class="lead"><?php echo esc_html(tp_opt('atelier_text')); ?></p>
		<?php if ($membres) : ?>
			<div class="team-line">
				<?php foreach ($membres as $m) : $lines = preg_split('/\R/', (string) get_post_meta($m->ID, 'tp_fonction', true)); ?>
					<div><b><?php echo esc_html(get_the_title($m)); ?></b><span><?php echo esc_html($lines[0]); ?></span></div>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
		<p><a class="btn ghost arrow" href="<?php echo esc_url(tp_url('agence')); ?>">Rencontrer l’équipe</a></p>
	</div>
</div></section>

<?php if ($expertises) : ?>
<section class="rule"><div class="wrap">
	<div class="page-head" style="padding:0 0 40px"><h2>Ce que l’Atelier prend en charge</h2><p class="muted">Domaines de compétence, chacun relié aux projets qui l’illustrent.</p></div>
	<div class="expl">
		<?php foreach ($expertises as $e) :
			$projets = tp_projects_for_domaine(get_post_meta($e->ID, 'tp_domaine', true), 3);
			$missions = get_post_meta($e->ID, 'tp_missions', true); ?>
			<div class="exp-row">
				<h3><?php echo esc_html(get_the_title($e)); ?></h3>
				<div style="display:grid;gap:10px"><p><?php echo esc_html($e->post_excerpt); ?></p><?php if ($missions) : ?><span class="tag"><?php echo esc_html($missions); ?></span><?php endif; ?></div>
				<?php if ($projets) : ?>
					<div class="chips"><?php foreach ($projets as $p) : ?><a class="chip" href="<?php echo esc_url(get_permalink($p)); ?>"><?php echo esc_html(get_post_meta($p->ID, 'tp_lieu', true) ?: get_the_title($p)); ?></a><?php endforeach; ?></div>
				<?php else : ?><span class="muted" style="font-size:.8rem">Références à venir</span><?php endif; ?>
			</div>
		<?php endforeach; ?>
	</div>
	<p style="margin-top:32px"><a class="btn ghost arrow" href="<?php echo esc_url(tp_url('expertises')); ?>">Voir toutes les expertises</a></p>
</div></section>
<?php endif; ?>

<?php if ($une) : ?>
<section class="rule"><div class="wrap">
	<div class="page-head" style="padding:0 0 48px"><h2>Projets sélectionnés</h2><p class="muted">Espaces publics, renaturation, grands paysages, patrimoine : un aperçu des références de l’Atelier.</p></div>
	<div class="sel">
		<?php foreach ($une as $i => $p) echo tp_project_card($p->ID, $classes[$i % 5]); // phpcs:ignore WordPress.Security.EscapeOutput ?>
	</div>
	<p style="margin-top:56px"><a class="btn arrow" href="<?php echo esc_url(tp_url('projets')); ?>">Tous les projets</a></p>
</div></section>
<?php endif; ?>

<section class="rule"><div class="wrap">
	<p class="eyebrow" style="margin-bottom:28px">Approche</p>
	<div class="principles">
		<?php for ($i = 1; $i <= 3; $i++) : ?>
			<div><h3><?php echo esc_html(tp_opt("approche_{$i}_t")); ?></h3><p><?php echo esc_html(tp_opt("approche_{$i}_d")); ?></p></div>
		<?php endfor; ?>
	</div>
</div></section>

<?php get_template_part('template-parts/contact-band'); ?>
<?php get_footer(); ?>
