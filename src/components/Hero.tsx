import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neuro-black px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(123,44,255,0.12),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
            Sistema de captación para clínicas estéticas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-poppins text-white leading-tight mb-6">
            Consigue más <span className="gradient-text">pacientes potenciales</span>
            <br />
            para tu clínica estética
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            En <span className="text-white font-semibold">NeuroScale AI</span> ayudamos a clínicas
            estéticas a generar solicitudes de pacientes cualificados mediante anuncios,
            landing pages y automatización del seguimiento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-black transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
              }}
            >
              <span className="inline-flex items-center">
                Reservar llamada gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold border border-white/20 text-white hover:border-neuro-blue hover:bg-white/5 transition-all duration-300"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neuro-blue mt-0.5" />
                <p className="text-gray-300">
                  Más solicitudes de pacientes sin depender solo del boca a boca
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neuro-blue mt-0.5" />
                <p className="text-gray-300">
                  Sistema simple: anuncios + landing + seguimiento
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neuro-blue mt-0.5" />
                <p className="text-gray-300">
                  Enfocado en oportunidades de venta reales, no solo visitas
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;