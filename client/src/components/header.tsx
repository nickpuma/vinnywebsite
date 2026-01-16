import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/vinnyai-chat/id6740640637', '_blank');
  };

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-[rgba(61,79,63,0.12)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
              <img
                src="/brand/logos/logo-picture.png"
                alt="Vinny logo"
                className="w-6 h-6"
              />
            </div>
            <img
              src="/brand/logos/vinny-logo-word.png"
              alt="Vinny wordmark"
              className="h-7 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('institutions')} 
              className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium"
            >
              For Institutions
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium"
            >
              FAQ
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleAppStoreClick}
              className="vnny-btn vnny-btn-primary shadow-sm hover:shadow-md transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              Download App
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(61,79,63,0.12)]">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('institutions')} 
                className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium text-left"
              >
                For Institutions
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-[color:var(--vnny-text-secondary)] hover:text-[color:var(--vnny-primary-sage-dark)] transition-colors font-medium text-left"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
