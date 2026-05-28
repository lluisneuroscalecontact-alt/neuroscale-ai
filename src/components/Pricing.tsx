// src/components/Pricing.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageCircle, FolderOpen, BellRing,
  CalendarCheck, RefreshCw, Settings, Headphones,
} from 'lucide-react';

const features = [
  { icon: Settings,      text: 'Configuración inicial del sistema' },
  { icon: MessageCircle, text: 'WhatsApp automatizado, adaptado a tus tratamientos y tono' },
  { icon: FolderOpen,    text: 'Registro y organización automática de leads' },
  { icon: BellRing,      text: 'Detección de contactos con alta intención de reservar y avisos al equipo' },
  { icon: CalendarCheck, text: 'Agenda de citas conectada a Google Calendar' },
  { icon: RefreshCw,     text: 'Seguimiento automático cuando el paciente no responde' },
  { icon: Headphones,    text: 'Soporte cercano durante todo el piloto' },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-neuro-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Plazas piloto abiertas
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-5 leading-tight">
            Prueba NeuroScale en tu clínica{' '}
            <span className="gradient-text">con precio de piloto</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Estamos abriendo plazas piloto para clínicas estéticas que quieren automatizar WhatsApp, seguimiento y agenda sin cambiar su forma de trabajar.

El precio es reducido porque trabajaremos con los primeros casos de forma cercana antes de subir la tarifa.
          </p>
        </motion.div>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative rounded-2xl border border-neuro-blue/40 bg-gradient-to-br from-neuro-blue/[0.08] to-purple-600/[0.06] p-8 sm:p-10"
        >
          {/* Badge de plazas */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neuro-blue text-black text-xs font-bold tracking-wide whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
              Plazas piloto limitadas
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Columna izquierda */}
            <div className="flex-1">
              <p className="text-neuro-blue font-semibold text-sm uppercase tracking-widest mb-3">
                Piloto NeuroScale
              </p>

              <div className="flex items-end gap-3 mb-2">
                <span className="text-5xl sm:text-6xl font-bold text-white font-poppins">
                  497 €
                </span>
                <span className="text-gray-400 text-base mb-2">instalación única</span>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <span className="text-2xl font-bold text-white">+ 147 €</span>
                <span className="text-gray-400 text-sm">/mes durante el piloto</span>
              </div>

              <ul className="space-y-3.5">
                {features.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-neuro-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-neuro-blue" />
                    </div>
                    <span className="text-gray-300 text-sm leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna derecha */}
            <div className="lg:w-64 flex flex-col justify-between gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white font-semibold text-sm mb-2">
                  ¿Para quién es este piloto?
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Para clínicas estéticas que reciben consultas por WhatsApp, Instagram o web y quieren responder antes, organizar mejor sus leads y no perder oportunidades por falta de seguimiento.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white font-semibold text-sm mb-2">
                  ¿Qué ocurre al solicitarlo?
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tendremos una llamada corta para entender cómo gestionas ahora tus consultas. Si encaja, configuramos NeuroScale adaptado a tus tratamientos, horarios y forma de trabajar.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <Link
                  to="/contact"
                  className="glow-button w-full text-sm justify-center"
                >
                  Solicitar piloto
                </Link>

                <Link
                  to="/demo"
                  className="w-full inline-flex justify-center items-center px-6 py-3.5 rounded-lg font-semibold text-sm border border-white/15 text-white hover:border-neuro-blue/50 hover:bg-white/5 transition-all duration-300"
                >
                  Ver demo
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nota de transparencia */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="text-center text-gray-500 text-sm mt-8 max-w-xl mx-auto"
        >
          Sin permanencia obligatoria. Sin promesas de resultados garantizados. El piloto está pensado para validar si NeuroScale encaja con tu clínica antes de ampliar la automatización.
        </motion.p>

      </div>
    </section>
  );
};

export default Pricing;