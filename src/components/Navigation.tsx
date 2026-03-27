import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = isHome
    ? [
        { label: 'Inicio', href: '#home' },
        { label: 'Sistema', href: '#services' },
        { label: 'Cómo funciona', href: '#how-it-works' },
        { label: 'Ejemplos', href: '#results' },
        { label: 'FAQ', href: '#faq' },
      ]
    : [
        { label: 'Inicio', href: '/' },
        { label: 'Casos tipo', href: '/case-studies' },
        { label: 'Contacto', href: '/contact' },
      ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neuro-black/90 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-neuro-blue rounded-lg flex items-center justify-center">
              <span className="text-neuro-black font-bold text-sm">NS</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">NeuroScale AI</p>
              <p className="text-xs text-gray-400 leading-none mt-1">
                Captación para clínicas estéticas
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg font-semibold text-black transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
              }}
            >
              Reservar llamada
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neuro-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-3 rounded-lg font-semibold text-black"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
              }}
            >
              Reservar llamada
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;