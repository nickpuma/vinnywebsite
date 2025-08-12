import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, MessageSquare, Shield, Brain, Clock, GraduationCap, Star, Check, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized specifically for iPhone. No clunky desktop interfaces - just intuitive mobile conversations that feel natural.",
    gradient: "from-primary to-accent"
  },
  {
    icon: MessageSquare,
    title: "Text & Voice Options",
    description: "Choose between text-based conversations or voice interactions. Practice both written therapeutic communication and verbal skills.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Shield,
    title: "Consequence-Free Practice",
    description: "Make mistakes and learn without real-world consequences. Build confidence through repeated practice with AI patients.",
    gradient: "from-accent to-secondary"
  },
  {
    icon: Brain,
    title: "AI Patient Vignettes",
    description: "Practice with diverse AI patients representing various mental health conditions, demographics, and therapeutic challenges.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Clock,
    title: "Practice Anytime",
    description: "No scheduling needed. Access therapy training 24/7 from your iPhone. Perfect for busy students and working professionals.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: GraduationCap,
    title: "Practicum Support",
    description: "Perfect complement to traditional practicum training. Supplement in-person sessions with additional practice opportunities.",
    gradient: "from-accent to-secondary"
  }
];

const comparisonFeatures = [
  {
    feature: "Practice anywhere with your iPhone",
    vinny: true,
    traditional: false
  },
  {
    feature: "Both text and voice interactions",
    vinny: true,
    traditional: false
  },
  {
    feature: "Available 24/7 for practice",
    vinny: true,
    traditional: false
  },
  {
    feature: "Immediate feedback and insights",
    vinny: true,
    traditional: false
  },
  {
    feature: "Cost-effective monthly subscription",
    vinny: true,
    traditional: false
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Our Features</span>
          </div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose iPhone-Based Training?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Unlike desktop-bound competitors, Vinny fits in your pocket. Practice therapy skills anywhere, anytime - in the library, during commute, or between classes.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-muted/30">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            Vinny vs Traditional Training Methods
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary flex items-center">
                  <Smartphone className="mr-3 w-5 h-5" />
                  Vinny (iPhone-Based)
                </h4>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-muted-foreground flex items-center">
                  <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3A2,2 0 0,1 1,16V4A2,2 0 0,1 3,2H21Z"/>
                  </svg>
                  Traditional Methods
                </h4>
              </div>
            </div>
            
            <div className="space-y-4">
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center py-4 border-b border-border/40 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item.feature}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-destructive" />
                    <span className="text-muted-foreground">
                    {item.feature.replace(/iPhone|mobile|anytime|immediate|cost-effective monthly|available 24\/7|both text and voice interactions/i, (match) => {
  switch (match.toLowerCase()) {
    case 'iphone': return 'computer access';
    case 'mobile': return 'desktop-bound';
    case 'anytime': return 'scheduled sessions';
    case 'immediate': return 'Delayed feedback';
    case 'cost-effective monthly': return 'Higher per-course costs';
    case 'available 24/7': return 'Not Available 24/7';
    case 'both text and voice interactions': return 'Only text interactions';
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
