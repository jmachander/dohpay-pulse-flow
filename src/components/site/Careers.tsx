import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Careers() {
  const team = [
    { role: "CEO", name: "TBD" },
    { role: "CTO", name: "TBD" },
    { role: "COO", name: "TBD" },
    { role: "Project Lead", name: "TBD" },
    { role: "Others", name: "We're growing" },
  ];
  return (
    <section id="careers" className="container py-10">
      <h2 className="mb-3 text-base font-semibold">September Intern Roles – Building Traction</h2>
      <p className="mb-4 max-w-prose text-sm text-muted-foreground">
        These roles contribute to market penetration, product development, digital presence, and data capabilities.
      </p>

      <Accordion type="single" collapsible className="bg-card/40 rounded-lg border backdrop-blur">
        <AccordionItem value="role-1">
          <AccordionTrigger className="text-sm px-4">Business Development & Market Research Intern</AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>Identify target segments and partnerships</li>
              <li>Conduct competitive analysis and pricing studies</li>
              <li>Support go-to-market experiments</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="role-2">
          <AccordionTrigger className="text-sm px-4">Junior Automation & Product Development Intern – Mechanical/Electrical</AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>Assist in prototyping mechanical and electrical subsystems</li>
              <li>Run validation tests and document results</li>
              <li>Contribute to reliability and safety improvements</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="role-3">
          <AccordionTrigger className="text-sm px-4">Digital Marketing & Content Creation Intern</AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>Produce social, blog, and video content</li>
              <li>Optimize campaigns and web presence</li>
              <li>Report on engagement metrics</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="role-4">
          <AccordionTrigger className="text-sm px-4">Full Stack Software Developer Intern</AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>Contribute to web app features and integrations</li>
              <li>Collaborate across frontend, backend, and data pipelines</li>
              <li>Write tests and docs for reliability</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4">
        <Button size="sm" asChild>
          <a href="mailto:hr@dohpay.co.ke">Apply Now</a>
        </Button>
      </div>

      <section aria-labelledby="team-heading" className="mt-8">
        <h3 id="team-heading" className="mb-3 text-base font-semibold">Our Team</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m, i) => (
            <Card key={i} className="bg-card/40 backdrop-blur">
              <CardHeader className="p-4 pb-2 flex-row items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{m.role.split(" ").map((s) => s[0]).join("").slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm">{m.role}</CardTitle>
                  <p className="text-xs text-muted-foreground">{m.name}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
