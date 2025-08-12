import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ProductSpecs from "@/components/site/ProductSpecs";

export default function Projects() {
  useEffect(() => {
    const title = "Bablas-Sip Station Project | DohPay Solutions";
    const description = "How to use Bablas-Sip Station: scan QR on dispenser, enter amount, pay, then press the button to dispense.";
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/projects`);

    const howTo = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to use Bablas-Sip Station",
      description,
      step: [
        { "@type": "HowToStep", name: "Scan QR", text: "Scan the QR code on the dispenser." },
        { "@type": "HowToStep", name: "Enter Amount", text: "Enter the amount to dispense on your phone." },
        { "@type": "HowToStep", name: "Pay", text: "Complete the payment when prompted." },
        { "@type": "HowToStep", name: "Dispense", text: "Press the button on the dispenser to load into your cup." },
      ],
    } as const;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(howTo);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/70 backdrop-blur">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="text-sm font-semibold">DohPay Solutions</a>
          <nav className="text-sm">
            <a href="/" className="story-link">Home</a>
          </nav>
        </div>
      </header>

      <main className="pt-8">
        <section className="container py-8">
          <h1 className="text-lg font-bold">Bablas-Sip Station Project</h1>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground">
            Explore the Bablas-Sip Station in depth: technical features, pricing options, and step-by-step usage.
          </p>
        </section>

        <section className="container py-6">
          <h2 className="mb-3 text-base font-semibold">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: "Scan QR", desc: "Scan the QR code on the dispenser.", icon: CheckCircle },
              { title: "Enter Amount", desc: "Enter how much to dispense.", icon: CheckCircle },
              { title: "Pay", desc: "Complete the payment prompt.", icon: CheckCircle },
              { title: "Dispense", desc: "Press the dispenser button to pour.", icon: CheckCircle },
            ].map((s, i) => (
              <Card key={i} className="bg-card/40 backdrop-blur">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm inline-flex items-center gap-2">
                    <s.icon className="h-4 w-4 text-secondary" /> {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-xs text-muted-foreground">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reuse the detailed specs & pricing */}
        <ProductSpecs />

        <section className="container py-10">
          <Card className="bg-card/40 backdrop-blur">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Request a demo</CardTitle>
              <CardDescription className="text-xs">See Bablas-Sip Station in action.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button size="sm" asChild>
                <a href="mailto:hello@dohpay.co.ke?subject=Bablas%20Sip%20Station%20Demo">Book a demo</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
