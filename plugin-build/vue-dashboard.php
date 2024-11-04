<?php
/**
 * Plugin Name: Vue Dashboard
 * Description: Modern Vue.js Dashboard for WordPress
 * Version: 1.0.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) {
    exit;
}

class VueDashboard {
    public function __construct() {
        add_action('admin_menu', array($this, 'add_menu_page'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_assets'));
    }

    public function add_menu_page() {
        add_menu_page(
            'Vue Dashboard',
            'Vue Dashboard',
            'manage_options',
            'vue-dashboard',
            array($this, 'render_app'),
            'dashicons-chart-area',
            3
        );
    }

    public function enqueue_assets($hook) {
        if ($hook !== 'toplevel_page_vue-dashboard') {
            return;
        }

        // Get the manifest file
        $manifest_path = plugin_dir_path(__FILE__) . 'dist/manifest.json';
        $manifest = file_exists($manifest_path) 
            ? json_decode(file_get_contents($manifest_path), true) 
            : array();

        // Enqueue main assets
        $plugin_url = plugin_dir_url(__FILE__);
        
        // Enqueue main JS file
        wp_enqueue_script(
            'vue-dashboard',
            $plugin_url . 'dist/assets/main.js',
            array(),
            '1.0.0',
            true
        );

        // Enqueue main CSS file
        wp_enqueue_style(
            'vue-dashboard',
            $plugin_url . 'dist/assets/main.css',
            array(),
            '1.0.0'
        );

        // Add WordPress data to window object
        wp_localize_script('vue-dashboard', 'wpData', array(
            'apiUrl' => rest_url('wp/v2/'),
            'nonce' => wp_create_nonce('wp_rest'),
            'pluginUrl' => $plugin_url
        ));
    }

    public function render_app() {
        echo '<div id="app"></div>';
    }
}

new VueDashboard();