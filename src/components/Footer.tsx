// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import logoIcon from '../assets/vite.svg';

const EMAIL_HREF =
  'https://mail.google.com/mail/?view=cm&fs=1&to=lluis.neuroscale.contact@gmail.com&su=Solicitud%20demo%20NeuroScale&body=Hola%20Lluis%2C%20me%20gustar%C3%ADa%20ver%20una%20demo%20de%20NeuroScale%20para%20mi%20cl%C3%ADnica.';

const navLinks = [
  { label: 'Inicio', href: '/#home' },
  { label: 'Sistema', href: '/#services' },
  { label: 'Cómo funciona', href: '/#how-it-works' },
  { label: 'Resultados', href: '/#results' },
  { label: 'FAQ', href: '/#faq' },
];

const Footer = () => {
  return (
    <footer className="bg-[#030303] border-t border-white/10 px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Cuerpo principal */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Columna 1 */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src={logoIcon}
                  alt="NeuroScale AI"
                  className="w-7 h-7 object-contain"
                />
              </div>

              <span className="text-white font-bold text-lg font-poppins leading-none">
                NeuroScale <span className="gradient-text">AI</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Automatización con IA para clínicas estéticas que quieren responder antes,
              organizar leads y mejorar el seguimiento.
            </p>

            <div className="flex flex-col gap-3">
              <a
  href={EMAIL_HREF}
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
>
  <Mail className="w-4 h-4 text-neuro-blue flex-shrink-0" />
  lluis.neuroscale.contact@gmail.com
</a>

              <a
                href="tel:+34603764807"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <Phone className="w-4 h-4 text-neuro-blue flex-shrink-0" />
                +34 603 76 48 07
              </a>

              <a
                href="https://wa.me/34603764807"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-neuro-blue flex-shrink-0" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navegación
            </h3>

            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {label}
                </a>
              ))}

              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Solicitar demo
              </Link>
            </nav>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Siguiente paso
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Si tu clínica recibe consultas por WhatsApp y quieres que ninguna
              se pierda por falta de respuesta o seguimiento, podemos revisarlo juntos.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm text-black transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
              }}
            >
              Solicitar demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Nota de confianza */}
        <div className="border border-white/10 rounded-xl px-5 py-4 bg-white/[0.02] mb-8">
          <p className="text-gray-500 text-sm leading-relaxed text-center">
            NeuroScale no sustituye a recepción ni da diagnósticos médicos.
            Ayuda a gestionar consultas, leads, avisos, agenda y seguimiento para que
            el equipo pueda centrarse en la atención importante.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-6 border-t border-white/10">
          <p className="text-gray-600 text-xs">
            © 2026 NeuroScale AI. Todos los derechos reservados.
          </p>

          <p className="text-gray-600 text-xs">
            Valencia, España · Lluis Galbis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;