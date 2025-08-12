import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features: string[] = [
  "Auto-pressurization system for consistent flow",
  "Stainless steel body for durability",
  "Precision spout dispensing – no losses",
  "Integrated cashless payment system",
];

export default function ProductSpecs() {
  return (
    <section id="products" className="container py-10">
      <h2 className="mb-3 text-base font-semibold">Bablas-Sip Station</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card/40 backdrop-blur">
          <CardHeader className="p-4">
            <CardTitle className="text-sm">Technical Features</CardTitle>
            <CardDescription className="text-xs">Engineered for reliability and precision.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <ul className="space-y-2 text-sm">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="bg-card/40 backdrop-blur">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">1 Spout</CardTitle>
              <CardDescription className="text-xs">KES 45,000 full payment</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Or KES 65,000 in 6-month installments.
            </CardContent>
          </Card>
          <Card className="bg-card/40 backdrop-blur">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">2 Spouts</CardTitle>
              <CardDescription className="text-xs">KES 70,000 full payment</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Or KES 90,000 in 6-month installments.
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 bg-card/40 backdrop-blur">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Custom Multi‑Spout</CardTitle>
              <CardDescription className="text-xs">Price on request</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Tailored configurations for unique operational needs.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
