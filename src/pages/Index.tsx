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
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import ProductSpecs from "@/components/site/ProductSpecs";
import Careers from "@/components/site/Careers";

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
            <a href="#products" className="story-link">Products</a>
            <a href="#contact" className="story-link">Contact</a>
            <a href="#careers" className="story-link">Careers</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button size="sm" asChild className="hidden md:inline-flex"><a href="#contact">Get Started</a></Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(v => !v)}>
              <Menu />
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-2 flex flex-col text-sm">
              <a href="#home" className="py-2" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#products" className="py-2" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#contact" className="py-2" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="#careers" className="py-2" onClick={() => setMenuOpen(false)}>Careers</a>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="pt-20">
        <section className="container grid items-center gap-8 py-10 md:grid-cols-2">
          <motion.div {...fadeIn} transition={{ duration: 0.4 }} className="space-y-4">
            <Badge className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-success" />
              Next-Gen Beverage Technology
            </Badge>
            <h1 className="bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent text-lg font-bold">
              Revolutionizing Beverage Dispensing
            </h1>
            <p className="text-sm text-muted-foreground max-w-prose">
              Bablas-Sip Station delivers automated, high-precision beverage dispensing for high-traffic social environments. Engineering innovation meets user experience.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" asChild>
                <a href="#products">View Products</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#demo" className="inline-flex items-center gap-2"><Play className="h-4 w-4" /> Watch Demo</a>
              </Button>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
            <img src={heroImage} alt="Automated beverage dispensing system hero" loading="lazy" className="w-full rounded-xl border bg-card/40 shadow" />
            <div className="absolute right-4 top-4 rounded-lg border bg-background/70 px-3 py-2 text-xs shadow backdrop-blur">
              99.9% System Uptime
            </div>
          </motion.div>
        </section>

        <section className="container py-10">
          <motion.div {...fadeIn} transition={{ duration: 0.4 }} className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-base font-semibold">Youth-Led Engineering Innovation</h2>
              <p className="text-sm text-muted-foreground">Chandaria Business Innovation and Incubation Center, Nairobi, Kenya</p>
              <p className="text-sm text-muted-foreground max-w-prose">
                Founded by young engineers passionate about transforming the beverage industry through automation. Our mission is to enhance user experience while maximizing operational efficiency.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success" /> Advanced IoT integration for real-time monitoring</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success" /> Sustainable design</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success" /> Continuous innovation via customer feedback</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Automated Precision", desc: "Advanced sensors ensure accuracy every time, reducing waste and maximizing efficiency." },
                { title: "High-Traffic Ready", desc: "Built for demanding social environments with rapid service and minimal maintenance." },
                { title: "Smart Analytics", desc: "Real-time monitoring and insights optimize operations and predict maintenance." },
              ].map((f, i) => (
                <Card key={i} className="bg-card/40 backdrop-blur">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">{f.title}</CardTitle>
                    <CardDescription className="text-xs">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Product Specs */}
        <ProductSpecs />

        <section id="products" className="container py-10">
          <h2 className="mb-4 text-base font-semibold">Products</h2>
          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="bg-card/40">
                  <Skeleton className="h-32 w-full rounded-t-lg" />
                  <CardContent className="p-4 space-y-2">
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-3 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: product1, name: "Bablas-Sip Station", desc: "Modular dual-nozzle station.", price: "$—" },
                { img: product2, name: "Precision Nozzle", desc: "High-accuracy dispensing.", price: "$—" },
                { img: product3, name: "Ops Analytics", desc: "Real-time dashboards.", price: "$—" },
                { img: product4, name: "Compact Kiosk", desc: "Cashless beverage kiosk.", price: "$—" },
              ].map((p, i) => (
                <Card key={i} className="overflow-hidden bg-card/40 backdrop-blur">
                  <img src={p.img} alt={`${p.name} product image`} loading="lazy" className="h-32 w-full object-cover" />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm font-medium">
                      <span>{p.name}</span>
                      <span className="text-muted-foreground">{p.price}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="container grid gap-8 py-10 md:grid-cols-3">
          <div className="md:col-span-1 space-y-3">
            <h2 className="text-base font-semibold">Contact Us</h2>
            <p className="text-sm text-muted-foreground">Have a question or want a demo? Reach out and our team will respond promptly.</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>Chandaria Business Innovation and Incubation Center, Nairobi, Kenya</p>
              <p><a href="mailto:hello@dohpay.co.ke" className="underline-offset-2 hover:underline">hello@dohpay.co.ke</a></p>
              <p><a href="tel:+254700000000" className="underline-offset-2 hover:underline">+254 700 000 000</a></p>
            </div>
            <div className="flex gap-3 text-muted-foreground pt-2">
              <a href="https://twitter.com/dohpay" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/dohpay" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="https://youtube.com/@dohpay" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          <Card className="md:col-span-2 bg-card/40 backdrop-blur">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Send a message</CardTitle>
              <CardDescription className="text-xs">We typically respond within 1–2 business days.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <form onSubmit={onSubmit} className="grid gap-3">
                <div className="grid gap-1">
                  <label htmlFor="name" className="text-xs">Name</label>
                  <Input id="name" name="name" placeholder="Your name" className="h-9 text-sm" />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="email" className="text-xs">Email*</label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-9 text-sm" required />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="message" className="text-xs">Message*</label>
                  <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-[96px] text-sm" required />
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm" type="submit">Submit</Button>
                  <span className="text-xs text-muted-foreground">By submitting you agree to our terms.</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Careers */}
        <Careers />

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
