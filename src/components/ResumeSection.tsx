import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">// resume</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Download my resume to learn more about my education, experience, and skills.
          </p>
          <a
            href="/GIRIDHAR_REDDY_RESUME_1.pdf"
            download="Giridhar_Reddy_Resume.pdf"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
          >
            <FileDown size={22} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
