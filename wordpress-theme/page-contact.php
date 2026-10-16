<?php
/**
 * Template Name: Contact
 * Coordonnées lues dans Apparence > Personnaliser > Troisième Paysage.
 */
if (!defined('ABSPATH')) exit;
get_header();
$rows = array(
	array('E-mail', tp_opt('email'), true, 'mailto'),
	array('Téléphone', tp_opt('phone'), true, ''),
	array('Paris', tp_opt('address'), true, ''),
	array('Vendôme', 'Antenne ouverte en 2022', false, ''),
	array('LinkedIn', 'Atelier Troisième Paysage', false, 'link'),
);
?>
<div class="wrap page-head"><h1><?php the_title(); ?></h1><p class="lead muted"><?php echo esc_html(tp_opt('contact_intro')); ?></p></div>
<section style="padding-top:24px"><div class="wrap split">
	<div class="contact-list" style="grid-column:1/-1">
		<?php foreach ($rows as $r) : ?>
			<div><span class="lbl"><?php echo esc_html($r[0]); ?></span>
				<span class="val"><?php
				if ($r[3] === 'mailto') echo '<a href="mailto:' . esc_attr(antispambot($r[1])) . '" style="border-bottom:1px solid var(--accent)">' . esc_html($r[1]) . '</a>';
				elseif ($r[3] === 'link') echo '<a href="' . esc_url(tp_opt('linkedin')) . '" target="_blank" rel="noopener" style="border-bottom:1px solid var(--accent)">' . esc_html($r[1]) . '</a>';
				else echo esc_html($r[1]); ?></span>
				<?php if ($r[2]) : ?><button type="button" class="copy" data-copy="<?php echo esc_attr($r[1]); ?>">Copier</button><?php else : ?><span></span><?php endif; ?></div>
		<?php endforeach; ?>
	</div>
	<div class="cta" style="grid-column:1/-1;margin-top:8px">
		<a class="btn arrow" href="mailto:<?php echo esc_attr(antispambot(tp_opt('email'))); ?>">Écrire à l’Atelier</a>
		<a class="btn ghost" href="<?php echo esc_url(tp_url('projets')); ?>">Voir les projets</a>
	</div>
</div></section>
<?php get_footer(); ?>
