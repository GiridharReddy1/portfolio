import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// about me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Get to know <span className="text-gradient">me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm Giridhar Reddy, a Computer Science student with a deep interest in software development. I love learning new programming languages, building hands-on projects, and sharpening my problem-solving skills. My goal is to become a skilled software engineer who creates impactful, real-world applications. I'm constantly exploring new technologies and frameworks to expand my skill set and contribute to meaningful projects.
            </p>

            <div className="grid gap-4">
              {[
                { icon: Code2, title: "Developer", desc: "Building projects with Python, JavaScript & modern web tech" },
                { icon: GraduationCap, title: "CS Student", desc: "Studying Computer Science with focus on DSA & DBMS" },
                { icon: Target, title: "Problem Solver", desc: "Competitive programming & algorithmic thinking" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
