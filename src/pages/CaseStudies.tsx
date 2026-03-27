import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Clínica estética local',
    situation: 'La clínica dependía casi por completo del boca a boca y de publicaciones en redes.',
    objective: 'Generar solicitudes de pacientes potenciales de forma más constante.',
    strategy:
      'Crear una oferta clara, lanzar campañas orientadas a captación y dirigir el tráfico a una landing específica.',
    result:
      'Sistema más ordenado para captar contactos y mejorar la previsibilidad comercial.',
  },
  {
    title: 'Centro de depilación láser',
    situation: 'Tenían interés en sus servicios, pero pocas conversiones en contacto real.',
    objective: 'Convertir mejor el tráfico y facilitar que las personas interesadas dejen sus datos.',
    strategy:
      'Mejorar el mensaje, simplificar la página y estructurar un formulario pensado para captar leads.',
    result:
      'Proceso de captación más claro y mejor base para optimizar campañas.',
  },
  {
    title: 'Clínica de medicina estética',
    situation: 'La clínica quería crecer, pero no tenía una estructura clara para captar oportunidades.',
    objective: 'Montar una base estable de anuncios, landing y seguimiento.',
    strategy:
      'Diseñar un sistema centrado en solicitud de información y automatización del primer contacto.',
    result:
      'Captación más organizada y mejor preparación para escalar en el futuro.',
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-neuro-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-neuro-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neuro-blue rounded flex items-center justify-center">
              <span className="text-neuro-black font-bold text-sm">NS</span>
            </div>
            <span className="text-xl font-bold font-poppins gradient-text">
              NeuroScale AI
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center text-neuro-blue hover:text-neuro-purple transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </Link>
        </div>
      </nav>

      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
              Casos tipo de captación
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6">
              Cómo trabajaría NeuroScale AI con una clínica estética
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              En esta fase preferimos enseñar ejemplos estratégicos claros en lugar de inflar cifras
              o enseñar casos poco creíbles. Así puedes entender mejor nuestro enfoque.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-2xl font-semibold text-white mb-5">{study.title}</h2>

                <div className="space-y-4">
                  <div>
                    <p className="text-neuro-blue font-medium mb-1">Situación</p>
                    <p className="text-gray-300">{study.situation}</p>
                  </div>

                  <div>
                    <p className="text-neuro-blue font-medium mb-1">Objetivo</p>
                    <p className="text-gray-300">{study.objective}</p>
                  </div>

                  <div>
                    <p className="text-neuro-blue font-medium mb-1">Estrategia</p>
                    <p className="text-gray-300">{study.strategy}</p>
                  </div>

                  <div>
                    <p className="text-neuro-blue font-medium mb-1">Resultado esperado</p>
                    <p className="text-gray-300">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 rounded-3xl border border-neuro-blue/20 bg-gradient-to-br from-neuro-blue/10 to-neuro-purple/10 p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-4">
              ¿Quieres aplicar este sistema a tu clínica?
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Reserva una llamada y revisaremos si podemos ayudarte a crear una captación
              más clara, más medible y mejor organizada.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-black transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
              }}
            >
              Reservar llamada gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;