// src/components/Results.tsx
import { motion } from 'framer-motion';
import { MessageCircle, Zap, FolderOpen, Clock, RefreshCw, LayoutDashboard, Star } from 'lucide-react';

const benefits = [
  {
    icon: MessageCircle,
    title: 'Menos consultas olvidadas',
    description:
      'Cada mensaje que llega por WhatsApp recibe una respuesta inmediata, incluso fuera del horario de atención. Ningún paciente se queda esperando.',
  },
  {
    icon: Zap,
    title: 'Atención más rápida desde el primer contacto',
    description:
      'El tiempo entre que un paciente pregunta y recibe una respuesta pasa de horas a segundos. Cuanto antes se atiende, más fácil es mantener el interés del paciente.',
  },
  {
    icon: FolderOpen,
    title: 'Leads organizados sin trabajo manual',
    description:
      'Cada contacto queda registrado y clasificado automáticamente. Tu equipo accede a la información sin tener que buscar en chats ni hojas de cálculo.',
  },
  {
    icon: Clock,
    title: 'Menos carga para el equipo de recepción',
    description:
      'Las tareas repetitivas de primera respuesta y recogida de datos las gestiona el sistema. El equipo puede centrarse en la atención directa al paciente.',
  },
  {
    icon: RefreshCw,
    title: 'Seguimiento automático cuando el cliente no responde',
    description:
      'Si un lead deja de contestar, el sistema lo retoma en el momento adecuado. Las oportunidades no se pierden por falta de seguimiento.',
  },
  {
    icon: LayoutDashboard,
    title: 'Más control sobre las oportunidades comerciales',
    description:
      'El equipo ve en todo momento qué leads están activos, cuáles tienen alta intención de reservar y cuáles necesitan atención prioritaria.',
  },
  {
    icon: Star,
    title: 'Mejor experiencia para el paciente',
    description:
      'Una respuesta rápida y una comunicación clara generan más confianza desde el primer contacto, antes incluso de la primera visita.',
  },
];

const Results = () => {
  return (
    <section id="results" className="py-24 bg-[#050505] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Qué cambia en tu clínica
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-5 leading-tight">
            Lo que notas cuando{' '}
            <span className="gradient-text">cada lead tiene seguimiento</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            No son promesas. Son los cambios operativos que ocurren cuando una clínica
            deja de gestionar leads de forma manual.
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {benefits.slice(0, 6).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neuro-blue/35 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-neuro-blue/15 flex items-center justify-center mb-4 group-hover:bg-neuro-blue/25 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-neuro-blue" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Séptimo beneficio como card ancha de cierre */}
        {(() => {
          const last = benefits[6];
          const Icon = last.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neuro-blue/35 hover:bg-white/[0.07] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-neuro-blue/15 flex items-center justify-center flex-shrink-0 group-hover:bg-neuro-blue/25 transition-colors duration-300">
                <Icon className="w-5 h-5 text-neuro-blue" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1 leading-snug">
                  {last.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {last.description}
                </p>
              </div>
            </motion.div>
          );
        })()}

        {/* Nota de cierre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 border border-white/10 rounded-2xl px-8 py-7 text-center bg-white/[0.03]"
        >
          <p className="text-white font-semibold text-lg mb-2">
            Menos fricción en el proceso. Más oportunidades atendidas.
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            NeuroScale no sustituye a tu equipo. Lo libera de las tareas repetitivas
            para que pueda centrarse en lo que realmente importa: la atención al paciente.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Results;