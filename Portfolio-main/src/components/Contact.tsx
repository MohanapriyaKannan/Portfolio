import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:mohi05.kannan@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in touch before I write another line of code!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div className="rounded-xl glass p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Name<span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="Your name, your fame"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email<span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="Where can I reach you back?"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Temporary emails are also accepted, unless you wish to hear back 😉
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Message<span className="text-primary">*</span>
                  </label>
                  <Textarea
                    placeholder="Your words, my inbox."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[120px] resize-y"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="rounded-xl glass p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:mohi05.kannan@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      mohi05.kannan@gmail.com
                    </div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/mohanapriya-kannan-51b815329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      mohanapriya-kannan
                    </div>
                  </div>
                </a>

                <a 
                  href="https://github.com/MohanapriyaKannan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      MohanapriyaKannan
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Chennai, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
