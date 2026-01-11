import { motion } from "framer-motion";
import { Award, Trophy, Star, Target } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Amazon Future Engineer Scholar",
    description: "Awarded for academic excellence and strong performance in Computer Science.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon Selection",
    description: "Selected at SSN internal round among 200+ participating teams.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Target,
    title: "550+ LeetCode Problems",
    description: "Consistent problem-solving with focus on optimized algorithms and data structures.",
    gradient: "from-accent to-pink-500",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition for dedication to learning and building impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="group h-full rounded-xl glass p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.gradient} mb-6 glow-primary`}>
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
