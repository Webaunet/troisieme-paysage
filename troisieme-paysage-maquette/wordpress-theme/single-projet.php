<?php
/** Fiche projet. */
if (!defined('ABSPATH')) exit;
get_header();
while (have_posts()) : the_post();
	$id = get_the_ID();
	$meta = function ($k) use ($id) { return trim((string) get_post_meta($id, $k, true)); };
	$mission = get_the_terms($id, 'mission');
	$mission_name = ($mission && !is_wp_error($mission)) ? $mission[0]->name : '';
	$lieu = $meta('tp_lieu');
	$dept = $meta('tp_dept');
	$where = $lieu ? $lieu . ($dept ? ' (' . $dept . ')' : '') : '';
	$facts = array(
		'Mission' => $mission_name, 'Localisation' => $where, 'Maîtrise d’ouvrage' => $meta('tp_mo'), 'Équipe' => $meta('tp_equipe'),
		'Superficie' => $meta('tp_superficie'), 'Budget' => $meta('tp_budget'), 'Date' => $meta('tp_date'),
	);
	$gallery = array_filter(array_map('absint', explode(',', $meta('tp_galerie'))));
	$prev = get_adjacent_post(false, '', true);
	$next = get_adjacent_post(false, '', false);
	$similar = get_posts(array('post_type' => 'projet', 'posts_per_page' => 4, 'post__not_in' => array($id), 'orderby' => 'rand', 'no_found_rows' => true,
		'tax_query' => $mission && !is_wp_error($mission) ? array(array('taxonomy' => 'mission', 'field' => 'term_id', 'terms' => $mission[0]->term_id)) : array()));
	$rows = array(array('c12', '16/9'), array('c7', '4/3', 'c5', '4/5'), array('c5', '4/5', 'c7', '4/3'), array('c8', '3/2'));
	?>
	<div class="wrap"><div class="crumbs"><a href="<?php echo esc_url(tp_url('projets')); ?>">← Projets</a><span>/</span><span><?php the_title(); ?></span></div></div>
	<div class="wrap fiche-hero"><?php echo tp_figure(get_post_thumbnail_id(), 'Photo · ' . get_the_title(), 1, '', 'tp-wide'); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
	<div class="wrap fiche-head">
		<div style="grid-column:1/-1"><p class="eyebrow" style="margin-bottom:16px"><?php echo esc_html(trim($mission_name . ($where ? ' · ' . $where : ''), ' ·')); ?></p></div>
		<h1><?php the_title(); ?></h1>
		<div><dl class="facts">
			<?php foreach ($facts as $label => $value) : if ($value === '') continue; ?>
				<div><dt><?php echo esc_html($label); ?></dt><dd><?php echo nl2br(esc_html($value)); ?></dd></div>
			<?php endforeach; ?>
		</dl></div>
		<div style="display:grid;gap:20px">
			<?php if (has_excerpt()) : ?><p class="fiche-intro"><?php echo esc_html(get_the_excerpt()); ?></p><?php endif; ?>
			<?php if ($meta('tp_mots_cles')) : ?><p class="muted"><?php echo esc_html($meta('tp_mots_cles')); ?></p><?php endif; ?>
		</div>
	</div>

	<?php if (trim(get_the_content())) : ?>
		<div class="wrap"><div class="fiche-content"><?php the_content(); ?></div></div>
	<?php endif; ?>

	<?php if ($gallery) : ?>
		<div class="wrap rows">
			<?php $i = 0; $r = 0; $total = count($gallery);
			while ($i < $total) :
				$pt = $rows[$r % 4]; $r++; ?>
				<div class="row">
					<?php for ($k = 0; $k < count($pt) && $i < $total; $k += 2, $i++) : $aid = array_values($gallery)[$i]; ?>
						<div class="<?php echo esc_attr($pt[$k]); ?>">
							<?php echo tp_figure($aid, get_the_title(), 1, $pt[$k + 1], 'tp-wide'); // phpcs:ignore WordPress.Security.EscapeOutput
							$cap = wp_get_attachment_caption($aid); ?>
							<div class="cap"><?php echo esc_html($cap ? $cap : ($i + 1) . ' / ' . $total . ' · ' . get_the_title()); ?></div>
						</div>
					<?php endfor; ?>
				</div>
			<?php endwhile; ?>
		</div>
	<?php endif; ?>

	<section><div class="wrap" style="display:grid;gap:56px">
		<div class="prevnext">
			<?php if ($prev) : ?><a href="<?php echo esc_url(get_permalink($prev)); ?>"><small>Précédent</small><?php echo esc_html(get_the_title($prev)); ?></a><?php else : ?><span></span><?php endif; ?>
			<?php if ($next) : ?><a href="<?php echo esc_url(get_permalink($next)); ?>" style="text-align:right"><small>Suivant</small><?php echo esc_html(get_the_title($next)); ?></a><?php endif; ?>
		</div>
		<?php if ($similar) : ?>
			<div><h2 style="margin-bottom:32px">Projets similaires</h2>
				<div class="sim"><?php foreach ($similar as $s) echo tp_project_card($s->ID, '', '4/3'); // phpcs:ignore WordPress.Security.EscapeOutput ?></div></div>
		<?php endif; ?>
		<div class="cta"><a class="btn ghost" href="<?php echo esc_url(tp_url('projets')); ?>">← Retour au portfolio</a><a class="btn arrow" href="<?php echo esc_url(tp_url('contact')); ?>">Parler d’un projet</a></div>
	</div></section>
<?php endwhile;
get_footer();
