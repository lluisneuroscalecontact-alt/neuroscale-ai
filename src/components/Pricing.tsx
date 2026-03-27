import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'Auditoría y estrategia',
    subtitle: 'Para clínicas que quieren claridad antes de escalar',
    description:
      'Analizamos tu captación actual y te proponemos una estrategia clara para mejorar tus oportunidades de venta.',
    features: [
      'Revisión de tu situación actual',
      'Análisis de la oferta y mensaje',
      'Propuesta de estructura de captación',
      'Recomendaciones para anuncios y landing',
      'Orientación sobre seguimiento de leads',
    ],
    cta: 'Solicitar revisión',
    highlighted: false,
  },
  {
    title: 'Sistema de captación',
    subtitle: 'La opción principal para clínicas estéticas',
    description:
      'Montamos un sistema de captación enfocado en generar solicitudes de pacientes potenciales de forma más ordenada y predecible.',
    features: [
      'Campañas de anuncios',
      'Landing page optimizada',
      'Formulario de captación',
      'Automatización básica del seguimiento',
      'Optimización inicial del sistema',
    ],
    cta: 'Reservar llamada gratuita',
    highlighted: true,
  },
  {
    title: 'Captación + optimización',
    subtitle: 'Para clínicas que quieren mejorar y escalar',
    description:
      'Además de la base de captación, trabajamos la mejora continua del sistema para ganar calidad y consistencia.',
    features: [
      'Todo lo anterior',
      'Ajustes continuos de campañas',
      'Mejora del mensaje y conversión',
      'Revisión de resultados',
      'Soporte estratégico continuo',
    ],
    cta: 'Hablar sobre mi caso',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-neuro-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Formas de trabajar
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4">
            Elegimos la mejor opción según tu clínica
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No trabajamos con paquetes cerrados sin sentido. Adaptamos el sistema de captación
            según el punto en el que esté tu negocio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-neuro-blue/10 to-neuro-purple/10 border-neuro-blue/40'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-neuro-blue/15 text-neuro-blue text-sm font-medium mb-4">
                  Recomendado
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
              <p className="text-neuro-blue mb-4">{plan.subtitle}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{plan.description}</p>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full inline-flex justify-center items-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'text-black'
                    : 'text-white border border-white/15 hover:border-neuro-blue hover:bg-white/5'
                }`}
                style={
                  plan.highlighted
                    ? { background: 'linear-gradient(90deg, #00d4ff, #7b2cff)' }
                    : {}
                }
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;