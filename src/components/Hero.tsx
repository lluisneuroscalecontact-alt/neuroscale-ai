// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Calendar, Bell } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    delay,
    ease: 'easeOut' as const,
  },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neuro-black px-4 sm:px-6 lg:px-8"
    >
      {/* Fondo con gradientes radiales */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,212,255,0.13),transparent_70%),radial-gradient(ellipse_50%_40%_at_80%_90%,rgba(123,44,255,0.12),transparent_70%)]" />

      {/* Grid decorativo sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-neuro-blue animate-pulse" />
            Automatización con IA para clínicas estéticas
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-white leading-[1.1] mb-6"
        >
          Tu clínica pierde leads{' '}
          <br className="hidden sm:block" />
          mientras{' '}
          <span className="gradient-text">no respondes</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          NeuroScale responde por <strong className="text-white">WhatsApp</strong> en segundos,
          guarda el lead automáticamente y agenda la cita en tu calendario —
          sin que tu equipo pierda tiempo en tareas repetitivas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            to="/demo"
            className="glow-button w-full sm:w-auto text-base"
          >
            Ver demo de 2 minutos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold border border-white/20 text-white hover:border-neuro-blue/60 hover:bg-white/5 transition-all duration-300 text-base inline-flex items-center justify-center"
          >
            Solicitar demo
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          {...fadeUp(0.4)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16"
        >
          {[
            {
              icon: <MessageCircle className="w-5 h-5 text-neuro-blue flex-shrink-0 mt-0.5" />,
              text: 'Responde en WhatsApp al instante, incluso fuera del horario de recepción',
            },
            {
              icon: <Calendar className="w-5 h-5 text-neuro-blue flex-shrink-0 mt-0.5" />,
              text: 'Agenda citas directamente en Google Calendar sin intervención manual',
            },
            {
              icon: <Bell className="w-5 h-5 text-neuro-blue flex-shrink-0 mt-0.5" />,
              text: 'Te avisa por email si detecta un lead importante que necesita atención',
            },
          ].map(({ icon, text }, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-left"
            >
              <div className="flex items-start gap-3">
                {icon}
                <p className="text-gray-300 text-sm leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Banda de integraciones */}
        <motion.div {...fadeUp(0.5)}>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-medium">
            Se integra con las herramientas que ya usas
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {[
              { label: 'WhatsApp',        color: '#25D366' },
              { label: 'Google Calendar', color: '#4285F4' },
              { label: 'Gmail',           color: '#EA4335' },
              { label: 'Panel de leads',  color: '#00d4ff' },
            ].map(({ label, color }) => (
              <span key={label} className="text-sm font-medium" style={{ color }}>
                {label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;