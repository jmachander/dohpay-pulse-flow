import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Careers() {
  return (
    <section id="careers" className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          September Intern Roles – Building Traction. These roles contribute to market penetration, product development, digital presence, and data capabilities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Business Development & Market Research Intern",
            responsibilities: [
              "Identify target segments and partnerships",
              "Conduct competitive analysis and pricing studies", 
              "Support go-to-market experiments"
            ]
          },
          {
            title: "Junior Automation & Product Development Intern – Mechanical/Electrical",
            responsibilities: [
              "Assist in prototyping mechanical and electrical subsystems",
              "Run validation tests and document results",
              "Contribute to reliability and safety improvements"
            ]
          },
          {
            title: "Digital Marketing & Content Creation Intern", 
            responsibilities: [
              "Produce social, blog, and video content",
              "Optimize campaigns and web presence",
              "Report on engagement metrics"
            ]
          },
          {
            title: "Full Stack Software Developer Intern",
            responsibilities: [
              "Contribute to web app features and integrations",
              "Collaborate across frontend, backend, and data pipelines",
              "Write tests and docs for reliability"
            ]
          }
        ].map((role, i) => (
          <div key={i} className="bg-card/40 backdrop-blur border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">{role.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {role.responsibilities.map((resp, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {resp}
                </li>
              ))}
            </ul>
            <Button size="sm" asChild>
              <a href="mailto:hr@dohpay.co.ke">Apply Now</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
