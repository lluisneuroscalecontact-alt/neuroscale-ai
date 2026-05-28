// src/components/FAQ.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿NeuroScale sustituye a recepción?',
    answer:
      'No. NeuroScale se encarga de las respuestas iniciales, la recogida de datos y el seguimiento automático. Tu equipo sigue tomando las decisiones y atendiendo los casos importantes. NeuroScale solo reduce el trabajo repetitivo, atiende al paciente en persona y gestiona los casos que requieren atención humana. El sistema reduce el trabajo repetitivo, no las personas.',
  },
  {
    question: '¿La IA da consejos médicos o diagnósticos?',
    answer:
      'No. NeuroScale no da consejos médicos, no hace diagnósticos ni opina sobre tratamientos. Su función es atender la consulta inicial, recoger información básica y orientar al paciente hacia el siguiente paso: reservar cita o hablar con el equipo.',
  },
  {
    question: '¿Tengo que cambiar mi WhatsApp?',
    answer:
      'En la demo revisamos tu proceso actual y vemos la forma más sencilla de integrarlo. El sistema se conecta a través de la API oficial de WhatsApp Business. Tu clínica mantiene el mismo número y la misma identidad. La configuración la hacemos nosotros durante la instalación.',
  },
  {
    question: '¿Se adapta a mis tratamientos y horarios?',
    answer:
      'Sí. Antes de activar el sistema, lo configuramos específicamente para tu clínica: los tratamientos que ofreces, el horario de atención, el tono de comunicación y las preguntas clave que necesitas hacer a cada lead.',
  },
  {
    question: '¿Qué pasa si el paciente necesita hablar con una persona?',
    answer:
      'El sistema detecta cuándo una consulta requiere atención directa y lo indica claramente. En ese momento, el equipo recibe un aviso para retomar la conversación. NeuroScale no bloquea el acceso al equipo humano, lo reserva para cuando de verdad hace falta.',
  },
  {
    question: '¿Cuánto tarda en instalarse?',
    answer:
      'La configuración inicial suele completarse en menos de una semana. Antes de activar el sistema hacemos una llamada para entender tu clínica, y a partir de ahí preparamos todo para que funcione desde el primer día.',
  },
  {
    question: '¿Puedo empezar con una versión piloto?',
    answer:
      'Sí, es exactamente lo que ofrecemos ahora mismo. El piloto incluye el sistema completo configurado para tu clínica, con un precio reducido porque nos interesa trabajar con los primeros casos reales y ajustar el sistema de forma cercana.',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer:
      'Un número de WhatsApp Business, acceso a Google Calendar y algo de tiempo para la llamada inicial de configuración. Nosotros nos encargamos del resto. No necesitas conocimientos técnicos ni herramientas adicionales.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#050505] px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Cabecera */}
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4 leading-tight">
           Dudas frecuentes antes de {' '}
            <span className="gradient-text">probar NeuroScale</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Las dudas más habituales que tienen las clínicas antes de pedir una demo o entrar como piloto.
          </p>
        </motion.div>

        {/* Acordeón */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.045 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? 'bg-white/[0.07] border-neuro-blue/30'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${isOpen ? 'text-white' : 'text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-neuro-blue' : 'text-gray-500'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

               {/* Nota de cierre */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          ¿Tienes alguna duda que no esté aquí?{' '}
          <a
            href="#cta"
            className="text-neuro-blue hover:underline transition-all"
          >
            Escríbenos directamente.
          </a>
        </motion.p>

      </div>
    </section>
  );
};

export default FAQ;