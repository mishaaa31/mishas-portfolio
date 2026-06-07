import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "AI Production Operator",
    company: "KitaModels NEW YORK",
    date: "Jan 2026 – Apr 2026",
    type: "Work Experience",
    bullets: [
      "Performed rapid prompt iteration using LLMs to achieve high-quality visual outputs and meet specific brand aesthetics.",
      "Managed end-to-end production cycles — file organization, metadata management, and daily status reporting to stakeholders.",
      "Engineered digital workspaces on Freepik to streamline creative asset pipelines and improve team collaboration.",
      "Optimized creative workflows to ensure high production efficiency across commercial photography deliverables.",
    ],
  },
  {
    title: "GEN-AI Intern",
    company: "IBM",
    date: "Industrial Training",
    type: "Industrial Training",
    bullets: [
      "Successfully completed intensive training on Generative AI concepts and enterprise-grade applications.",
      "Earned a stipend for a project developed during the internship tenure.",
      "Applied Python and Streamlit skills to solve real-world problem statements presented by the organization.",
    ],
  },
  {
    title: "Full Stack – Python Intern",
    company: "SRDT Training & Development Division",
    date: "Industrial Training",
    type: "Industrial Training",
    bullets: [
      "Completed comprehensive training on Full Stack Python development.",
      "Earned a certificate of completion and applied learnings to a real-world project.",
      "Built and deployed a Python-based web application using modern web development practices.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            &lt;Experience /&gt;
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className="bg-background/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)]"
                  data-testid={`card-experience-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-base font-medium text-muted-foreground mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                        <Badge
                          variant="outline"
                          className="font-mono text-xs border-primary/30 text-primary/80 whitespace-nowrap"
                        >
                          {exp.type}
                        </Badge>
                        <span className="font-mono text-sm text-primary">{exp.date}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
