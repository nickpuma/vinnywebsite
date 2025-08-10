import { Button } from "@/components/ui/button";
import { Star, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function AppStoreCTA() {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/app/vinny-ai-therapy-training/id6443902156', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Find Your Voice as a Therapist?
        </motion.h2>
        <motion.p 
          className="text-xl text-white/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Download Vinny from the App Store and start practicing with AI patients today. Free trial included.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            onClick={handleAppStoreClick}
            className="bg-white text-foreground hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg px-8 py-4 h-auto"
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </Button>
          
          <div className="flex items-center space-x-4 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>1000+ Downloads</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
