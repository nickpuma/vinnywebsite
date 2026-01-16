import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, MessageSquare, Shield, Brain, Clock, GraduationCap, Star, Check, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Full AI Client Sessions",
    description: "Run complete counseling sessions with AI patients across common presenting problems and modalities.",
    gradient: "from-[#4A5D4A] to-[#6B7D63]"
  },
  {
    icon: Star,
    title: "Immediate Skills Feedback",
    description: "Get post-session insights on empathy, technique, and communication so you improve between sessions.",
    gradient: "from-[#4A6B6B] to-[#6B8B8B]"
  },
  {
    icon: Shield,
    title: "Consequence-Free Practice",
    description: "Make mistakes and learn safely, building confidence with repeatable, realistic practice.",
    gradient: "from-[#4A6B4A] to-[#6B7D63]"
  },
  {
    icon: MessageSquare,
    title: "Text + Voice Training",
    description: "Practice both written and spoken therapeutic communication with fluid voice and text modes.",
    gradient: "from-[#5A6B6B] to-[#B5864A]"
  },
  {
    icon: Smartphone,
    title: "iPhone-First Access",
    description: "No desktop setup. Train on your phone between classes, during commutes, or after clinicals.",
    gradient: "from-[#4A5D4A] to-[#4A6B6B]"
  },
  {
    icon: GraduationCap,
    title: "Practicum Ready",
    description: "A simple complement to coursework that extends practice hours without extra scheduling.",
    gradient: "from-[#5A6B52] to-[#6B8B8B]"
  }
];

const comparisonFeatures = [
  {
    feature: "Practice anywhere with your iPhone",
    vinny: true,
    traditional: false
  },
  {
    feature: "Voice + text modalities in one place",
    vinny: true,
    traditional: false
  },
  {
    feature: "Consistent, repeatable client simulations",
    vinny: true,
    traditional: false
  },
  {
    feature: "Immediate feedback after sessions",
    vinny: true,
    traditional: false
  },
  {
    feature: "Flexible, app-based access",
    vinny: true,
    traditional: false
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 pt-24 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/70 text-[color:var(--vnny-text-secondary)] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[rgba(61,79,63,0.12)]">
            <Star className="w-4 h-4" />
            <span>Training Features</span>
          </div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-[color:var(--vnny-text-primary)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Programs Choose iPhone-Based Training
          </motion.h2>
          <motion.p 
            className="text-xl text-[color:var(--vnny-text-secondary)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Vinny fits in your pocket. Students practice counseling skills anytime on iPhone, without waiting for lab time or partner availability.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="vnny-card h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--vnny-text-primary)] mb-4">{feature.title}</h3>
                  <p className="text-[color:var(--vnny-text-secondary)]">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="vnny-card p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-[color:var(--vnny-text-primary)] text-center mb-8">
            Vinny vs Traditional Training Methods
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-[color:var(--vnny-primary-sage-dark)] flex items-center">
                  <Smartphone className="mr-3 w-5 h-5" />
                  Vinny (iPhone-Based)
                </h4>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-[color:var(--vnny-text-muted)] flex items-center">
                  <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3A2,2 0 0,1 1,16V4A2,2 0 0,1 3,2H21Z"/>
                  </svg>
                  Traditional Methods
                </h4>
              </div>
            </div>
            
            <div className="space-y-4">
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center py-4 border-b border-[rgba(61,79,63,0.12)] last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[color:var(--vnny-primary-sage-dark)]" />
                    <span className="text-[color:var(--vnny-text-primary)]">{item.feature}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-[color:var(--vnny-text-muted)]" />
                    <span className="text-[color:var(--vnny-text-muted)]">
                      {item.feature.replace(/iPhone|mobile|anytime|immediate|cost-effective monthly|available 24\/7|both text and voice interactions|voice \+ text modalities in one place|consistent, repeatable client simulations|flexible, app-based access/i, (match) => {
                        switch (match.toLowerCase()) {
                          case 'iphone': return 'computer access';
                          case 'mobile': return 'desktop-bound';
                          case 'anytime': return 'scheduled sessions';
                          case 'immediate': return 'Delayed feedback';
                          case 'cost-effective monthly': return 'Higher per-course costs';
                          case 'available 24/7': return 'Limited hours';
                          case 'both text and voice interactions': return 'Single modality only';
                          case 'voice + text modalities in one place': return 'Single modality only';
                          case 'consistent, repeatable client simulations': return 'Inconsistent role-play';
                          case 'flexible, app-based access': return 'Lab-based access';
                          default: return match;
                        }
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
