<?php
/** Personnaliseur : textes et coordonnées modifiables. */
if (!defined('ABSPATH')) exit;

add_action('customize_register', function ($wp_customize) {
	$defaults = tp_defaults();
	$wp_customize->add_panel('tp_panel', array('title' => 'Troisième Paysage', 'priority' => 30));
	foreach (tp_customizer_fields() as $section => $def) {
		$wp_customize->add_section($section, array('title' => $def[0], 'panel' => 'tp_panel'));
		foreach ($def[1] as $key => $f) {
			$wp_customize->add_setting($key, array(
				'default' => isset($defaults[$key]) ? $defaults[$key] : '',
				'sanitize_callback' => $f[1] === 'url' ? 'esc_url_raw' : ($f[1] === 'textarea' ? 'tp_sanitize_rich' : 'sanitize_text_field'),
				'transport' => 'refresh',
			));
			$wp_customize->add_control($key, array('label' => $f[0], 'section' => $section, 'type' => $f[1]));
		}
	}
});

function tp_sanitize_rich($value) {
	return wp_kses($value, array('em' => array('class' => array()), 'br' => array(), 'strong' => array()));
}
