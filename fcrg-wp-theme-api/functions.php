<?php

/*------------------------------------*\
External Modules/Files
\*------------------------------------*/

require_once __DIR__ . '/inc/_setup.php';
require_once __DIR__ . '/inc/_cpt_store_locator_events.php';

/*------------------------------------*\
Theme Support
\*------------------------------------*/

function patter_parent_theme_setup()
{
    add_theme_support('post-thumbnails');

    // Localisation Support
    load_theme_textdomain('patter_lang', get_template_directory() . '/languages');

    // Update Existing Image Sizes
    // Thumbnail
    update_option('thumbnail_size_w', 720);
    update_option('thumbnail_size_h', 480);
    // Post Thumbnail
    set_post_thumbnail_size(720, 480, true);
    // Medium Square Thumbnail
    update_option('medium_size_w', 720);
    update_option('medium_size_h', 720);
    update_option('medium_crop', 1);
    // Medium Vertical Thumbnail
    update_option('medium_large_size_w', 720);
    update_option('medium_large_size_h', 840);
    update_option('medium_large_crop', 1);
    // Hero/Large Thumbnail
    update_option('large_size_w', 1260);
    update_option('large_size_h', 1260);
}
add_action('after_setup_theme', 'patter_parent_theme_setup');


/*------------------------------------*\
Actions + Filters + ShortCodes
\*------------------------------------*/

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'start_post_rel_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action('wp_body_open', 'wp_global_styles_render_svg_filters'); // Removes SVG Filters - https://wpseek.com/function/wp_global_styles_render_svg_filters/

add_filter('gform_tabindex', '__return_false'); // Removes tab index on gravity forms when you have many on the page
add_filter('pre_option_rg_gforms_disable_css', '__return_true'); // Disable Gravity Forms CSS
