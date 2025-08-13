import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Careers() {
  return (
    <section id="careers" className="container py-32">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-8 md:text-5xl">Join Our Team</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          September Intern Roles – Building Traction. These roles contribute to market penetration, product development, digital presence, and data capabilities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
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
          <div key={i} className="bg-card/40 backdrop-blur border rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-semibold">{role.title}</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              {role.responsibilities.map((resp, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {resp}
                </li>
              ))}
            </ul>
            <a href="mailto:hr@dohpay.co.ke" className="glass-button-primary px-6 py-3 text-base inline-flex">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}