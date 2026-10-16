<?php
/** Portfolio : filtres par type de mission et par région. */
if (!defined('ABSPATH')) exit;
$is_all = is_post_type_archive('projet');
$missions = get_terms(array('taxonomy' => 'mission', 'hide_empty' => true));
$regions = get_terms(array('taxonomy' => 'region', 'hide_empty' => true, 'orderby' => 'name'));
$cur_mission = is_tax('mission') ? get_queried_object()->slug : 'all';
$cur_region = is_tax('region') ? get_queried_object()->slug : 'all';
$all_url = get_post_type_archive_link('projet');
$total = (int) wp_count_posts('projet')->publish;
?>
<div class="wrap page-head">
	<h1>Projets</h1>
	<p class="lead muted"><?php echo esc_html(tp_opt('projets_intro')); ?></p>
</div>
<div class="filters"><div class="wrap">
	<div class="fgroup"><span class="lbl">Mission</span><div class="fscroll">
		<a class="fbtn" href="<?php echo esc_url($all_url); ?>" data-f="mission" data-v="all" aria-pressed="<?php echo $cur_mission === 'all' ? 'true' : 'false'; ?>">Tous<small><?php echo (int) $total; ?></small></a>
		<?php if (!is_wp_error($missions)) foreach ($missions as $t) : ?>
			<a class="fbtn" href="<?php echo esc_url(get_term_link($t)); ?>" data-f="mission" data-v="<?php echo esc_attr($t->slug); ?>" aria-pressed="<?php echo $cur_mission === $t->slug ? 'true' : 'false'; ?>"><?php echo esc_html($t->name); ?><small><?php echo (int) $t->count; ?></small></a>
		<?php endforeach; ?>
	</div></div>
	<div class="fgroup"><span class="lbl">Région</span><div class="fscroll">
		<a class="fbtn" href="<?php echo esc_url($all_url); ?>" data-f="region" data-v="all" aria-pressed="<?php echo $cur_region === 'all' ? 'true' : 'false'; ?>">Toutes</a>
		<?php if (!is_wp_error($regions)) foreach ($regions as $t) : ?>
			<a class="fbtn" href="<?php echo esc_url(get_term_link($t)); ?>" data-f="region" data-v="<?php echo esc_attr($t->slug); ?>" aria-pressed="<?php echo $cur_region === $t->slug ? 'true' : 'false'; ?>"><?php echo esc_html($t->name); ?><small><?php echo (int) $t->count; ?></small></a>
		<?php endforeach; ?>
	</div></div>
	<div class="fcount"><span id="count" aria-live="polite"><?php echo (int) $GLOBALS['wp_query']->post_count; ?> projets affichés</span>
		<a class="reset" id="reset" href="<?php echo esc_url($all_url); ?>"<?php echo $is_all ? ' hidden' : ''; ?>>Tout afficher</a></div>
</div></div>
<div class="wrap">
	<div class="grid" id="grid" data-all="<?php echo $is_all ? '1' : '0'; ?>">
		<?php while (have_posts()) : the_post(); echo tp_project_card(get_the_ID()); // phpcs:ignore WordPress.Security.EscapeOutput
		endwhile; ?>
	</div>
	<p class="empty" id="empty" hidden>Aucun projet ne correspond à cette combinaison. Choisissez « Tout afficher ».</p>
</div>
<?php get_template_part('template-parts/contact-band'); ?>
