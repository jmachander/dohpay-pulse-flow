/**
 * DohPay Solutions - Main JavaScript File
 */

(function() {
    'use strict';
    
    // DOM Content Loaded Event
    document.addEventListener('DOMContentLoaded', function() {
        initializeTheme();
        setupSmoothScrolling();
        setupMobileMenu();
        setupAnimations();
        setupContactForm();
        setupPerformanceOptimizations();
    });
    
    // Initialize theme functionality
    function initializeTheme() {
        console.log('DohPay Solutions theme initialized');
        
        // Add loading class to body
        document.body.classList.add('theme-loading');
        
        // Remove loading class after a short delay
        setTimeout(function() {
            document.body.classList.remove('theme-loading');
            document.body.classList.add('theme-loaded');
        }, 500);
    }
    
    // Setup smooth scrolling for anchor links
    function setupSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(function(link) {
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
    }
    
    // Setup mobile menu functionality
    function setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        const getStartedBtn = document.querySelector('.glass-button');
        
        // Show/hide mobile elements based on screen size
        function handleResponsive() {
            if (window.innerWidth <= 768) {
                if (navMenu) navMenu.style.display = 'none';
                if (mobileToggle) mobileToggle.style.display = 'block';
                if (getStartedBtn) getStartedBtn.style.display = 'none';
            } else {
                if (navMenu) navMenu.style.display = 'flex';
                if (mobileToggle) mobileToggle.style.display = 'none';
                if (mobileMenu) mobileMenu.style.display = 'none';
                if (getStartedBtn) getStartedBtn.style.display = 'inline-flex';
            }
        }
        
        // Initial call
        handleResponsive();
        
        // Handle window resize
        window.addEventListener('resize', handleResponsive);
        
        // Mobile menu toggle
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', function() {
                const isVisible = mobileMenu.style.display === 'block';
                mobileMenu.style.display = isVisible ? 'none' : 'block';
                
                // Toggle aria-expanded for accessibility
                this.setAttribute('aria-expanded', !isVisible);
            });
            
            // Close mobile menu when clicking on links
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileMenu.style.display = 'none';
                    mobileToggle.setAttribute('aria-expanded', 'false');
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.style.display = 'none';
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    
    // Setup scroll-based animations
    function setupAnimations() {
        const animatedElements = document.querySelectorAll('.glass-card, .feature-card');
        
        // Initialize elements with starting animation state
        animatedElements.forEach(function(element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        // Intersection Observer for better performance
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        observer.unobserve(element);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            animatedElements.forEach(function(element) {
                observer.observe(element);
            });
        } else {
            // Fallback for older browsers
            function checkAnimation() {
                const windowHeight = window.innerHeight;
                
                animatedElements.forEach(function(element) {
                    const elementTop = element.getBoundingClientRect().top;
                    
                    if (elementTop < windowHeight * 0.8) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            window.addEventListener('scroll', throttle(checkAnimation, 100));
            checkAnimation(); // Initial check
        }
        
        // Setup glassmorphism button hover effects
        setupGlassButtonEffects();
    }
    
    // Setup glassmorphism button hover effects
    function setupGlassButtonEffects() {
        const glassButtons = document.querySelectorAll('.glass-button');
        
        glassButtons.forEach(function(button) {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
                this.style.boxShadow = '0 15px 45px hsla(28, 100%, 50%, 0.2)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 8px 32px hsla(28, 100%, 50%, 0.1)';
            });
            
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-1px) scale(0.98)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
        });
        
        // Add ripple effect to buttons
        glassButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.3)';
                ripple.style.pointerEvents = 'none';
                ripple.style.animation = 'ripple 0.6s linear';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(function() {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // Setup contact form handling
    function setupContactForm() {
        const contactForm = document.querySelector('form[action*="admin-post.php"]');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                const formData = new FormData(this);
                
                // Validate form
                const email = formData.get('email');
                const message = formData.get('message');
                
                if (!email || !message) {
                    showNotification('Please fill in all required fields.', 'error');
                    return;
                }
                
                // Show loading state
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                submitButton.style.opacity = '0.7';
                
                // Submit form via AJAX
                fetch(this.action, {
                    method: 'POST',
                    body: formData
                })
                .then(function(response) {
                    if (response.ok) {
                        showNotification('Thank you for your message! We will get back to you within 1-2 business days.', 'success');
                        contactForm.reset();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(function(error) {
                    console.error('Error:', error);
                    showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
                })
                .finally(function() {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.opacity = '1';
                });
            });
        }
    }
    
    // Show notification
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            color: white;
            font-weight: 500;
            z-index: 10000;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            max-width: 350px;
            animation: slideInRight 0.3s ease;
            ${type === 'success' ? 'background: linear-gradient(135deg, #10b981, #059669);' : 'background: linear-gradient(135deg, #ef4444, #dc2626);'}
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(function() {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Setup performance optimizations
    function setupPerformanceOptimizations() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(function(img) {
                imageObserver.observe(img);
            });
        }
        
        // Preload critical resources
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'
        ];
        
        criticalResources.forEach(function(resource) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
    
    // Utility function: Throttle
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = function() {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Utility function: Debounce
    function debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = function() {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes slideInRight {
            0% {
                transform: translateX(100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            0% {
                transform: translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .theme-loading {
            overflow: hidden;
        }
        
        .theme-loading * {
            animation-play-state: paused;
        }
        
        .theme-loaded * {
            animation-play-state: running;
        }
    `;
    document.head.appendChild(style);
    
})();