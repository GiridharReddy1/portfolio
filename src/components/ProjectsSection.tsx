import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, BarChart3, Calculator, Lock } from "lucide-react";

const projects = [
  {
    title: "Resume Analyzer",
    desc: "An intelligent tool that parses and analyzes resumes, extracting key skills and experience to provide actionable feedback and improvement suggestions.",
    tech: ["Python", "Data Analysis", "NLP"],
    icon: BarChart3,
  },
  {
    title: "Client & Editor Marketplace",
    desc: "A full-stack marketplace platform connecting clients with skilled editors and freelancers for seamless project collaboration and delivery.",
    tech: ["React", "JavaScript", "API"],
    icon: Calculator,
  },
  {
    title: "Password Generator",
    desc: "A secure password generator that creates strong, randomized passwords with customizable length and character options.",
    tech: ["Python", "Security"],
    icon: Lock,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="project-card flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <project.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
