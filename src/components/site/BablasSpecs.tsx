import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features: string[] = [
  "Auto-pressurization system for consistent flow",
  "Stainless steel body for durability", 
  "Precision spout dispensing – no losses",
  "Integrated cashless payment system",
  "Real-time IoT monitoring",
  "Touch-free dispensing operation",
];

export default function BablasSpecs() {
  return (
    <section id="products" className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Bablas-Sip Station</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Revolutionary automated beverage dispensing technology engineered for precision, efficiency, and seamless user experience.
        </p>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="glass-card p-8">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl">Technical Features</CardTitle>
            <CardDescription className="text-lg">Engineered for reliability and precision in high-traffic environments.</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{f}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="glass-card p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Single Spout Station</CardTitle>
              <CardDescription className="text-lg">Perfect for small to medium venues</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-primary mb-2">KES 45,000</div>
              <p className="text-muted-foreground mb-4">Full payment price</p>
              <p className="text-sm text-muted-foreground">
                Or KES 65,000 in 6-month installments
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Dual Spout Station</CardTitle>
              <CardDescription className="text-lg">Ideal for high-traffic locations</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-primary mb-2">KES 70,000</div>
              <p className="text-muted-foreground mb-4">Full payment price</p>
              <p className="text-sm text-muted-foreground">
                Or KES 90,000 in 6-month installments
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Custom Multi‑Spout</CardTitle>
              <CardDescription className="text-lg">Tailored for enterprise needs</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-primary mb-2">Custom Pricing</div>
              <p className="text-muted-foreground mb-4">Contact us for quote</p>
              <p className="text-sm text-muted-foreground">
                Fully customizable configurations for unique operational requirements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}