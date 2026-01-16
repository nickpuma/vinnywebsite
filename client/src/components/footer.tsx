import { Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "App Store", href: "https://apps.apple.com/us/app/vinnyai-chat/id6740640637" },
    { name: "Support", href: "mailto:support@vnny.io" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "mailto:contact@vnny.io" },
    { name: "Enterprise Pricing", href: "mailto:enterprise@vnny.io" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" }
  ]
};

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="vnny-bg-sage-dark vnny-noise text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <img
                  src="/brand/logos/logo-picture.png"
                  alt="Vinny logo"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-2xl font-bold">Vinny</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              iPhone-based AI therapy training that helps therapists find their voice and refine their technique before working with real patients.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:contact@vnny.io'}
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-white/70">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-white/70">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Vinny. All rights reserved. | vnny.io
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Made for therapists finding their voice
          </p>
        </div>
      </div>
    </footer>
  );
}
