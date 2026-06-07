import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] inline-block">
              &lt;Contact /&gt;
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's build something intelligent.
            </p>
            <a
              href="mailto:mishajyotirmay@gmail.com"
              className="inline-flex items-center gap-2 mt-3 text-primary/80 hover:text-primary font-mono text-sm transition-colors"
              data-testid="link-email"
            >
              <Mail className="h-4 w-4" />
              mishajyotirmay@gmail.com
            </a>
          </div>

          <div className="bg-card/50 backdrop-blur-xl border border-border rounded-xl p-8 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Name</label>
                  <Input
                    placeholder="Your Name"
                    className="bg-background/50 border-border focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-background/50 border-border focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">Message</label>
                <Textarea
                  placeholder="Initiate handshake..."
                  className="min-h-[150px] bg-background/50 border-border focus-visible:ring-primary focus-visible:border-primary transition-all duration-300 resize-none"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full font-mono bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
                data-testid="button-submit-contact"
              >
                Send.execute()
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-border flex justify-center gap-6">
              <a
                href="https://github.com/mishaaa31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                data-testid="link-github"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                data-testid="link-youtube"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
