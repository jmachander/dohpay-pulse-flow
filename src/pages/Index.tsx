import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Play, Star, Menu, Twitter, Linkedin, Github, Youtube, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-beverage.jpg";
import Careers from "@/components/site/Careers";
import BablasSpecs from "@/components/site/BablasSpecs";

const fadeIn = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };

const Index = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("email") || !data.get("message")) {
      toast({ title: "Please fill in required fields." });
      return;
    }
    toast({ title: "Message sent!", description: "We will get back to you shortly." });
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur">
        <div className="container flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-destructive text-primary-foreground shadow-sm"><Star className="h-3.5 w-3.5" /></span>
            <span className="text-sm font-semibold">DohPay Solutions</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="story-link">Home</a>
            <a href="/projects" className="story-link">Projects</a>
            <a href="#products" className="story-link">Products</a>
            <a href="#contact" className="story-link">Contact</a>
            <a href="#careers" className="story-link">Careers</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="glass" size="sm" asChild className="hidden md:inline-flex"><a href="#contact">Get Started</a></Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(v => !v)}>
              <Menu />
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-2 flex flex-col text-sm">
              <a href="#home" className="py-2" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/projects" className="py-2" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#products" className="py-2" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#contact" className="py-2" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="#careers" className="py-2" onClick={() => setMenuOpen(false)}>Careers</a>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="pt-20">
        <section className="min-h-screen flex items-center container grid gap-12 md:grid-cols-2">
          <motion.div {...fadeIn} transition={{ duration: 0.4 }} className="space-y-8">
            <Badge className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-6 py-3 text-lg rounded-full">
              <span className="inline-block h-3 w-3 rounded-full bg-success" />
              Next-Gen Beverage Technology
            </Badge>
            <h1 className="bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent text-5xl md:text-6xl font-bold leading-tight">
              Revolutionizing Beverage Dispensing
            </h1>
            <p className="text-xl text-muted-foreground max-w-prose leading-relaxed">
              Bablas-Sip Station delivers automated, high-precision beverage dispensing for high-traffic social environments. Engineering innovation meets seamless user experience.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="glass" size="lg" asChild>
                <a href="#products" className="text-lg px-8 py-4">Explore Products</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#demo" className="inline-flex items-center gap-3 text-lg px-8 py-4">
                  <Play className="h-5 w-5" /> Watch Demo
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
            <img src={heroImage} alt="Automated beverage dispensing system hero" loading="lazy" className="w-full rounded-3xl glass-card shadow-2xl" />
            <div className="absolute right-6 top-6 glass-card px-6 py-3 text-lg font-semibold">
              99.9% System Uptime
            </div>
          </motion.div>
        </section>

        <section className="container py-20">
          <motion.div {...fadeIn} transition={{ duration: 0.4 }} className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Youth-Led Engineering Innovation</h2>
                <p className="text-xl text-muted-foreground mb-2">Chandaria Business Innovation and Incubation Center, Nairobi, Kenya</p>
              </div>
              <p className="text-lg text-muted-foreground max-w-prose leading-relaxed">
                Founded by young engineers passionate about transforming the beverage industry through automation. Our mission is to enhance user experience while maximizing operational efficiency through cutting-edge technology.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" /> 
                  <span className="text-lg">Advanced IoT integration for real-time monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" /> 
                  <span className="text-lg">Sustainable design principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" /> 
                  <span className="text-lg">Continuous innovation via customer feedback</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-6">
              {[
                { title: "Automated Precision", desc: "Advanced sensors ensure accuracy every time, reducing waste and maximizing efficiency." },
                { title: "High-Traffic Ready", desc: "Built for demanding social environments with rapid service and minimal maintenance." },
                { title: "Smart Analytics", desc: "Real-time monitoring and insights optimize operations and predict maintenance." },
              ].map((f, i) => (
                <Card key={i} className="glass-card p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{f.title}</CardTitle>
                    <CardDescription className="text-lg">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Import and use BablasSpecs component */}
        <BablasSpecs />

        {/* Careers */}
        <Careers />

        <section id="contact" className="container py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to revolutionize your beverage service? Let's discuss how Bablas-Sip Station can transform your business.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4 text-lg">
                  <p className="text-muted-foreground">Chandaria Business Innovation and Incubation Center, Nairobi, Kenya</p>
                  <p><a href="mailto:hello@dohpay.co.ke" className="text-primary hover:underline">hello@dohpay.co.ke</a></p>
                  <p><a href="tel:+254700000000" className="text-primary hover:underline">+254 700 000 000</a></p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://twitter.com/dohpay" aria-label="Twitter" className="p-3 glass-card rounded-full hover:scale-110 transition-transform">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/dohpay" aria-label="LinkedIn" className="p-3 glass-card rounded-full hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://youtube.com/@dohpay" aria-label="YouTube" className="p-3 glass-card rounded-full hover:scale-110 transition-transform">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="lg:col-span-2 glass-card p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-lg">We typically respond within 1–2 business days.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-base font-medium">Name</label>
                      <Input id="name" name="name" placeholder="Your name" className="h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-medium">Email *</label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-12 text-base" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-base font-medium">Message *</label>
                    <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-[150px] text-base" required />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="glass" size="lg" type="submit">Send Message</Button>
                    <span className="text-sm text-muted-foreground">By submitting you agree to our terms of service.</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        </main>

      <footer className="border-t">
        <div className="container grid gap-8 py-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary text-primary-foreground"><Star className="h-3.5 w-3.5" /></span>
              <span className="text-sm font-semibold">DohPay Solutions</span>
            </div>
            <p className="text-xs text-muted-foreground">Revolutionizing beverage dispensing through innovative automation technology. Engineering solutions for the modern hospitality industry.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Help Center</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><a href="#install">Installation Guide</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#tech">Technical Support</a></li>
              <li><a href="#training">Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-3 text-muted-foreground">
              <a href="https://twitter.com/dohpay" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/dohpay" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="https://github.com/dohpay" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href="https://youtube.com/@dohpay" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t py-3 text-center text-[12px] text-muted-foreground">
          © 2024 DohPay Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
