import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Trabajáis solo con clínicas estéticas?',
    answer:
      'Ahora mismo nuestra propuesta está enfocada en clínicas estéticas porque permite construir una oferta más clara, más especializada y con mejor encaje comercial.',
  },
  {
    question: '¿Necesito invertir mucho en anuncios para empezar?',
    answer:
      'No necesariamente. La inversión depende de tu zona, tus servicios y tu objetivo. Lo importante es tener una estructura correcta para que el presupuesto se aproveche mejor.',
  },
  {
    question: '¿También hacéis la landing y el formulario?',
    answer:
      'Sí. La idea es montar un sistema completo: anuncios, landing, captación de datos y seguimiento inicial para que no se pierdan oportunidades.',
  },
  {
    question: '¿En cuánto tiempo se pueden ver resultados?',
    answer:
      'Depende del punto de partida de la clínica, del mercado y de la oferta. Normalmente primero buscamos validar el mensaje y la captación, y a partir de ahí optimizar.',
  },
  {
    question: '¿Y si ya tengo Instagram o alguien llevándome redes?',
    answer:
      'No hay problema. Esto no sustituye necesariamente tus redes. Lo que hacemos es crear un sistema más enfocado en generar solicitudes de pacientes potenciales.',
  },
  {
    question: '¿Qué pasa después de dejar mis datos?',
    answer:
      'Revisamos tu caso, vemos si encaja con nuestro enfoque y te contactamos para hablar de la mejor estrategia para tu clínica.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#050505] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Preguntas frecuentes
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4">
            Resolvemos las dudas más comunes
          </h2>

          <p className="text-lg text-gray-300">
            Aquí tienes respuestas claras antes de reservar una llamada.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6"
                >
                  <span className="text-white font-semibold pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neuro-blue transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;