import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Tag } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Text Version",
    description: "Perfect for practicing written therapeutic communication skills",
    price: "$20",
    period: "/month",
    badge: "Free Trial",
    badgeColor: "bg-white/80 text-[color:var(--vnny-primary-sage-dark)]",
    features: [
      "Unlimited text conversations with AI patients",
      "Practice written therapeutic responses",
      "Access to full AI patient library",
      "Progress tracking and insights",
      "iPhone app access"
    ],
    buttonText: "Start Free Trial",
    buttonStyle: "vnny-btn vnny-btn-primary hover:shadow-lg",
    cardStyle: "vnny-card"
  },
  {
    name: "Voice Version",
    description: "Complete therapy training with voice interactions and advanced features",
    price: "$100",
    period: "/month",
    badge: "Most Popular",
    badgeColor: "bg-white/20 text-white",
    features: [
      "Everything in Text Version",
      "Voice conversations with AI patients",
      "Advanced speech analysis and feedback",
      "Tone and empathy assessment",
      "Real-time conversation coaching",
      "Premium support"
    ],
    buttonText: "Upgrade to Voice",
    buttonStyle: "vnny-btn vnny-btn-secondary bg-white/90 text-[color:var(--vnny-primary-sage-dark)] hover:bg-white",
    cardStyle: "vnny-bg-sage-dark vnny-noise text-white"
  }
];

export default function PricingSection() {
  const handlePlanClick = () => {
    window.open('https://apps.apple.com/us/app/vinnyai-chat/id6740640637', '_blank');
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:enterprise@vnny.io?subject=Enterprise Pricing Inquiry';
  };

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/70 text-[color:var(--vnny-text-secondary)] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[rgba(61,79,63,0.12)]">
            <Tag className="w-4 h-4" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--vnny-text-primary)] mb-6">
            Affordable Training for Everyone
          </h2>
          <p className="text-xl text-[color:var(--vnny-text-secondary)] max-w-3xl mx-auto">
            Choose the plan that fits your learning style. Every plan includes access to the AI patient library.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative hover:shadow-xl transition-shadow duration-300 border-0 ${plan.cardStyle} h-full`}>
                <div className={`absolute top-6 right-6 ${plan.badgeColor} px-3 py-1 rounded-full text-sm font-medium`}>
                  {plan.badge}
                </div>
                
                <CardContent className="p-8 lg:p-12">
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.name === 'Voice Version' ? 'text-white' : 'text-[color:var(--vnny-text-primary)]'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mb-6 ${plan.name === 'Voice Version' ? 'text-white/80' : 'text-[color:var(--vnny-text-secondary)]'}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline">
                      <span className={`text-4xl lg:text-5xl font-bold ${plan.name === 'Voice Version' ? 'text-white' : 'text-[color:var(--vnny-text-primary)]'}`}>
                        {plan.price}
                      </span>
                      <span className={`ml-2 ${plan.name === 'Voice Version' ? 'text-white/80' : 'text-[color:var(--vnny-text-secondary)]'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 mt-0.5 ${plan.name === 'Voice Version' ? 'text-white' : 'text-[color:var(--vnny-primary-sage-dark)]'}`} />
                        <span className={`${plan.name === 'Voice Version' ? 'text-white/80' : 'text-[color:var(--vnny-text-secondary)]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={handlePlanClick}
                    className={`w-full py-4 font-semibold text-lg transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[color:var(--vnny-text-secondary)] mb-2">Questions about pricing or need a custom plan for your institution?</p>
          <p className="text-[color:var(--vnny-text-secondary)] mb-4">
            Email us at{" "}
            <a className="font-semibold text-[color:var(--vnny-primary-sage-dark)] hover:text-[color:var(--vnny-accent-ochre)] transition-colors" href="mailto:enterprise@vnny.io">
              enterprise@vnny.io
            </a>
            .
          </p>
          <button 
            onClick={handleContactClick}
            className="text-[color:var(--vnny-primary-sage-dark)] hover:text-[color:var(--vnny-accent-ochre)] font-semibold transition-colors"
          >
            Contact us for custom pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
