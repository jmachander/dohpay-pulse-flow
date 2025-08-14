<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                    <span style="display: inline-flex; width: 1.5rem; height: 1.5rem; align-items: center; justify-content: center; border-radius: 0.375rem; background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary))); color: white;">★</span>
                    <span style="font-size: 1rem; font-weight: 700;">DohPay Solutions</span>
                </div>
                <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground)); line-height: 1.5;">
                    Revolutionizing beverage dispensing through innovative automation technology. Engineering solutions for the modern hospitality industry.
                </p>
            </div>
            
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem;"><a href="#home">Home</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#products">Products</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#careers">Careers</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#contact">Contact</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Support</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem;"><a href="#installation">Installation Guide</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#warranty">Warranty</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#technical-support">Technical Support</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#training">Training</a></li>
                    <li><a href="#maintenance">Maintenance</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Contact Info</h4>
                <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <p style="margin-bottom: 0.5rem;">
                        Chandaria Business Innovation and Incubation Center<br>
                        Nairobi, Kenya
                    </p>
                    <p style="margin-bottom: 0.5rem;">
                        <a href="mailto:hello@dohpay.co.ke" style="color: hsl(var(--primary)); text-decoration: none;">
                            hello@dohpay.co.ke
                        </a>
                    </p>
                    <p style="margin-bottom: 1rem;">
                        <a href="tel:+254700000000" style="color: hsl(var(--primary)); text-decoration: none;">
                            +254 700 000 000
                        </a>
                    </p>
                    
                    <div style="display: flex; gap: 0.75rem;">
                        <a href="https://twitter.com/dohpay" aria-label="Twitter" style="padding: 0.5rem; background: var(--glass-gradient); border-radius: 0.5rem; color: hsl(var(--foreground)); text-decoration: none; transition: transform 0.3s ease;">
                            <span style="font-size: 1.25rem;">🐦</span>
                        </a>
                        <a href="https://www.linkedin.com/company/dohpay" aria-label="LinkedIn" style="padding: 0.5rem; background: var(--glass-gradient); border-radius: 0.5rem; color: hsl(var(--foreground)); text-decoration: none; transition: transform 0.3s ease;">
                            <span style="font-size: 1.25rem;">💼</span>
                        </a>
                        <a href="https://github.com/dohpay" aria-label="GitHub" style="padding: 0.5rem; background: var(--glass-gradient); border-radius: 0.5rem; color: hsl(var(--foreground)); text-decoration: none; transition: transform 0.3s ease;">
                            <span style="font-size: 1.25rem;">💻</span>
                        </a>
                        <a href="https://youtube.com/@dohpay" aria-label="YouTube" style="padding: 0.5rem; background: var(--glass-gradient); border-radius: 0.5rem; color: hsl(var(--foreground)); text-decoration: none; transition: transform 0.3s ease;">
                            <span style="font-size: 1.25rem;">📺</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p style="margin: 0;">© <?php echo date('Y'); ?> DohPay Solutions. All rights reserved.</p>
        </div>
    </div>
</footer>

<!-- Structured Data for Local Business -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DohPay Solutions",
    "description": "Revolutionary automated beverage dispensing technology",
    "image": "<?php echo get_template_directory_uri(); ?>/assets/hero-beverage.jpg",
    "telephone": "+254700000000",
    "email": "hello@dohpay.co.ke",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chandaria Business Innovation and Incubation Center",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -1.2921,
        "longitude": 36.8219
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "KES 45,000 - KES 90,000",
    "serviceArea": {
        "@type": "Place",
        "name": "Kenya"
    }
}
</script>

<!-- Schema.org Product Markup -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bablas-Sip Station",
    "description": "Automated, high-precision beverage dispensing system for high-traffic social environments",
    "image": "<?php echo get_template_directory_uri(); ?>/assets/hero-beverage.jpg",
    "brand": {
        "@type": "Brand",
        "name": "DohPay Solutions"
    },
    "offers": [
        {
            "@type": "Offer",
            "name": "Single Spout Station",
            "price": "45000",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "DohPay Solutions"
            }
        },
        {
            "@type": "Offer",
            "name": "Dual Spout Station", 
            "price": "70000",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "DohPay Solutions"
            }
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "25"
    }
}
</script>

<?php wp_footer(); ?>

<script>
// Add scroll-based animations
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.glass-card, .feature-card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < windowHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize cards with starting animation state
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card, .feature-card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    window.dispatchEvent(new Event('scroll'));
});

// Contact form handling
const contactForm = document.querySelector('form[action*="admin-post.php"]');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you within 1-2 business days.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1000);
    });
}

// Add hover effects to glassmorphism elements
document.addEventListener('DOMContentLoaded', function() {
    const glassButtons = document.querySelectorAll('.glass-button');
    
    glassButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
</script>

</body>
</html>