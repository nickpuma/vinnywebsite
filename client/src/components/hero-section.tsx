import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const rotatingTitles = ["Therapist", "Counselor", "Social Worker", "Psychiatrist"] as const;
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/vinnyai-chat/id6740640637', '_blank');
  };

  return (
    <section className="relative vnny-bg-sage-dark vnny-noise pt-24 pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[color:var(--vnny-text-on-dark)] px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5,1H8.5C7.12,1 6,2.12 6,3.5V20.5C6,21.88 7.12,23 8.5,23H15.5C16.88,23 18,21.88 18,20.5V3.5C18,2.12 16.88,1 15.5,1M12,22A1,1 0 0,1 11,21A1,1 0 0,1 12,20A1,1 0 0,1 13,21A1,1 0 0,1 12,22Z"/>
              </svg>
              <span>iPhone-First AI Training</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--vnny-text-on-dark)] leading-tight">
              Find Your Voice as a{" "}
              <span className="inline-block align-baseline h-[1em] min-w-[9ch] sm:min-w-[12ch] whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingTitles[titleIndex]}
                    initial={{ rotateX: 90, y: 8, opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 1 }}
                    exit={{ rotateX: -90, y: -8, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70"
                    style={{ transformOrigin: "bottom" }}
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Practice full therapy sessions with AI patients on your iPhone. Build confidence with realistic scenarios, instant feedback, and voice or text training wherever you are.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleAppStoreClick}
                className="vnny-btn vnny-btn-primary w-full sm:w-auto text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                Download App
              </Button>
            </div>
            
            <div className="flex items-center flex-wrap gap-8 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Free Trial Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>iPhone Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Text & Voice</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 grid sm:grid-cols-2 gap-6">
              <motion.div
                className="vnny-card p-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <img
                  src="/brand/iphone-screenshots/voice-chat.png"
                  alt="Vinny voice training on iPhone"
                  className="rounded-[18px] w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="vnny-card p-3"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
              >
                <img
                  src="/brand/iphone-screenshots/ai-review.png"
                  alt="Vinny AI session feedback"
                  className="rounded-[18px] w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
