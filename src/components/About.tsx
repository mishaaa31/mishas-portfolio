import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "Java",
  "C++",
  "Generative AI",
  "Machine Learning",
  "Data Analytics",
  "React",
  "Next.js",
  "FastAPI",
  "Streamlit",
  "YOLOv8",
  "OpenAI API",
  "Gemini API",
  "HTML / CSS / JS",
  "Git & GitHub",
];

const certifications = [
  { title: "Generative AI Certificate", issuer: "IBM" },
  { title: "Web Development Certificate", issuer: "SRDT" },
  { title: "Summer Internship Certificates", issuer: "Various" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            &lt;About /&gt;
          </h2>

          <div className="prose prose-invert max-w-none mb-10 text-lg text-muted-foreground space-y-5">
            <p>
              I'm Misha Yadav — a Computer Science Engineering student with a sharp focus on Generative AI, machine learning, and full-stack development. I turn ambitious AI ideas into real, working tools.
            </p>
            <p>
              My work spans civic tech (AI platforms that help communities report infrastructure issues), intelligent admission systems powered by Gemini, and creative AI tooling for social media. I thrive at the intersection of precise engineering and imaginative design.
            </p>
            <p>
              Hands-on experience with IBM's Generative AI program and production-level AI workflows at KitaModels NEW YORK has shaped my ability to build fast, iterate faster, and ship things that actually matter.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-mono mb-5 text-foreground">Technical Stack</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="px-4 py-2 font-mono text-sm border-primary/20 bg-secondary/50 hover:bg-primary/20 transition-colors shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s/+]+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <h3 className="text-xl font-mono mb-5 text-foreground">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-primary/20 bg-card/50 backdrop-blur p-4 hover:border-primary/50 transition-colors"
                  data-testid={`card-cert-${i}`}
                >
                  <p className="font-semibold text-foreground text-sm">{cert.title}</p>
                  <p className="text-xs text-primary font-mono mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
