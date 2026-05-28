// src/components/Services.tsx
import { motion } from 'framer-motion';
import { MessageCircle, FolderOpen, Flame, BellRing, CalendarCheck, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    title: 'Respuesta inmediata por WhatsApp',
    description:
      'El sistema responde a cada consulta al instante, a cualquier hora. Ningún lead se queda sin atención por llegar fuera del horario del equipo.',
    tag: 'Captación',
  },
  {
    icon: FolderOpen,
    title: 'Leads organizados automáticamente',
    description:
      'Cada contacto queda guardado y clasificado sin trabajo manual. Tu equipo siempre sabe quién ha preguntado, cuándo y por qué tratamiento.',
    tag: 'Organización',
  },
  {
    icon: Flame,
    title: 'Detección de contactos con alta intención de reservar',
    description:
      'El sistema identifica qué contactos tienen más intención de reservar y los marca para que tu equipo les dé prioridad.',
    tag: 'Priorización',
  },
  {
    icon: BellRing,
    title: 'Avisos internos al equipo',
    description:
      'Cuando aparece un lead importante, el equipo recibe una alerta por email de forma automática. Nada se pasa por alto.',
    tag: 'Alertas',
  },
  {
    icon: CalendarCheck,
    title: 'Citas en Google Calendar',
    description:
      'Las citas se añaden directamente a la agenda de la clínica. Sin llamadas de confirmación, sin huecos gestionados a mano.',
    tag: 'Agenda',
  },
  {
    icon: RefreshCw,
    title: 'Seguimiento cuando el cliente no responde',
    description:
      'Si un lead deja de contestar, el sistema retoma el contacto en el momento adecuado. Así se recuperan oportunidades que de otro modo se pierden.',
    tag: 'Seguimiento',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-neuro-black px-4 sm:px-6 lg:px-8">
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
            Qué hace NeuroScale por tu clínica
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-5 leading-tight">
            Todo lo que necesita tu clínica para {' '}
            <span className="gradient-text">convertir consultas en citas</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Desde que un paciente escribe hasta que tiene cita reservada, NeuroScale
            gestiona cada paso de forma automática.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neuro-blue/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                {/* Icono + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-neuro-blue/15 flex items-center justify-center group-hover:bg-neuro-blue/25 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-neuro-blue" />
                  </div>
                  <span className="text-xs font-medium text-gray-500 border border-white/10 rounded-full px-3 py-1 mt-1">
                    {service.tag}
                  </span>
                </div>

                {/* Texto */}
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Nota de cierre */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
           <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-medium">
            Todo funciona de forma coordinada. No son módulos separados: es un único flujo automático de principio a fin.
            </p>
        </motion.p>

      </div>
    </section>
  );
};

export default Services;