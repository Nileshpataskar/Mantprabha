import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll and responsive behaviors
  useEffect(() => {
    // Handle scroll
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    // Handle body scroll lock
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    
    // Handle resize
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  
  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" }
  ];
  
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-150 transition-all duration-500 ${
        scroled 
          ? " bg-[#e4e5ec]/80 dark:bg-purple/80 backdrop-blur-md shadow-sm border-b border-[#d0d1d8]" 
          : "py-3 bg-transparent"
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50">
            {/* <img 
              src="/logo.png" 
              alt="Mantaprabha Logo" 
              className="w-32 sm:w-40 md:w-48 lg:w-60 object-contain transition-all duration-300"
            /> */}
            Mantaprabha
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-sm uppercase tracking-wider font-grotesk transition-colors relative ${
                  isActive(item.path)
                    ? "text-purple dark:text-gold font-bold" 
                    : "text-purple/80 hover:text-purple dark:text-white/80 dark:hover:text-gold"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple dark:bg-gold" />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden z-50 flex flex-col items-center justify-center w-10 h-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-purple dark:bg-gold rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`} />
            <span className={`block h-0.5 bg-purple dark:bg-gold rounded-full mt-[11px] transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-[75%]'
            }`} />
            <span className={`block h-0.5 w-6 bg-purple dark:bg-gold rounded-full mt-[11px] transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`} />
          </button>
        </div>
      </header>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 flex items-center justify-center bg-[#e4e5ec] dark:bg-purple text-purple transition-all duration-500 ${
        mobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none translate-y-[-100%]'
      }`}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple/5 dark:bg-gold/5 rounded-full -translate-x-1/3 translate-y-1/3" />
          
          {/* Grid lines */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-px w-full bg-purple/10 dark:bg-gold/10"
              style={{ 
                top: `${(i + 1) * 20}%`,
                transform: mobileMenuOpen ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: `transform 0.8s ease-out ${0.1 + (0.1 * i)}s`
              }}
            />
          ))}
        </div>
        
        {/* Navigation links */}
        <nav className="relative z-10 flex flex-col items-center justify-center w-full">
          {menuItems.map((item, index) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-4xl sm:text-5xl font-montreal font-bold my-4 tracking-tight block transform ${
                isActive(item.path) ? 'text-purple dark:text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: `${0.1 + (index * 0.1)}s`,
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s, transform 0.5s'
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
