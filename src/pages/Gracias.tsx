// src/pages/Gracias.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  MessageCircle,
  ArrowLeft,
  Clock,
  CalendarCheck,
  Shield,
} from 'lucide-react';

const EMAIL_HREF =
  'https://mail.google.com/mail/?view=cm&fs=1&to=lluis.neuroscale.contact@gmail.com&su=Solicitud%20demo%20NeuroScale&body=Hola%20Lluis%2C%20me%20gustar%C3%ADa%20ver%20una%20demo%20de%20NeuroScale%20para%20mi%20cl%C3%ADnica.';

const steps = [
  { icon: Clock, text: 'Revisamos tu solicitud en menos de 24h.' },
  { icon: CalendarCheck, text: 'Te contactamos para hacer una demo corta y clara.' },
  { icon: Shield, text: 'Sin compromiso. Primero vemos si encaja con tu clínica.' },
];

const Gracias = () => {
  return (
    <div className="relative min-h-screen bg-neuro-black flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_20%,rgba(0,212,255,0.08),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative max-w-lg w-full text-center"
      >
        {/* Icono de confirmación */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="flex justify-center mb-7"
        >
          <div className="w-20 h-20 rounded-full bg-neuro-blue/15 border border-neuro-blue/30 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-neuro-blue" />
          </div>
        </motion.div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-3 leading-tight">
          Solicitud recibida
        </h1>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Gracias. Hemos recibido la información de tu clínica y nos pondremos
          en contacto contigo pronto.
        </p>

        {/* Qué ocurre ahora */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
          <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
            Qué ocurre ahora
          </p>

          <div className="flex flex-col gap-4">
            {steps.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-neuro-blue/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-neuro-blue" />
                </div>

                <p className="text-gray-300 text-sm leading-snug pt-1.5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="https://wa.me/34603764807"
            target="_blank"
            rel="noreferrer"
            className="glow-button text-sm justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Escribir por WhatsApp
          </a>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border border-white/15 text-white hover:border-neuro-blue/50 hover:bg-white/5 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Nota final */}
        <p className="text-gray-600 text-xs">
          Si necesitas algo urgente, escríbenos directamente a{' '}
          <a
  href={EMAIL_HREF}
  target="_blank"
  rel="noreferrer"
  className="text-gray-400 hover:text-white transition-colors"
>
  lluis.neuroscale.contact@gmail.com
</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Gracias;