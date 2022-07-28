<?php
/*------------------------------------*\
Removes comments
\*------------------------------------*/

function my_remove_admin_menus()
{
    // Removes comments from admin menu
    remove_menu_page('edit-comments.php');
    // Removes media page from admin menu
    remove_submenu_page('options-general.php', 'options-media.php');
}
add_action('admin_menu', 'my_remove_admin_menus');

// Removes comments from post and pages
function remove_comment_support()
{
    remove_post_type_support('post', 'comments');
    remove_post_type_support('page', 'comments');
}
add_action('init', 'remove_comment_support', 100);

// Removes comments from admin bar
function mytheme_admin_bar_render()
{
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('comments');
}
add_action('wp_before_admin_bar_render', 'mytheme_admin_bar_render');

/*------------------------------------*\
Misc
\*------------------------------------*/

// REQUIRE ACF basically
add_action('admin_notices', 'patter_theme_dependencies');
function patter_theme_dependencies()
{
    if (!function_exists('acf_register_block_type')) {
        echo '<div class="error"><p>' . __('Warning: The theme needs ACF to function', 'patter_lang') . '</p></div>';
    }

}

// Adds "medium_large" as a valid image size option
function patter_include_custom_sizes($sizes)
{
    return array_merge($sizes, array('medium_large' => __('Medium Large')));
}
add_filter('image_size_names_choose', 'patter_include_custom_sizes');

add_action('after_setup_theme', 'remove_admin_bar');
function remove_admin_bar()
{
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}

function remove_jquery_migrate($scripts)
{
    if (isset($scripts->registered['jquery'])) {

        $script = $scripts->registered['jquery'];

        if ($script->deps) {
            $script->deps = array_diff($script->deps, array('jquery-migrate'));
        }
    }
}
add_action('wp_default_scripts', 'remove_jquery_migrate');

/*------------------------------------*\
HELP & DASHBOARDS
\*------------------------------------*/
add_action('wp_dashboard_setup', 'remove_dashboard_widgets');
function remove_dashboard_widgets()
{
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); // Quick post
    remove_meta_box('dashboard_primary', 'dashboard', 'side'); // Latest wordpress news
}
