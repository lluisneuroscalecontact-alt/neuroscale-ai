// src/components/Navigation.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/vite.svg';

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sistema', href: '#services' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Resultados', href: '#results' },
  { label: 'FAQ', href: '#faq' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neuro-black/90 backdrop-blur-lg border-b border-white/10'
          : 'bg-neuro-black/70 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
  <img
    src={logoIcon}
    alt="NeuroScale AI"
    className="w-5 h-5 object-contain"
  />
</div>

            <div className="leading-none">
              <span className="block text-white font-bold text-lg font-poppins">
                NeuroScale <span className="gradient-text">AI</span>
              </span>
              <span className="block text-xs text-gray-500 mt-1">
                Captación para clínicas estéticas
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {isHome ? (
              navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link
                to="/"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Inicio
              </Link>
            )}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm text-black transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
              }}
            >
              Solicitar demo
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-neuro-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {isHome ? (
              navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm"
              >
                Inicio
              </Link>
            )}

            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center w-full px-5 py-3 rounded-lg font-semibold text-sm text-black"
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
                }}
              >
                Solicitar demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;