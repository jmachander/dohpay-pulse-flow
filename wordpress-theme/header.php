<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- SEO Meta Tags -->
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="keywords" content="beverage dispensing, automation, IoT, Nairobi, Kenya, engineering, technology">
    <meta name="author" content="DohPay Solutions">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/hero-beverage.jpg">
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?>">
    <meta name="twitter:description" content="<?php bloginfo('description'); ?>">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/hero-beverage.jpg">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="<?php echo home_url(); ?>">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DohPay Solutions",
        "description": "Revolutionary automated beverage dispensing technology",
        "url": "<?php echo home_url(); ?>",
        "logo": "<?php echo get_template_directory_uri(); ?>/assets/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chandaria Business Innovation and Incubation Center",
            "addressLocality": "Nairobi",
            "addressCountry": "Kenya"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254700000000",
            "contactType": "customer service",
            "email": "hello@dohpay.co.ke"
        },
        "sameAs": [
            "https://twitter.com/dohpay",
            "https://www.linkedin.com/company/dohpay",
            "https://youtube.com/@dohpay"
        ]
    }
    </script>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <a href="<?php echo home_url(); ?>" class="logo">
                <span style="display: inline-flex; width: 1.5rem; height: 1.5rem; align-items: center; justify-content: center; border-radius: 0.375rem; background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent))); color: white; margin-right: 0.5rem;">★</span>
                DohPay Solutions
            </a>
            
            <nav class="main-navigation">
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            
            <a href="#contact" class="glass-button" style="display: none;">
                Get Started
            </a>
            
            <!-- Mobile Menu Toggle (for responsive design) -->
            <button class="mobile-menu-toggle" style="display: none; background: none; border: none; color: hsl(var(--foreground)); font-size: 1.5rem; cursor: pointer;">
                ☰
            </button>
        </div>
    </div>
</header>

<!-- Mobile Navigation Menu -->
<div class="mobile-menu" style="display: none; position: fixed; top: 4rem; left: 0; right: 0; background: hsl(var(--background) / 0.95); backdrop-filter: var(--backdrop-blur); border-bottom: 1px solid hsl(var(--border)); z-index: 999;">
    <div class="container">
        <ul style="list-style: none; padding: 1rem 0;">
            <li><a href="#home" style="display: block; padding: 0.5rem 0; color: hsl(var(--foreground)); text-decoration: none;">Home</a></li>
            <li><a href="#products" style="display: block; padding: 0.5rem 0; color: hsl(var(--foreground)); text-decoration: none;">Products</a></li>
            <li><a href="#careers" style="display: block; padding: 0.5rem 0; color: hsl(var(--foreground)); text-decoration: none;">Careers</a></li>
            <li><a href="#contact" style="display: block; padding: 0.5rem 0; color: hsl(var(--foreground)); text-decoration: none;">Contact</a></li>
        </ul>
    </div>
</div>

<script>
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            const isVisible = mobileMenu.style.display === 'block';
            mobileMenu.style.display = isVisible ? 'none' : 'block';
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile responsive adjustments
if (window.innerWidth <= 768) {
    document.querySelector('.nav-menu').style.display = 'none';
    document.querySelector('.mobile-menu-toggle').style.display = 'block';
    document.querySelector('.glass-button').style.display = 'none';
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-menu').style.display = 'flex';
        document.querySelector('.mobile-menu-toggle').style.display = 'none';
        document.querySelector('.mobile-menu').style.display = 'none';
        document.querySelector('.glass-button').style.display = 'inline-flex';
    } else {
        document.querySelector('.nav-menu').style.display = 'none';
        document.querySelector('.mobile-menu-toggle').style.display = 'block';
        document.querySelector('.glass-button').style.display = 'none';
    }
});
</script>