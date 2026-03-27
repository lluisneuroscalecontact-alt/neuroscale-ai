import { motion } from 'framer-motion';
import { Search, Layout, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Analizamos tu situación',
    description:
      'Revisamos tu clínica, tu forma actual de captar clientes y detectamos dónde estás perdiendo oportunidades.',
  },
  {
    icon: Layout,
    title: 'Creamos el sistema',
    description:
      'Diseñamos la estructura completa: anuncios, landing page y formulario orientado a captar pacientes potenciales.',
  },
  {
    icon: Rocket,
    title: 'Lanzamos la captación',
    description:
      'Activamos campañas para empezar a generar solicitudes reales de personas interesadas en tus servicios.',
  },
  {
    icon: LineChart,
    title: 'Optimizamos y mejoramos',
    description:
      'Analizamos resultados y ajustamos el sistema para mejorar la calidad de los leads y la conversión.',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-neuro-black px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Cómo trabajamos
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4">
            Un proceso claro para captar pacientes
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No hacemos magia ni promesas irreales. Construimos un sistema paso a paso
            para ayudarte a generar oportunidades de venta de forma más predecible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-neuro-blue/15 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-neuro-blue" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Este proceso está pensado para clínicas que quieren dejar de depender solo del boca a boca
            y empezar a tener una captación más estructurada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;