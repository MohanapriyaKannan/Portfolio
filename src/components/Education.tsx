import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-xl glass p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Sri Sivasubramaniya Nadar College of Engineering
                  </h3>
                  <p className="text-primary font-medium">
                    Bachelor of Engineering (B.E.), Computer Science Engineering
                  </p>
                </div>
                <div className="text-5xl font-bold font-mono text-gradient-primary mt-4 md:mt-0">
                  8.52
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>2024 - 2028</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Pursuing excellence in Computer Science with focus on algorithms, data structures, 
                  and software engineering. Active participation in hackathons and competitive programming.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;