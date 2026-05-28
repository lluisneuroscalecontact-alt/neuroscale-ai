// src/components/CTA.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MessageCircle, CalendarCheck } from 'lucide-react';

const trust = [
  { icon: MessageCircle, text: 'Demo clara de 2 minutos' },
  { icon: CalendarCheck, text: 'Adaptado a tu clínica' },
  { icon: Shield,        text: 'Sin compromiso' },
];

const CTA = () => {
  return (
    <section id="cta" className="scroll-mt-24 py-24 bg-neuro-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl border border-neuro-blue/25 bg-gradient-to-br from-neuro-blue/[0.09] to-purple-600/[0.07] p-8 sm:p-12 text-center overflow-hidden"
        >
          {/* Glow decorativo de fondo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.1),transparent_70%)] pointer-events-none" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-neuro-blue animate-pulse" />
              Plazas piloto abiertas
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-5 leading-tight">
              ¿Quieres ver cómo funcionaría{' '}
              <span className="gradient-text">NeuroScale en tu clínica?</span>
            </h2>

            {/* Subtítulo */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Te enseño una demo corta y revisamos si tiene sentido aplicarlo
              a tu forma actual de gestionar consultas, reservas y seguimiento.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {trust.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                >
                  <Icon className="w-4 h-4 text-neuro-blue flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
              <Link
                to="/contact"
                className="glow-button w-full sm:w-auto text-base"
              >
                Solicitar demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                to="/demo"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-lg font-semibold text-base border border-white/15 text-white hover:border-neuro-blue/50 hover:bg-white/5 transition-all duration-300"
              >
                Ver demo de 2 minutos
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-gray-500 text-sm">
              Sin compromiso. Primero vemos si encaja con tu clínica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;