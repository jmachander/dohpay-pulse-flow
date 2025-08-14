import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ApplicationForm from "./ApplicationForm";

export default function Careers() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const positions = [
    {
      title: "Business Development & Market Research Intern",
      description: "Drive market penetration and partnership development",
      requirements: [
        "Recent graduate in Business, Marketing, or related field",
        "Strong analytical and research skills",
        "Excellent communication and presentation abilities",
        "Experience with market analysis tools preferred"
      ],
      responsibilities: [
        "Identify target segments and partnerships",
        "Conduct competitive analysis and pricing studies", 
        "Support go-to-market experiments",
        "Develop client relationship strategies"
      ]
    },
    {
      title: "Junior Automation & Product Development Intern",
      description: "Mechanical/Electrical engineering innovation",
      requirements: [
        "Recent graduate in Mechanical/Electrical Engineering",
        "Experience with CAD software and prototyping",
        "Understanding of automation systems",
        "Knowledge of IoT and embedded systems preferred"
      ],
      responsibilities: [
        "Assist in prototyping mechanical and electrical subsystems",
        "Run validation tests and document results",
        "Contribute to reliability and safety improvements",
        "Support manufacturing process optimization"
      ]
    },
    {
      title: "Digital Marketing & Content Creation Intern", 
      description: "Build our digital presence and brand awareness",
      requirements: [
        "Recent graduate in Marketing, Communications, or related field",
        "Strong content creation and social media skills",
        "Experience with design tools (Canva, Adobe Creative Suite)",
        "Understanding of digital marketing metrics"
      ],
      responsibilities: [
        "Produce social, blog, and video content",
        "Optimize campaigns and web presence", 
        "Report on engagement metrics",
        "Manage brand consistency across platforms"
      ]
    },
    {
      title: "Full Stack Software Developer Intern",
      description: "Build and enhance our software ecosystem",
      requirements: [
        "Recent graduate in Computer Science or Software Engineering",
        "Proficiency in React, Node.js, and database technologies",
        "Experience with API development and integration",
        "Knowledge of cloud platforms preferred"
      ],
      responsibilities: [
        "Contribute to web app features and integrations",
        "Collaborate across frontend, backend, and data pipelines",
        "Write tests and docs for reliability",
        "Support mobile app development initiatives"
      ]
    }
  ];

  const team = [
    { role: "CEO", name: "TBD" },
    { role: "CTO", name: "TBD" },
    { role: "COO", name: "TBD" },
    { role: "Project Lead", name: "TBD" },
    { role: "Others", name: "We're growing" },
  ];

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setShowApplicationForm(true);
  };
  return (
    <section id="careers" className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're looking for passionate, freshly graduated engineers and innovators to help us revolutionize the beverage industry.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {positions.map((position, index) => (
          <Card key={index} className="glass-card p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">{position.title}</CardTitle>
              <p className="text-lg text-muted-foreground">{position.description}</p>
            </CardHeader>
            
            <CardContent className="pt-0 space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {position.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant="glass" 
                size="lg" 
                className="w-full mt-6"
                onClick={() => handleApply(position.title)}
              >
                Apply for this position
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section aria-labelledby="team-heading" className="mt-16">
        <div className="text-center mb-12">
          <h3 id="team-heading" className="text-3xl font-bold mb-4">Our Growing Team</h3>
          <p className="text-lg text-muted-foreground">
            Building the future of beverage technology together
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m, i) => (
            <Card key={i} className="glass-card p-6">
              <CardHeader className="pb-4 flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="text-lg">{m.role.split(" ").map((s) => s[0]).join("").slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{m.role}</CardTitle>
                  <p className="text-muted-foreground">{m.name}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {showApplicationForm && (
        <ApplicationForm 
          position={selectedPosition} 
          onClose={() => setShowApplicationForm(false)} 
        />
      )}
    </section>
  );
}
