<?php
/**
 * DohPay Solutions Theme Functions
 */

// Theme setup
function dohpay_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    add_theme_support('custom-header');
    add_theme_support('custom-background');
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'dohpay'),
        'footer' => __('Footer Menu', 'dohpay'),
    ));
}
add_action('after_setup_theme', 'dohpay_theme_setup');

// Enqueue styles and scripts
function dohpay_enqueue_assets() {
    // Enqueue main stylesheet
    wp_enqueue_style('dohpay-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('dohpay-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap', array(), null);
    
    // Enqueue custom JavaScript
    wp_enqueue_script('dohpay-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('dohpay-main', 'dohpay_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('dohpay_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'dohpay_enqueue_assets');

// Add custom meta tags to head
function dohpay_custom_meta_tags() {
    ?>
    <meta name="theme-color" content="#ff7f00">
    <meta name="msapplication-TileColor" content="#ff7f00">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <?php
}
add_action('wp_head', 'dohpay_custom_meta_tags');

// Handle contact form submissions
function handle_contact_form_submission() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['contact_nonce'], 'contact_form_nonce')) {
        wp_die('Security check failed');
    }
    
    // Sanitize form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Validate required fields
    if (empty($email) || empty($message)) {
        wp_redirect(home_url('/?error=missing_fields'));
        exit;
    }
    
    // Prepare email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . get_bloginfo('name');
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $email
    );
    
    // Send email
    $sent = wp_mail($to, $subject, $body, $headers);
    
    if ($sent) {
        wp_redirect(home_url('/?success=message_sent'));
    } else {
        wp_redirect(home_url('/?error=send_failed'));
    }
    exit;
}
add_action('admin_post_contact_form', 'handle_contact_form_submission');
add_action('admin_post_nopriv_contact_form', 'handle_contact_form_submission');

// Add custom body classes
function dohpay_body_classes($classes) {
    if (is_mobile()) {
        $classes[] = 'mobile';
    }
    
    if (is_front_page()) {
        $classes[] = 'homepage';
    }
    
    return $classes;
}
add_filter('body_class', 'dohpay_body_classes');

// Customize the excerpt length
function dohpay_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'dohpay_excerpt_length');

// Add custom excerpt more text
function dohpay_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'dohpay_excerpt_more');

// Register widget areas
function dohpay_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'dohpay'),
        'id' => 'footer-widgets',
        'description' => __('Widgets in this area will be displayed in the footer.', 'dohpay'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'dohpay_widgets_init');

// Add custom post types for careers
function dohpay_register_post_types() {
    // Career positions post type
    register_post_type('career', array(
        'labels' => array(
            'name' => 'Career Positions',
            'singular_name' => 'Career Position',
            'add_new' => 'Add New Position',
            'add_new_item' => 'Add New Career Position',
            'edit_item' => 'Edit Career Position',
            'new_item' => 'New Career Position',
            'view_item' => 'View Career Position',
            'search_items' => 'Search Career Positions',
            'not_found' => 'No career positions found',
            'not_found_in_trash' => 'No career positions found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-businessman',
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'show_in_rest' => true
    ));
    
    // Products post type
    register_post_type('product', array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product',
            'add_new' => 'Add New Product',
            'add_new_item' => 'Add New Product',
            'edit_item' => 'Edit Product',
            'new_item' => 'New Product',
            'view_item' => 'View Product',
            'search_items' => 'Search Products',
            'not_found' => 'No products found',
            'not_found_in_trash' => 'No products found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-products',
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'show_in_rest' => true
    ));
}
add_action('init', 'dohpay_register_post_types');

