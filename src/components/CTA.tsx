import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-neuro-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-neuro-blue/20 bg-gradient-to-br from-neuro-blue/10 to-neuro-purple/10 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4">
            ¿Quieres un sistema de captación para tu clínica estética?
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Reserva una llamada y revisaremos si tu clínica puede beneficiarse de una
            estrategia de anuncios, landing y automatización.
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
  );
};

export default CTA;