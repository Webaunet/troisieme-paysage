<?php if (!defined('ABSPATH')) exit; ?>
<section class="contact-band"><div class="wrap split">
	<h2><?php echo esc_html(tp_opt('cta_title')); ?></h2>
	<div style="display:grid;gap:8px">
		<a class="big-link" href="mailto:<?php echo esc_attr(antispambot(tp_opt('email'))); ?>"><?php echo esc_html(tp_opt('email')); ?></a>
		<span class="big-link" style="border:0"><?php echo esc_html(tp_opt('phone')); ?></span>
		<p class="muted" style="margin-top:8px"><?php echo esc_html(tp_opt('address')); ?></p>
		<p style="margin-top:12px"><a class="btn ghost arrow" href="<?php echo esc_url(tp_url('contact')); ?>">Page contact</a></p>
	</div>
</div></section>
