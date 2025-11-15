import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { X, Menu, Home, Shield, Briefcase, Code, DollarSign, FileText, BarChart3 } from 'lucide-react';

export default function GitHubSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Home', href: '/', icon: Home, type: 'route' as const },
    { label: 'Product Demo', href: '/#demo', icon: Shield, type: 'section' as const },
    { label: 'Use Cases', href: '/#use-cases', icon: Briefcase, type: 'section' as const },
    { label: 'Technology', href: '/#technology', icon: Code, type: 'section' as const },
    { label: 'Integration', href: '/#integration', icon: FileText, type: 'section' as const },
    { label: 'Market', href: '/#market', icon: BarChart3, type: 'section' as const },
    { label: 'Pricing', href: '/#contact', icon: DollarSign, type: 'section' as const },
  ];

  const handleNavigation = (item: typeof menuItems[0]) => {
    setIsOpen(false);

    if (item.type === 'route') {
      setLocation(item.href);
    } else if (item.type === 'section') {
      const [path, hash] = item.href.split('#');
      if (location !== path) {
        setLocation(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Hamburger Button - Premium Glass */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 left-5 z-50 glass-card-sm p-3 hover-glow group"
        aria-label="Toggle Menu"
      >
        <Menu className="w-6 h-6 text-sf-gold group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Overlay - Darker */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Sidebar - Premium Glassmorphism */}
      <nav
        className={`fixed top-0 left-0 h-screen w-[320px] glass-card-lg border-r-2 border-sf-gold/20 z-50 flex flex-col overflow-y-auto transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button - Glass */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 glass-card-sm p-2 hover-glow group z-10"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6 text-sf-gold group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Header - Premium */}
        <div className="pt-16 px-6 pb-6 border-b border-sf-gold/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#E6C200] flex items-center justify-center gold-glow">
              <span className="text-sf-black font-bold text-lg">SF</span>
            </div>
            <div>
              <h2 className="text-sf-gold text-xl font-bold tracking-tight">
                SmartFlow
              </h2>
              <p className="text-sf-secondary text-xs">Systems</p>
            </div>
          </div>
        </div>

        {/* Menu Items - Glass Buttons */}
        <ul className="flex-grow py-6 px-3 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="animate-sf-slide-in-left" style={{ animationDelay: `${index * 50}ms` }}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="w-full flex items-center gap-4 py-3.5 px-4 rounded-xl text-sf-beige glass-card-sm hover:border-sf-gold/50 hover:translate-x-2 transition-all duration-200 group"
                >
                  <div className="p-2 bg-sf-gold/10 rounded-lg group-hover:bg-sf-gold/20 transition-colors">
                    <Icon className="w-4 h-4 text-sf-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Footer CTA - Premium */}
        <div className="p-5 border-t border-sf-gold/20">
          <button
            onClick={() => handleNavigation({ label: 'Contact', href: '/#contact', icon: Shield, type: 'section' })}
            className="btn-sf-gold w-full group"
          >
            <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Get Started
          </button>

          {/* Credit */}
          <p className="text-center text-xs text-sf-secondary mt-4">
            Created by <span className="text-sf-gold font-semibold">Gareth Bowers</span>
          </p>
        </div>
      </nav>
    </>
  );
}
