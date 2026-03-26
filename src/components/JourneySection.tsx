import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "SR University",
    duration: "2023 – 2027",
    detail: "CGPA: 7.5",
    current: true,
  },
  {
    degree: "Intermediate (12th)",
    institution: "Sri Krishnaveni Jr College",
    duration: "2021 – 2023",
    detail: "Percentage: 85%",
    current: false,
  },
  {
    degree: "Secondary School (10th)",
    institution: "Sri Chaitanya School",
    duration: "2021",
    detail: "CGPA: 10",
    current: false,
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// education</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            My <span className="text-gradient">Journey</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col gap-10">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 sm:left-6 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 card-glow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-primary">{edu.duration}</span>
                      {edu.current && <Badge variant="default">Current</Badge>}
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <GraduationCap size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                        <p className="text-sm font-mono text-primary/80">{edu.detail}</p>
                      </div>
                    </div>
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

export default JourneySection;
