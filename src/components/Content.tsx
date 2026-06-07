import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Code, Compass } from "lucide-react";

const channels = [
  {
    name: "Not Just Engineer",
    description: "Tech education, engineering insights, and deep dives into AI tools.",
    icon: <Code className="w-8 h-8 text-primary mb-4" />
  },
  {
    name: "Tea.with.biscottis",
    description: "Lifestyle, creative content, and the aesthetics of everyday hacking.",
    icon: <Play className="w-8 h-8 text-primary mb-4" />
  },
  {
    name: "Jigyaasa Junction",
    description: "Curiosity-driven learning, exploration, and tech explainers.",
    icon: <Compass className="w-8 h-8 text-primary mb-4" />
  }
];

export function Content() {
  return (
    <section id="content" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] inline-block">
              &lt;Content Creation /&gt;
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge, aesthetics, and building a community around tech and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full bg-background/50 border-border hover:border-primary/50 transition-all duration-300 text-center flex flex-col items-center p-6 group">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    {channel.icon}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-mono text-xl">{channel.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between w-full">
                    <p className="text-muted-foreground mb-6">
                      {channel.description}
                    </p>
                    <Button className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground border border-border group-hover:border-primary/50 transition-all">
                      View Channel
                    </Button>
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
