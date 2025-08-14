<?php get_header(); ?>

<main id="home">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-badge">
                        <span style="display: inline-block; width: 12px; height: 12px; background: hsl(var(--success)); border-radius: 50%;"></span>
                        Next-Gen Beverage Technology
                    </div>
                    <h1 class="hero-title">Revolutionizing Beverage Dispensing</h1>
                    <p class="hero-description">
                        Bablas-Sip Station delivers automated, high-precision beverage dispensing for high-traffic social environments. Engineering innovation meets seamless user experience.
                    </p>
                    <div class="hero-buttons">
                        <a href="#products" class="glass-button">Explore Products</a>
                        <a href="#demo" class="glass-button" style="background: transparent; border: 1px solid hsl(var(--border));">
                            Watch Demo
                        </a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-beverage.jpg" alt="Automated beverage dispensing system">
                    <div style="position: absolute; top: 1.5rem; right: 1.5rem; padding: 0.75rem 1.5rem; background: var(--glass-gradient); border-radius: 0.75rem; backdrop-filter: var(--backdrop-blur); font-weight: 600;">
                        99.9% System Uptime
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section">
        <div class="container">
            <div class="grid-2" style="gap: 4rem;">
                <div>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Youth-Led Engineering Innovation</h2>
                    <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;">
                        Chandaria Business Innovation and Incubation Center, Nairobi, Kenya
                    </p>
                    <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                        Founded by young engineers passionate about transforming the beverage industry through automation. Our mission is to enhance user experience while maximizing operational efficiency through cutting-edge technology.
                    </p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--success)); margin-top: 0.25rem;">✓</span>
                            <span style="font-size: 1.125rem;">Advanced IoT integration for real-time monitoring</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--success)); margin-top: 0.25rem;">✓</span>
                            <span style="font-size: 1.125rem;">Sustainable design principles</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--success)); margin-top: 0.25rem;">✓</span>
                            <span style="font-size: 1.125rem;">Continuous innovation via customer feedback</span>
                        </li>
                    </ul>
                </div>
                <div style="display: grid; gap: 1.5rem;">
                    <div class="feature-card">
                        <h4>Automated Precision</h4>
                        <p>Advanced sensors ensure accuracy every time, reducing waste and maximizing efficiency.</p>
                    </div>
                    <div class="feature-card">
                        <h4>High-Traffic Ready</h4>
                        <p>Built for demanding social environments with rapid service and minimal maintenance.</p>
                    </div>
                    <div class="feature-card">
                        <h4>Smart Analytics</h4>
                        <p>Real-time monitoring and insights optimize operations and predict maintenance.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Bablas-Sip Station</h2>
                <p class="section-description">
                    Revolutionary automated beverage dispensing technology engineered for precision, efficiency, and seamless user experience.
                </p>
            </div>
            
            <div class="grid-2" style="gap: 2rem;">
                <div class="glass-card">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Technical Features</h3>
                    <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                        Engineered for reliability and precision in high-traffic environments.
                    </p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--primary)); margin-top: 0.25rem;">✓</span>
                            <span>Auto-pressurization system for consistent flow</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--primary)); margin-top: 0.25rem;">✓</span>
                            <span>Stainless steel body for durability</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--primary)); margin-top: 0.25rem;">✓</span>
                            <span>Precision spout dispensing – no losses</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--primary)); margin-top: 0.25rem;">✓</span>
                            <span>Integrated cashless payment system</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--primary)); margin-top: 0.25rem;">✓</span>
                            <span>Real-time IoT monitoring</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem;">
                            <span style="width: 1.5rem; height: 1.5rem; color: hsl(var(--primary)); margin-top: 0.25rem;">✓</span>
                            <span>Touch-free dispensing operation</span>
                        </li>
                    </ul>
                </div>

                <div style="display: grid; gap: 1.5rem;">
                    <div class="glass-card">
                        <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Single Spout Station</h4>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Perfect for small to medium venues</p>
                        <div style="font-size: 2rem; font-weight: bold; color: hsl(var(--primary)); margin-bottom: 0.5rem;">KES 45,000</div>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Full payment price</p>
                        <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                            Or KES 65,000 in 6-month installments
                        </p>
                    </div>
                    
                    <div class="glass-card">
                        <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Dual Spout Station</h4>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Ideal for high-traffic locations</p>
                        <div style="font-size: 2rem; font-weight: bold; color: hsl(var(--primary)); margin-bottom: 0.5rem;">KES 70,000</div>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Full payment price</p>
                        <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                            Or KES 90,000 in 6-month installments
                        </p>
                    </div>
                    
                    <div class="glass-card">
                        <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Custom Multi‑Spout</h4>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Tailored for enterprise needs</p>
                        <div style="font-size: 2rem; font-weight: bold; color: hsl(var(--primary)); margin-bottom: 0.5rem;">Custom Pricing</div>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Contact us for quote</p>
                        <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                            Fully customizable configurations for unique operational requirements
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Careers Section -->
    <section id="careers" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Join Our Team</h2>
                <p class="section-description">
                    We're looking for passionate, freshly graduated engineers and innovators to help us revolutionize the beverage industry.
                </p>
            </div>

            <?php
            $positions = array(
                array(
                    'title' => 'Business Development & Market Research Intern',
                    'description' => 'Drive market penetration and partnership development',
                    'requirements' => array(
                        'Recent graduate in Business, Marketing, or related field',
                        'Strong analytical and research skills',
                        'Excellent communication and presentation abilities',
                        'Experience with market analysis tools preferred'
                    )
                ),
                array(
                    'title' => 'Junior Automation & Product Development Intern',
                    'description' => 'Mechanical/Electrical engineering innovation',
                    'requirements' => array(
                        'Recent graduate in Mechanical/Electrical Engineering',
                        'Experience with CAD software and prototyping',
                        'Understanding of automation systems',
                        'Knowledge of IoT and embedded systems preferred'
                    )
                ),
                array(
                    'title' => 'Digital Marketing & Content Creation Intern',
                    'description' => 'Build our digital presence and brand awareness',
                    'requirements' => array(
                        'Recent graduate in Marketing, Communications, or related field',
                        'Strong content creation and social media skills',
                        'Experience with design tools (Canva, Adobe Creative Suite)',
                        'Understanding of digital marketing metrics'
                    )
                ),
                array(
                    'title' => 'Full Stack Software Developer Intern',
                    'description' => 'Build and enhance our software ecosystem',
                    'requirements' => array(
                        'Recent graduate in Computer Science or Software Engineering',
                        'Proficiency in React, Node.js, and database technologies',
                        'Experience with API development and integration',
                        'Knowledge of cloud platforms preferred'
                    )
                )
            );
            ?>

            <div class="grid-2" style="gap: 2rem;">
                <?php foreach ($positions as $position): ?>
                <div class="glass-card">
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;"><?php echo $position['title']; ?></h3>
                    <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                        <?php echo $position['description']; ?>
                    </p>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="font-size: 1.125rem; margin-bottom: 0.75rem;">Requirements</h4>
                        <ul style="list-style: none; padding: 0;">
                            <?php foreach ($position['requirements'] as $req): ?>
                            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; color: hsl(var(--muted-foreground));">
                                <span style="width: 6px; height: 6px; background: hsl(var(--primary)); border-radius: 50%; margin-top: 0.5rem; flex-shrink: 0;"></span>
                                <?php echo $req; ?>
                            </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    
                    <a href="mailto:hr@dohpay.co.ke?subject=Application for <?php echo urlencode($position['title']); ?>" class="glass-button" style="width: 100%; text-align: center;">
                        Apply for this position
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-description">
                    Ready to revolutionize your beverage service? Let's discuss how Bablas-Sip Station can transform your business.
                </p>
            </div>
            
            <div class="grid-3" style="gap: 3rem;">
                <div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Contact Information</h3>
                    <div style="margin-bottom: 1.5rem;">
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                            Chandaria Business Innovation and Incubation Center, Nairobi, Kenya
                        </p>
                        <p style="margin-bottom: 0.5rem;">
                            <a href="mailto:hello@dohpay.co.ke" style="color: hsl(var(--primary)); text-decoration: none;">
                                hello@dohpay.co.ke
                            </a>
                        </p>
                        <p>
                            <a href="tel:+254700000000" style="color: hsl(var(--primary)); text-decoration: none;">
                                +254 700 000 000
                            </a>
                        </p>
                    </div>
                    
                    <h4 style="font-size: 1.25rem; margin-bottom: 1rem;">Follow Us</h4>
                    <div style="display: flex; gap: 1rem;">
                        <a href="https://twitter.com/dohpay" class="glass-card" style="padding: 0.75rem; border-radius: 50%; text-decoration: none; transition: transform 0.3s ease;">
                            Twitter
                        </a>
                        <a href="https://www.linkedin.com/company/dohpay" class="glass-card" style="padding: 0.75rem; border-radius: 50%; text-decoration: none; transition: transform 0.3s ease;">
                            LinkedIn
                        </a>
                        <a href="https://youtube.com/@dohpay" class="glass-card" style="padding: 0.75rem; border-radius: 50%; text-decoration: none; transition: transform 0.3s ease;">
                            YouTube
                        </a>
                    </div>
                </div>
                
                <div style="grid-column: span 2;">
                    <div class="glass-card">
                        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Send us a message</h3>
                        <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                            We typically respond within 1–2 business days.
                        </p>
                        
                        <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
                            <input type="hidden" name="action" value="contact_form">
                            <?php wp_nonce_field('contact_form_nonce', 'contact_nonce'); ?>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                                <div class="form-group">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" id="name" name="name" class="form-input" placeholder="Your name" required>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="form-label">Email *</label>
                                    <input type="email" id="email" name="email" class="form-input" placeholder="you@example.com" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="message" class="form-label">Message *</label>
                                <textarea id="message" name="message" class="form-textarea" rows="6" placeholder="How can we help?" required></textarea>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <button type="submit" class="glass-button">Send Message</button>
                                <span style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                                    By submitting you agree to our terms of service.
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>