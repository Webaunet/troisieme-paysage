<?php if (!defined('ABSPATH')) exit; ?>
</main>
<footer>
	<div class="wrap">
		<div class="col"><b><?php echo esc_html(get_bloginfo('name')); ?></b><p><?php echo esc_html(tp_opt('footer_text')); ?></p></div>
		<div class="col"><span class="lbl">Naviguer</span>
			<a href="<?php echo esc_url(tp_url('projets')); ?>">Projets</a>
			<a href="<?php echo esc_url(tp_url('agence')); ?>">Agence</a>
			<a href="<?php echo esc_url(tp_url('expertises')); ?>">Expertises</a>
			<a href="<?php echo esc_url(tp_url('contact')); ?>">Contact</a>
		</div>
		<div class="col"><span class="lbl">Contact</span>
			<p><?php echo esc_html(tp_opt('email')); ?></p><p><?php echo esc_html(tp_opt('phone')); ?></p><p><?php echo esc_html(tp_opt('address')); ?></p>
			<?php if (tp_opt('linkedin')) : ?><a href="<?php echo esc_url(tp_opt('linkedin')); ?>" target="_blank" rel="noopener">LinkedIn</a><?php endif; ?>
			<?php if (tp_opt('legal_url')) : ?><a href="<?php echo esc_url(tp_opt('legal_url')); ?>">Mentions légales</a><?php endif; ?>
		</div>
		<p class="mock"><?php echo esc_html(tp_opt('legal_text')); ?></p>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
