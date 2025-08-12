import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";
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
    window.open('https://apps.apple.com/app/vinny-ai-therapy-training/id6443902156', '_blank');
  };

  const scrollToDemo = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5,1H8.5C7.12,1 6,2.12 6,3.5V20.5C6,21.88 7.12,23 8.5,23H15.5C16.88,23 18,21.88 18,20.5V3.5C18,2.12 16.88,1 15.5,1M12,22A1,1 0 0,1 11,21A1,1 0 0,1 12,20A1,1 0 0,1 13,21A1,1 0 0,1 12,22Z"/>
              </svg>
              <span>iPhone-First AI Training</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Find Your Voice as a{" "}
              <span className="inline-block align-baseline h-[1em] min-w-[12ch] whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingTitles[titleIndex]}
                    initial={{ rotateX: 90, y: 8, opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 1 }}
                    exit={{ rotateX: -90, y: -8, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                    style={{ transformOrigin: "bottom" }}
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Practice therapy sessions with AI patients on your iPhone. Refine your technique in a consequence-free environment before working with real patients. Text or voice - train anywhere, anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleAppStoreClick}
                className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl transition-all duration-300 text-lg px-8 py-4 h-auto"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={scrollToDemo}
                className="border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 text-lg px-8 py-4 h-auto"
              >
                <Play className="w-5 h-5 mr-3" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Free Trial Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>iPhone Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
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
            <div className="relative z-10 flex justify-center space-x-6">
              <motion.div 
                className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
                animate={{ 
                  rotate: [-3, 0, -3],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="bg-black rounded-[2rem] w-64 h-[500px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 p-6">
                    <div className="flex items-center justify-center mb-8 mt-8">
                      <div className="w-20 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-gray-800 font-semibold text-lg">AI Patient Session</h3>
                        <p className="text-gray-600 text-sm">Sarah, 28, Anxiety</p>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-sm max-w-[80%] ml-auto">
                          <p className="text-sm">How are you feeling today, Sarah?</p>
                        </div>
                        <div className="bg-gray-300 text-gray-800 p-3 rounded-2xl rounded-bl-sm max-w-[80%]">
                          <p className="text-sm">I've been having trouble sleeping lately...</p>
                        </div>
                        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-sm max-w-[80%] ml-auto">
                          <p className="text-sm">Tell me more about what's keeping you up at night.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
                animate={{ 
                  rotate: [3, 0, 3],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="bg-black rounded-[2rem] w-64 h-[500px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 p-6 flex flex-col items-center justify-center">
                    <div className="text-center space-y-6">
                      <h3 className="text-gray-800 font-semibold text-lg">Voice Training</h3>
                      <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm">Tap to speak with AI patient</p>
                      <div className="flex justify-center space-x-2">
                        {[1,2,3,4,5].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-8 bg-primary rounded-full"
                            animate={{
                              height: [8, 32, 16, 24, 8],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full transform scale-150 -z-10"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-secondary/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
