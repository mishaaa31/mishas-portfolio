import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Jan Nigrani",
    subtitle: "Civic Accountability Platform",
    description:
      "A civic issue reporting platform that uses AI/ML (YOLOv8) to detect potholes and garbage from uploaded images, bridging the gap between citizens and local authorities to improve city infrastructure.",
    tags: ["Python", "Streamlit", "YOLOv8", "Computer Vision", "Civic Tech"],
    github: "https://github.com/mishaaa31",
  },
  {
    title: "Dream University",
    subtitle: "AI-Powered Admission Decision Engine",
    description:
      "An end-to-end AI system that guides students from deep profile analysis to SOP drafting. Engineered a 'Neural Analysis' engine using Gemini 1.5 Pro to calculate admission probabilities, highlight profile risks, and automate real-time document drafting.",
    tags: ["GenAI", "Next.js", "FastAPI", "Gemini 1.5 Pro", "Supabase"],
    github: "https://github.com/mishaaa31",
  },
  {
    title: "AI Caption Generator",
    subtitle: "Social Media Automation Tool",
    description:
      "A Streamlit web app that generates engaging, sentiment-aware social media captions using the OpenAI API. Integrated Googletrans for multi-language support, helping content creators automate impactful and culturally relevant posts.",
    tags: ["Python", "OpenAI API", "Streamlit", "Generative AI", "Sentiment Analysis"],
    github: "https://github.com/mishaaa31",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            &lt;Projects /&gt;
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className="h-full bg-background/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)] flex flex-col"
                  data-testid={`card-project-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-mono text-foreground leading-snug">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-mono">{project.subtitle}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="font-mono text-xs border-primary/30 text-primary/80"
                          data-testid={`badge-tag-${index}-${i}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4 border-t border-border/50 pt-4 mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.github, '_blank')}
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                      data-testid={`button-demo-${index}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
