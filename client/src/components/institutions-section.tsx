import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const institutionTypes = [
  {
    title: "Universities & Colleges",
    description: "Enhance your therapy training programs with mobile-first AI practice. Perfect for psychology, counseling, and social work departments.",
    features: [
      "Practicum enhancement",
      "Student skill assessment", 
      "Curriculum integration"
    ],
    image: "https://www.graduateprogram.org/wp-content/uploads/2021/03/Mar-19-Social-Emotional-Learning-for-the-Role-of-School-Counselor_web.jpg"
  },
  {
    title: "Treatment Centers",
    description: "Train new therapists and provide ongoing professional development for existing staff with realistic patient scenarios.",
    features: [
      "Staff training programs",
      "Continuing education",
      "Quality assurance"
    ],
    image: "https://yogawithdakota.com/wp-content/uploads/2020/10/yoga-retreat.jpg"
  },
  {
    title: "Crisis Prevention Centers",
    description: "Prepare crisis counselors with high-stakes scenarios including suicide prevention and addiction intervention training.",
    features: [
      "Crisis intervention practice",
      "Suicide prevention training",
      "Emergency response prep"
    ],
    image: "https://www.ascendantny.com/wp-content/uploads/2023/12/tmp659yk67q-1.jpg"
  }
];

export default function InstitutionsSection() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:institutions@vnny.io';
  };

  const handleDemoClick = () => {
    window.location.href = 'mailto:demo@vnny.io?subject=Schedule Demo Request';
  };

  return (
    <section id="institutions" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educational institutions and treatment centers choose Vinny to modernize their therapy training programs and replace outdated technologies.
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
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-background">
                <div className="relative">
                  <img 
                    src={institution.image} 
                    alt={institution.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">{institution.title}</h3>
                  <p className="text-muted-foreground mb-4">{institution.description}</p>
                  <ul className="space-y-2">
                    {institution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mr-2" />
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
          className="bg-background rounded-3xl p-8 lg:p-12 shadow-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Ready to Modernize Your Training Program?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading institutions that are replacing outdated training methods with mobile-first AI therapy practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              <Mail className="w-5 h-5 mr-3" />
              Contact for Institutions
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={handleDemoClick}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-4 h-auto"
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
