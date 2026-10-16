<?php
/** Page introuvable. */
if (!defined('ABSPATH')) exit;
get_header(); ?>
<div class="wrap page-head"><h1>Page introuvable</h1><p class="lead muted">Cette page n’existe pas ou a été déplacée.</p></div>
<div class="wrap" style="padding-bottom:96px"><a class="btn arrow" href="<?php echo esc_url(tp_url('projets')); ?>">Découvrir les projets</a></div>
<?php get_footer();
