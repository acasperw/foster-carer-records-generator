<?php

// Register Custom Post Type Stockist
function create_stockist_cpt()
{

    $labels = array(
        'name' => _x('Stockists', 'Post Type General Name', 'patter_lang'),
        'singular_name' => _x('Stockist', 'Post Type Singular Name', 'patter_lang'),
        'menu_name' => _x('Stockists', 'Admin Menu text', 'patter_lang'),
        'name_admin_bar' => _x('Stockist', 'Add New on Toolbar', 'patter_lang'),
        'archives' => __('Stockist Archives', 'patter_lang'),
        'attributes' => __('Stockist Attributes', 'patter_lang'),
        'parent_item_colon' => __('Parent Stockist:', 'patter_lang'),
        'all_items' => __('All Stockists', 'patter_lang'),
        'add_new_item' => __('Add New Stockist', 'patter_lang'),
        'add_new' => __('Add New', 'patter_lang'),
        'new_item' => __('New Stockist', 'patter_lang'),
        'edit_item' => __('Edit Stockist', 'patter_lang'),
        'update_item' => __('Update Stockist', 'patter_lang'),
        'view_item' => __('View Stockist', 'patter_lang'),
        'view_items' => __('View Stockists', 'patter_lang'),
        'search_items' => __('Search Stockist', 'patter_lang'),
        'not_found' => __('Not found', 'patter_lang'),
        'not_found_in_trash' => __('Not found in Trash', 'patter_lang'),
        'featured_image' => __('Featured Image', 'patter_lang'),
        'set_featured_image' => __('Set featured image', 'patter_lang'),
        'remove_featured_image' => __('Remove featured image', 'patter_lang'),
        'use_featured_image' => __('Use as featured image', 'patter_lang'),
        'insert_into_item' => __('Insert into Stockist', 'patter_lang'),
        'uploaded_to_this_item' => __('Uploaded to this Stockist', 'patter_lang'),
        'items_list' => __('Stockists list', 'patter_lang'),
        'items_list_navigation' => __('Stockists list navigation', 'patter_lang'),
        'filter_items_list' => __('Filter Stockists list', 'patter_lang'),
    );

    $rewrite = array(
        'slug' => 'stockist',
        'with_front' => true,
        'pages' => true,
        'feeds' => true,
    );

    $args = array(
        'label' => __('Stockist', 'patter_lang'),
        'description' => __('', 'patter_lang'),
        'labels' => $labels,
        'menu_icon' => 'dashicons-admin-site',
        'supports' => array('title', 'custom-fields'),
        'taxonomies' => array(),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => false,
        'can_export' => true,
        'has_archive' => false,
        'hierarchical' => false,
        'exclude_from_search' => true,
        'show_in_rest' => true,
        'publicly_queryable' => true,
        'rewrite' => $rewrite,
        'capability_type' => 'post',
    );
    register_post_type('dg_stockist', $args);

}
