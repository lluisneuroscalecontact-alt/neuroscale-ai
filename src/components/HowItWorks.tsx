// src/components/HowItWorks.tsx
import { motion } from 'framer-motion';
import { MessageCircle, Bot, FolderOpen, BellRing, CalendarCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'El paciente escribe por WhatsApp',
    description:
      'Un paciente interesado en un tratamiento manda un mensaje a tu clínica, en cualquier momento del día.',
  },
  {
    icon: Bot,
    number: '02',
    title: 'NeuroScale responde y recoge información',
    description:
      'El sistema responde al instante y hace las preguntas clave para entender qué busca el paciente y cuándo podría venir.',
  },
  {
    icon: FolderOpen,
    number: '03',
    title: 'El lead se guarda y se clasifica',
    description:
      'Los datos del contacto quedan registrados y organizados automáticamente. Tu equipo ve en todo momento quién ha escrito y qué ha pedido.',
  },
  {
    icon: BellRing,
    number: '04',
    title: 'El equipo recibe un aviso si el lead es importante',
    description:
      'Cuando el sistema detecta un contacto con alta intención de reservar, avisa al equipo por email para que pueda actuar con prioridad.',
  },
  {
    icon: CalendarCheck,
    number: '05',
    title: 'Cita en agenda o seguimiento automático',
    description:
      'Si el paciente confirma, la cita se añade a Google Calendar. Si no responde, el sistema retoma el contacto en el momento adecuado.',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-neuro-black px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Cómo funciona
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-5 leading-tight">
            Así funciona NeuroScale{' '}
            <span className="gradient-text">en tu clínica</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Un flujo automático pensado para que cada consulta tenga respuesta,
            seguimiento y una próxima acción clara.
          </p>
        </motion.div>

        {/* Pasos en columna vertical con línea conectora */}
        <div className="relative">

          {/* Línea vertical decorativa — visible solo en md+ */}
          <div className="hidden md:block absolute left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-neuro-blue/40 via-purple-500/30 to-transparent" />

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  {/* Icono con número */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-neuro-blue/10 border border-neuro-blue/20 flex flex-col items-center justify-center group-hover:bg-neuro-blue/20 group-hover:border-neuro-blue/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-neuro-blue mb-1" />
                      <span className="text-xs font-bold text-neuro-blue/60 tracking-widest">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 group-hover:border-neuro-blue/30 group-hover:bg-white/[0.07] transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Nota de cierre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-medium">
            Un flujo automático pensado para que cada consulta tenga respuesta, seguimiento y una próxima acción clara.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;