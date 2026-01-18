import { motion } from "framer-motion";
import { Code2, Flame, Trophy, Target, ExternalLink, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { label: "Total Questions", value: "626", icon: Target },
  { label: "Active Days", value: "230", icon: Calendar },
  { label: "Submissions", value: "1013", icon: Code2 },
  { label: "Max Streak", value: "31", icon: Flame },
];

const problemBreakdown = [
  { level: "Easy", count: 230, color: "bg-emerald-500", percentage: 37 },
  { level: "Medium", count: 354, color: "bg-amber-500", percentage: 57 },
  { level: "Hard", count: 41, color: "bg-rose-500", percentage: 6 },
];

const topTopics = [
  { name: "Arrays", count: 338 },
  { name: "String", count: 128 },
  { name: "HashMap & Set", count: 116 },
  { name: "Math", count: 101 },
  { name: "Dynamic Programming", count: 74 },
  { name: "Sorting", count: 73 },
  { name: "Two Pointers", count: 64 },
  { name: "Binary Search", count: 61 },
];

const CodingStats = () => {
  return (
    <section id="coding-stats" className="py-32 relative">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Competitive Programming</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Coding</span> Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consistent problem-solving with focus on optimized algorithms and efficient data structures.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl glass p-6 text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold font-mono text-gradient-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problem Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl glass p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Problems by Difficulty
            </h3>
            
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="12"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="12"
                    strokeDasharray={`${37 * 2.51} ${100 * 2.51}`}
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="12"
                    strokeDasharray={`${57 * 2.51} ${100 * 2.51}`}
                    strokeDashoffset={`${-37 * 2.51}`}
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="12"
                    strokeDasharray={`${6 * 2.51} ${100 * 2.51}`}
                    strokeDashoffset={`${-94 * 2.51}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono">625</div>
                    <div className="text-xs text-muted-foreground">DSA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {problemBreakdown.map((item) => (
                <div key={item.level} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm">{item.level}</span>
                  </div>
                  <span className="font-mono font-medium">{item.count}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Topics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl glass p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              DSA Topic Analysis
            </h3>
            
            <div className="space-y-4">
              {topTopics.map((topic, index) => (
                <div key={topic.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{topic.name}</span>
                    <span className="font-mono text-muted-foreground">{topic.count}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(topic.count / 338) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-full rounded-full ${index % 2 === 0 ? 'bg-gradient-to-r from-primary to-cyan-400' : 'bg-gradient-to-r from-accent to-pink-500'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary font-semibold"
            asChild
          >
            <a 
              href="https://leetcode.com/u/Mohanapriya_Kannan/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              LeetCode Profile
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            asChild
          >
            <a 
              href="https://codolio.com/profile/Mohanapriya_Kannan" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Codolio Profile
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent/50 hover:bg-accent/10 hover:border-accent transition-all"
            asChild
          >
            <a 
              href="https://www.geeksforgeeks.org/profile/mohi05kejpk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              GFG Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;