import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Wrench, FileCode, Globe, Palette, Brain, GitBranch, Github, Monitor } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: Code },
      { name: "JavaScript", icon: FileCode },
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: FileCode },
      { name: "React", icon: Monitor },
      { name: "MySQL", icon: Database },
      { name: "API", icon: Database },
    ],
  },
  {
    title: "CS Concepts",
    skills: [
      { name: "DSA", icon: Brain },
      { name: "DBMS", icon: Database },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: Monitor },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.15 }}
              >
                <h3 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                      <skill.icon size={28} className="text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
