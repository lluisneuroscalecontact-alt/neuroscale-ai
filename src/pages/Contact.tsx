import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    currentClients: '',
    desiredClients: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjgpvyey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.location.href = '/gracias';
      } else {
        alert('Ha habido un error al enviar el formulario. Inténtalo de nuevo.');
      }
    } catch (error) {
      alert('Error de conexión. Revisa internet e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neuro-black">
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

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Consigue más clientes para tu negocio
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            En <span className="font-semibold text-white">NeuroScale AI</span> te ayudamos a generar
            leads cualificados con anuncios y automatización.
          </p>

          <p className="text-gray-400">
            Rellena este formulario y te contactaremos en menos de 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-neuro-blue focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-neuro-blue focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono / WhatsApp *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-neuro-blue focus:outline-none"
                />

                <input
                  type="text"
                  name="business"
                  placeholder="Nombre del negocio *"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-neuro-blue focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="currentClients"
                  placeholder="Clientes actuales al mes"
                  value={formData.currentClients}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-neuro-blue focus:outline-none"
                />

                <input
                  type="text"
                  name="desiredClients"
                  placeholder="Clientes deseados al mes"
                  value={formData.desiredClients}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-neuro-blue focus:outline-none"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="¿Cuál es tu principal problema ahora mismo?"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-neuro-blue focus:outline-none resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #7b2cff)',
                  color: '#000000'
                }}
              >
                {isSubmitting ? 'Enviando...' : 'Reservar llamada gratuita'}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Al enviar este formulario, aceptas que NeuroScale AI contacte contigo para responder a tu solicitud.
              </p>
            </form>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-white">Contacto directo</h2>

            <p className="mb-2 text-white">📧 lluis.neuroscale.contact@gmail.com</p>
            <p className="mb-4 text-white">📱 +34 603 76 48 07</p>

            <a
              href="https://wa.me/34603764807"
              target="_blank"
              rel="noreferrer"
              className="block text-center py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition"
            >
              Escribirme por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;