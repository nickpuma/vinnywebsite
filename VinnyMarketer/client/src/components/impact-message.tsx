import { motion } from "framer-motion";

export default function ImpactMessage() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Better Trained Therapists = Better Patient Outcomes
        </motion.h2>
        <motion.p 
          className="text-xl text-white/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          When therapists have the opportunity to practice and refine their skills in a safe environment, they become more confident, empathetic, and effective in their sessions. This translates directly to improved mental health outcomes for the patients they serve. Every conversation practiced on Vinny is an investment in the healing journey of countless individuals seeking support.
        </motion.p>
      </div>
    </section>
  );
}
