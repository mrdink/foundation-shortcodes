<?php
/*
Plugin Name: Foundation 5 Shortcodes
Plugin URI: https://wordpress.org/plugins/device-mockups/
Description: Shortcodes for Foundation 5 by Zurb
Author: Justin Peacock
Version: 1.0.0
Author URI: http://byjust.in
License: GNU General Public License v2.0
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

/**
 * Grid
 */

// Row
function foundation_row( $atts , $content = null ) {

	// Output
	echo '<div class="row">'."\n";
		echo do_shortcode($content)."\n";
	echo '</div>'."\n";
}
add_shortcode( 'row', 'foundation_row' );

// Column
function foundation_column( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'small' => '',
			'medium' => '',
			'large' => '',
			'align' => ''
		), $atts )
	);

	// Output
	?>
	<div class="<?php
		if ( !empty( $small ) ) {
			echo 'small-'. esc_attr( $small ) .''; }
		if ( !empty( $medium ) ) {
			echo ' medium-'. esc_attr( $medium ) .''; }
		if ( !empty( $large ) ) {
			echo ' large-'. esc_attr( $large ) .''; }
		if ( !empty( $alignment ) ) {
		echo ' '. esc_attr( $alignment ) .''; } ?> columns">

	<?php
		echo do_shortcode($content)."\n";
	echo '</div>'."\n";

}
add_shortcode( 'column', 'foundation_column' );

/**
 * UI
 */

// Button
function foundation_button( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'link' => '#',
			'size' => '',// [tiny small large expand]
			'type' => '',// [radius round]
			'style' => ''// [secondary success alert]
		), $atts )
	);

	// Output
	echo '<a href="button '. esc_attr( $link ) .'" class="'. esc_attr( $size ) .' '. esc_attr( $type ) .' '. esc_attr( $style ) .'">'."\n";
		echo do_shortcode($content)."\n";
	echo "</a>"."\n";
}
add_shortcode( 'button', 'foundation_button' );

// Panel
function foundation_panel( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'type' => '',// [radius]
			'style' => '',// [callout]
		), $atts )
	);

	// Output
	echo '<div class="panel '. esc_attr( $type ) .' '. esc_attr( $style ) .'">'."\n";
		echo do_shortcode($content)."\n";
	echo '</div>'."\n";
}
add_shortcode( 'panel', 'foundation_panel' );

// Alert
function foundation_alert( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'type' => '',// [radius round]
			'style' => '',// [secondary success alert]
		), $atts )
	);

	// Output
	echo '<div data-alert class="alert-box '. esc_attr( $type ) .' '. esc_attr( $style ) .'">'."\n";
		echo do_shortcode($content)."\n";
		echo '<a href="#" class="close">&times;</a>'."\n";
	echo '</div>'."\n";
}
add_shortcode( 'alert', 'foundation_alert' );

// Tooltip
function foundation_tooltip( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'tip' => '',
			'position' => '',// [tip-top tip-bottom tip-left tip-right]
			'style' => ''// [radius round]
		), $atts )
	);

	// Code
	echo '<span data-tooltip class="has-tip '. esc_attr( $position ) .'" title="'. esc_attr( $tip ) .'">'. do_shortcode( $content ) .'</span>'."\n";
}
add_shortcode( 'tooltip', 'foundation_tooltip' );

// Progress Bar
function foundation_progress_bar( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'span' => 'large-12',// [small-# large-#]
			'type' => '',// [radius round]
			'style' => '',// [secondary alert success]
			'progress' => '100',// [1 - 100]
		), $atts )
	);

	// Output
	echo '<div class="progress '. esc_attr( $span ) .' '. esc_attr( $style ) .' '. esc_attr( $type ) .'">'."\n";
		echo '<span class="meter" style="width:'. esc_attr( $progress ) .'%"></span>'."\n";
	echo '</div>'."\n";
}
add_shortcode( 'progress-bar', 'foundation_progress_bar' );

// Label
function foundation_label( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'type' => '',// [round radius]
			'style' => ''// [success alert secondary]
		), $atts )
	);

	// Output
	echo '<span class="label '. esc_attr( $type ) .' '. esc_attr( $style ) .'">'. do_shortcode( $content ) .'</span>'."\n";
}
add_shortcode( 'label', 'foundation_label' );

// Flex Video
function foundation_flex_video( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'type' => '',
			'size' => '',
		), $atts )
	);

	// Output
	echo '<div class="flex-video '. esc_attr( $type ) .' '. esc_attr( $size ) .'">'."\n";
		echo do_shortcode($content)."\n"."\n";
	echo '</div>'."\n";
}
add_shortcode( 'flex-video', 'foundation_flex_video' );

// Visibility Classes
function foundation_visibility( $atts , $content = null ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'hide' => '',// [small-only medium-up medium-only large-up large-only xlarge-up xlarge-only xxlarge-up]
			'show' => '',// [small-only medium-up medium-only large-up large-only xlarge-up xlarge-only xxlarge-up]
		), $atts )
	);

	// Output
	?>

	<span class="<?php
		if ( !empty( $hide ) ) {
			echo 'hide-for-'. esc_attr( $hide ) .''; }
		if ( !empty( $show ) ) {
			echo 'show-for-'. esc_attr( $show ) .''; } ?>">
	<?php
		echo do_shortcode($content)."\n";
	echo '</span>'."\n";
}
add_shortcode( 'visibility', 'foundation_visibility' );