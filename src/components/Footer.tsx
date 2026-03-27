import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#030303] border-t border-white/10 px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-neuro-blue rounded-lg flex items-center justify-center">
                <span className="text-neuro-black font-bold text-sm">NS</span>
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-none">NeuroScale AI</p>
                <p className="text-sm text-gray-400 mt-1">
                  Sistema de captación para clínicas estéticas
                </p>
              </div>
            </Link>

            <p className="text-gray-300 max-w-xl leading-relaxed mb-6">
              Ayudamos a clínicas estéticas a generar solicitudes de pacientes potenciales
              mediante anuncios, landing pages y automatización del seguimiento.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:lluis.neuroscale.contact@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-neuro-blue" />
                lluis.neuroscale.contact@gmail.com
              </a>

              <a
                href="tel:+34603764807"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-neuro-blue" />
                +34 603 76 48 07
              </a>

              <a
                href="https://wa.me/34603764807"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-neuro-blue" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Sistema
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                Cómo funciona
              </a>
              <a href="#results" className="text-gray-300 hover:text-white transition-colors">
                Ejemplos
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Siguiente paso</h3>
            <div className="flex flex-col gap-3">
              <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                Ver casos tipo
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Reservar llamada
              </Link>
              <a
                href="https://wa.me/34603764807"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contacto directo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 NeuroScale AI. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-500">Valencia, España</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">Lluis Galbis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;