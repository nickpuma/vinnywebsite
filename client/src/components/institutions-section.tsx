import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const institutionTypes = [
  {
    title: "Universities & Colleges",
    description: "Extend skills practice outside the lab with iPhone-first simulations that complement coursework and practicum.",
    features: [
      "Curriculum-ready practice",
      "Consistent skills development",
      "Easy student access"
    ],
    image: "https://www.graduateprogram.org/wp-content/uploads/2021/03/Mar-19-Social-Emotional-Learning-for-the-Role-of-School-Counselor_web.jpg"
  },
  {
    title: "Treatment Centers",
    description: "Give new staff and supervisors realistic sessions for skill refreshers and safe scenario practice.",
    features: [
      "Onboarding support",
      "Ongoing development",
      "Scenario-based refreshers"
    ],
    image: "https://yogawithdakota.com/wp-content/uploads/2020/10/yoga-retreat.jpg"
  },
  {
    title: "Crisis Prevention Centers",
    description: "Prepare counselors with high-stakes scenarios in a consistent, repeatable training environment.",
    features: [
      "Crisis response drills",
      "De-escalation practice",
      "Confidence building"
    ],
    image: "https://www.ascendantny.com/wp-content/uploads/2023/12/tmp659yk67q-1.jpg"
  }
];

export default function InstitutionsSection() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:enterprise@vnny.io';
  };

  const handleDemoClick = () => {
    window.location.href = 'mailto:demo@vnny.io?subject=Schedule Demo Request';
  };

  return (
    <section id="institutions" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--vnny-text-primary)] mb-6">
            Built for Training Programs
          </h2>
          <p className="text-xl text-[color:var(--vnny-text-secondary)] max-w-3xl mx-auto">
            Institutions use Vinny to modernize training with scalable, iPhone-first practice that students can access anytime.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {institutionTypes.map((institution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="vnny-card h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-transparent border-0">
                <div className="relative">
                  <img 
                    src={institution.image} 
                    alt={institution.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[color:var(--vnny-text-primary)] mb-4">{institution.title}</h3>
                  <p className="text-[color:var(--vnny-text-secondary)] mb-4">{institution.description}</p>
                  <ul className="space-y-2">
                    {institution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[color:var(--vnny-text-secondary)]">
                        <Check className="w-4 h-4 text-[color:var(--vnny-primary-sage-dark)] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="vnny-card p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-[color:var(--vnny-text-primary)] mb-6">
            Ready to Modernize Your Training Program?
          </h3>
          <p className="text-xl text-[color:var(--vnny-text-secondary)] mb-8 max-w-2xl mx-auto">
            Bring consistent AI practice to students and staff with iPhone-first training that scales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleEmailClick}
              className="vnny-btn vnny-btn-primary text-lg px-8 py-4 h-auto hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-3" />
              Contact for Institutions
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={handleDemoClick}
              className="vnny-btn vnny-btn-secondary text-lg px-8 py-4 h-auto hover:shadow-md transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
