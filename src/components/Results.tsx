import { motion } from 'framer-motion';

const examples = [
  {
    title: 'Clínica estética local',
    problem: 'Dependencia del boca a boca y pocas solicitudes constantes.',
    solution:
      'Campañas de anuncios + landing enfocada + formulario de contacto + seguimiento organizado.',
    outcome:
      'Más oportunidades de venta, mejor control del flujo de leads y proceso comercial más claro.',
  },
  {
    title: 'Centro de depilación láser',
    problem: 'Muchas visitas en redes, pero pocas conversiones en reservas.',
    solution:
      'Mensaje más directo, página específica por servicio y captación orientada a solicitud.',
    outcome:
      'Más contactos útiles y menos pérdida de personas interesadas por falta de seguimiento.',
  },
  {
    title: 'Clínica de medicina estética',
    problem: 'Interés en tratamientos, pero captación poco predecible.',
    solution:
      'Sistema de anuncios + captación + automatización para responder más rápido.',
    outcome:
      'Proceso comercial más ordenado y una base mejor para escalar la captación.',
  },
];

const Results = () => {
  return (
    <section id="results" className="py-24 bg-[#050505] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Cómo aplicamos el sistema
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4">
            Ejemplos reales de cómo trabajaría NeuroScale AI
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            En lugar de inflar cifras, te enseñamos cómo estructuramos un sistema de captación
            para clínicas estéticas que quieren generar más oportunidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {examples.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-neuro-blue font-medium mb-1">Problema</p>
                  <p className="text-gray-300">{item.problem}</p>
                </div>

                <div>
                  <p className="text-neuro-blue font-medium mb-1">Solución</p>
                  <p className="text-gray-300">{item.solution}</p>
                </div>

                <div>
                  <p className="text-neuro-blue font-medium mb-1">Resultado esperado</p>
                  <p className="text-gray-300">{item.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Menos promesas vacías. Más claridad en el sistema.
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Nuestro enfoque es ayudarte a construir una captación más predecible para tu clínica,
            con una estrategia clara y medible desde el principio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;