import { motion } from 'framer-motion';

const proofItems = [
  {
    title: 'Enfoque especializado',
    text: 'NeuroScale AI está orientado a clínicas estéticas que quieren una captación más clara y mejor organizada.',
  },
  {
    title: 'Sistema completo',
    text: 'No solo pensamos en anuncios: trabajamos la landing, la captación de datos y el seguimiento inicial.',
  },
  {
    title: 'Más claridad comercial',
    text: 'Nuestro objetivo es ayudarte a generar solicitudes de pacientes potenciales, no solo visitas o métricas vacías.',
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-[#050505] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <p className="text-neuro-blue font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Posicionamiento claro
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-poppins mb-4">
            Una propuesta más específica genera más confianza
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Hemos orientado NeuroScale AI a un nicho concreto para construir una oferta más seria,
            más entendible y más fácil de vender.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {proofItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 grid sm:grid-cols-3 gap-4"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center">
  <p className="text-2xl font-bold text-white mb-1">Clínicas de estética y medicina estética</p>
  <p className="text-gray-400">Enfoque especializado</p>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center">
  <p className="text-2xl font-bold text-white mb-1">Sistema de captación con anuncios y automatización</p>
  <p className="text-gray-400">Sistema claro y directo</p>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center">
  <p className="text-2xl font-bold text-white mb-1">Más oportunidades reales de venta</p>
  <p className="text-gray-400">Objetivo de negocio</p>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;