// Add custom fields for products
function dohpay_add_product_meta_boxes() {
    add_meta_box(
        'product_details',
        'Product Details',
        'dohpay_product_details_callback',
        'product',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'dohpay_add_product_meta_boxes');

function dohpay_product_details_callback($post) {
    wp_nonce_field('dohpay_product_meta', 'dohpay_product_meta_nonce');
    
    $price = get_post_meta($post->ID, '_product_price', true);
    $installment_price = get_post_meta($post->ID, '_product_installment_price', true);
    $features = get_post_meta($post->ID, '_product_features', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="product_price">Price (KES)</label></th>
            <td><input type="number" id="product_price" name="product_price" value="<?php echo esc_attr($price); ?>" /></td>
        </tr>
        <tr>
            <th><label for="product_installment_price">Installment Price (KES)</label></th>
            <td><input type="number" id="product_installment_price" name="product_installment_price" value="<?php echo esc_attr($installment_price); ?>" /></td>
        </tr>
        <tr>
            <th><label for="product_features">Features (one per line)</label></th>
            <td><textarea id="product_features" name="product_features" rows="5" cols="50"><?php echo esc_textarea($features); ?></textarea></td>
        </tr>
    </table>
    <?php
}

// Save product meta data
function dohpay_save_product_meta($post_id) {
    if (!isset($_POST['dohpay_product_meta_nonce']) || !wp_verify_nonce($_POST['dohpay_product_meta_nonce'], 'dohpay_product_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['product_price'])) {
        update_post_meta($post_id, '_product_price', sanitize_text_field($_POST['product_price']));
    }
    
    if (isset($_POST['product_installment_price'])) {
        update_post_meta($post_id, '_product_installment_price', sanitize_text_field($_POST['product_installment_price']));
    }
    
    if (isset($_POST['product_features'])) {
        update_post_meta($post_id, '_product_features', sanitize_textarea_field($_POST['product_features']));
    }
}
add_action('save_post', 'dohpay_save_product_meta');

// Add theme customizer options
function dohpay_customize_register($wp_customize) {
    // Company Information Section
    $wp_customize->add_section('dohpay_company_info', array(
        'title' => __('Company Information', 'dohpay'),
        'priority' => 120,
    ));
    
    // Phone number
    $wp_customize->add_setting('dohpay_phone', array(
        'default' => '+254 700 000 000',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('dohpay_phone', array(
        'label' => __('Phone Number', 'dohpay'),
        'section' => 'dohpay_company_info',
        'type' => 'text',
    ));
    
    // Email address
    $wp_customize->add_setting('dohpay_email', array(
        'default' => 'hello@dohpay.co.ke',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('dohpay_email', array(
        'label' => __('Email Address', 'dohpay'),
        'section' => 'dohpay_company_info',
        'type' => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('dohpay_address', array(
        'default' => 'Chandaria Business Innovation and Incubation Center, Nairobi, Kenya',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('dohpay_address', array(
        'label' => __('Address', 'dohpay'),
        'section' => 'dohpay_company_info',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'dohpay_customize_register');

// Security enhancements
function dohpay_security_headers() {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');
}
add_action('send_headers', 'dohpay_security_headers');

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Limit login attempts (basic implementation)
function dohpay_limit_login_attempts() {
    $login_attempts = get_transient('dohpay_login_attempts_' . $_SERVER['REMOTE_ADDR']);
    
    if ($login_attempts && $login_attempts >= 5) {
        wp_die('Too many failed login attempts. Please try again in 30 minutes.');
    }
}
add_action('wp_login_failed', function() {
    $attempts = get_transient('dohpay_login_attempts_' . $_SERVER['REMOTE_ADDR']) ?: 0;
    $attempts++;
    set_transient('dohpay_login_attempts_' . $_SERVER['REMOTE_ADDR'], $attempts, 30 * MINUTE_IN_SECONDS);
});

// Clear login attempts on successful login
add_action('wp_login', function() {
    delete_transient('dohpay_login_attempts_' . $_SERVER['REMOTE_ADDR']);
});

// Optimize performance
function dohpay_performance_optimizations() {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Remove unnecessary scripts
    wp_deregister_script('wp-embed');
    
    // Defer non-critical scripts
    add_filter('script_loader_tag', function($tag, $handle) {
        if (in_array($handle, array('dohpay-main'))) {
            return str_replace(' src', ' defer src', $tag);
        }
        return $tag;
    }, 10, 2);
}
add_action('init', 'dohpay_performance_optimizations');

// Add structured data for organization
function dohpay_organization_schema() {
    if (is_front_page()) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => get_bloginfo('name'),
            'description' => get_bloginfo('description'),
            'url' => home_url(),
            'logo' => get_theme_mod('custom_logo') ? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full') : '',
            'contactPoint' => array(
                '@type' => 'ContactPoint',
                'telephone' => get_theme_mod('dohpay_phone', '+254 700 000 000'),
                'contactType' => 'customer service',
                'email' => get_theme_mod('dohpay_email', 'hello@dohpay.co.ke')
            ),
            'address' => array(
                '@type' => 'PostalAddress',
                'streetAddress' => get_theme_mod('dohpay_address', 'Chandaria Business Innovation and Incubation Center'),
                'addressLocality' => 'Nairobi',
                'addressCountry' => 'Kenya'
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($schema) . '</script>';
    }
}
add_action('wp_head', 'dohpay_organization_schema');

?>