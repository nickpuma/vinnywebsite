import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How is Vinny different from desktop-based training platforms?",
    answer: "Vinny is designed specifically for iPhone, making it incredibly convenient to practice therapy skills anywhere. Unlike desktop platforms that require you to be at a computer, Vinny fits in your pocket and allows for natural, mobile conversations with AI patients."
  },
  {
    question: "What types of AI patients can I practice with?",
    answer: "Our AI patient library includes diverse scenarios covering various mental health conditions, age groups, and therapeutic challenges. From anxiety and depression to crisis intervention and addiction counseling, you'll find patients that match your training needs."
  },
  {
    question: "Can I use Vinny as part of my practicum requirements?",
    answer: "Absolutely! Many institutions use Vinny to supplement traditional practicum training. It's perfect for additional practice hours and skill refinement outside of scheduled supervision sessions."
  },
  {
    question: "Is there a difference between the text and voice versions?",
    answer: "The text version ($20/month) focuses on written therapeutic communication, while the voice version ($100/month) includes spoken conversations with advanced speech analysis, tone assessment, and real-time coaching features."
  },
  {
    question: "How does the free trial work?",
    answer: "The free trial gives you access to the text version for a limited time, allowing you to experience conversations with our AI patients and see how Vinny can enhance your training before committing to a subscription."
  },
  {
    question: "Can educational institutions get volume pricing?",
    answer: "Yes! We offer special pricing for educational institutions, treatment centers, and training programs. Contact us at institutions@vnny.io for custom pricing and integration options."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--vnny-text-primary)] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[color:var(--vnny-text-secondary)]">
            Everything you need to know about Vinny and iPhone-based therapy training.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="vnny-card rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-lg font-semibold text-[color:var(--vnny-text-primary)] py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[color:var(--vnny-text-secondary)] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
