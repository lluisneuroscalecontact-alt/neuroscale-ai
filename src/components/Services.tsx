import { motion } from 'framer-motion';
import { Megaphone, LayoutPanelTop, Bot, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Anuncios para captar pacientes',
    description:
      'Creamos campañas orientadas a generar solicitudes de personas interesadas en tus tratamientos o servicios.',
  },
  {
    icon: LayoutPanelTop,
    title: 'Landing page optimizada',
    description:
      'Diseñamos una página clara y enfocada en convertir visitas en contactos reales para tu clínica.',
  },
  {
    icon: Bot,
    title: 'Formulario y automatización',
    description:
      'Recogemos los datos del lead y organizamos el seguimiento para que no pierdas oportunidades.',
  },
  {
    icon: BarChart3,
    title: 'Mejora continua',
    description:
      'Analizamos resultados y optimizamos el sistema para mejorar la calidad de los leads y el rendimiento.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-neuro-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Qué incluye nuestro sistema
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4">
            Todo lo que necesita tu clínica para captar mejor
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No vendemos veinte servicios sueltos. Montamos un sistema sencillo y enfocado
            en conseguir solicitudes de pacientes potenciales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neuro-blue/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-neuro-blue/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-neuro-blue" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;