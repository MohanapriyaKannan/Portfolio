import { motion } from "framer-motion";
import { ExternalLink, Code2, Zap, Shield, Users } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Phishing Detection System",
    event: "Built with India Hackathon",
    description: "ML-based URL classification achieving 92% detection accuracy with real-time validation.",
    techStack: ["Python", "Pandas", "ML", "JavaScript", "HTML/CSS"],
    highlights: [
      "92% detection accuracy",
      "25% reduced training time",
      "Real-time validation UI"
    ],
    contribution: "ML model design, feature engineering, evaluation metrics, and frontend integration.",
    icon: Shield,
    gradient: "from-primary to-cyan-400",
  },
  {
    title: "Argo Ocean Explorer",
    event: "Smart India Hackathon",
    description: "Interactive marine data analysis platform using real-time ARGO ocean datasets.",
    techStack: ["Python", "REST APIs", "JavaScript", "Data Viz"],
    highlights: [
      "Real-time ocean data",
      "Interactive dashboards",
      "6-member team collaboration"
    ],
    contribution: "Backend data handling, API integration, and frontend visualization logic.",
    icon: Code2,
    gradient: "from-blue-500 to-primary",
  },
  {
    title: "WaitMate Queue System",
    event: "SSN 4-Hour Hackathon",
    description: "Real-time queue monitoring that reduced average waiting time by 30%.",
    techStack: ["JavaScript", "HTML", "CSS", "State Management"],
    highlights: [
      "30% reduced wait time",
      "MVP in 4 hours",
      "Concurrent user handling"
    ],
    contribution: "Core queue logic design, state management, and frontend implementation.",
    icon: Users,
    gradient: "from-accent to-pink-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Projects</span> that Solve Problems
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From hackathons to real-world applications — building impactful solutions with modern tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full rounded-xl glass p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{project.event}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-secondary/50 text-muted-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Contribution */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary font-medium">My Role:</span> {project.contribution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
