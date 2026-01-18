import { motion } from "framer-motion";
import { Code, Globe, Terminal, Wrench, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Python", "C"],
    color: "primary",
  },
  {
    title: "Core CS",
    icon: BookOpen,
    skills: ["Data Structures", "Algorithms", "OOP", "Operating Systems"],
    color: "accent",
  },
  {
    title: "Web & Systems",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "REST APIs"],
    color: "primary",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
    color: "accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
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
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Skills</span> & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong foundations in CS fundamentals with hands-on experience in modern development tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-xl glass p-6 h-full hover:border-primary/50 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${category.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;