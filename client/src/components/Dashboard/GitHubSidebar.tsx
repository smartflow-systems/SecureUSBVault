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
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 left-5 z-50 p-2.5 bg-[#0D0D0D] rounded hover:bg-[#3B2F2F] transition-colors"
        aria-label="Toggle Menu"
      >
        <Menu className="w-6 h-6 text-[#FFD700]" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-screen w-[300px] bg-[#0D0D0D] text-[#F5F5DC] z-50 flex flex-col overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#FFD700] hover:text-[#E6C200] transition-colors"
          aria-label="Close Menu"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Header */}
        <div className="pt-16 px-5 pb-5 border-b border-[#3B2F2F]">
          <h2 className="text-[#FFD700] text-xl font-semibold">
            SmartFlow Systems
          </h2>
        </div>

        {/* Menu Items */}
        <ul className="flex-grow py-5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="w-full flex items-center gap-3 py-4 px-5 text-[#F5F5DC] hover:bg-[#3B2F2F] hover:pl-7 border-l-[3px] border-transparent hover:border-[#FFD700] transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-[#FFD700]" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Footer CTA */}
        <div className="p-5 border-t border-[#3B2F2F]">
          <button
            onClick={() => handleNavigation({ label: 'Contact', href: '/#contact', icon: Shield, type: 'section' })}
            className="block w-full py-3 px-4 bg-[#FFD700] text-[#0D0D0D] text-center font-semibold rounded hover:bg-[#E6C200] transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}
