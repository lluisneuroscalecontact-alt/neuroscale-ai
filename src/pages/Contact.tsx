// src/pages/Contact.tsx
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Shield,
  CalendarCheck,
} from 'lucide-react';
import logoIcon from '../assets/vite.svg';

const FORM_ENDPOINT = 'https://formspree.io/f/mjgpvyey';

const EMAIL_HREF =
  'https://mail.google.com/mail/?view=cm&fs=1&to=lluis.neuroscale.contact@gmail.com&su=Solicitud%20demo%20NeuroScale&body=Hola%20Lluis%2C%20me%20gustar%C3%ADa%20ver%20una%20demo%20de%20NeuroScale%20para%20mi%20cl%C3%ADnica.';
  
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    city: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = '/gracias';
      } else {
        alert('Ha habido un error al enviar el formulario. Inténtalo de nuevo.');
      }
    } catch {
      alert('Error de conexión. Revisa internet e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neuro-blue/60 focus:outline-none focus:bg-white/[0.07] transition-colors duration-200 text-sm';

  return (
    <div className="min-h-screen bg-neuro-black">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-neuro-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src={logoIcon}
                alt="NeuroScale AI"
                className="w-7 h-7 object-contain"
              />
            </div>

            <div>
              <span className="block text-xl font-bold font-poppins gradient-text leading-none">
                NeuroScale AI
              </span>
              <span className="block text-xs text-gray-500 mt-1">
                Captación para clínicas estéticas
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>
      </nav>

      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Cabecera */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-neuro-blue animate-pulse" />
              Plazas piloto abiertas
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4 leading-tight">
              ¿Quieres ver cómo funcionaría{' '}
              <span className="gradient-text">NeuroScale en tu clínica?</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Cuéntame un poco sobre tu clínica y te enseño una demo corta.
              Revisamos juntos si tiene sentido aplicarlo a tu proceso actual.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-white font-semibold text-lg mb-6">
                Solicitar demo personalizada
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                  <input
                    type="text"
                    name="business"
                    placeholder="Nombre de la clínica *"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="Ciudad *"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="¿Cómo gestionas ahora los leads que llegan por WhatsApp, Instagram o web? (opcional)"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-button w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Solicitar demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center pt-1">
                  Al enviar este formulario, aceptas que NeuroScale AI se ponga
                  en contacto contigo para responder a tu solicitud.
                </p>
              </form>
            </motion.div>

            {/* Columna lateral */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Qué ocurre al enviar */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Qué pasa al enviar
                </h3>

                <ol className="space-y-4">
                  {[
                    'Revisamos tu solicitud y te contactamos en menos de 24h.',
                    'Hacemos una llamada corta para entender cómo funciona tu clínica.',
                    'Si encaja, te enseño la demo y vemos si tiene sentido empezar el piloto.',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-neuro-blue/40 text-neuro-blue text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                        {i + 1}
                      </span>
                      <p className="text-gray-400 text-sm leading-snug">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Trust pills */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Sin letra pequeña
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      icon: Shield,
                      text: 'Sin compromiso. Si no encaja, no hay problema.',
                    },
                    {
                      icon: CalendarCheck,
                      text: 'Demo corta, sin presentaciones largas.',
                    },
                    {
                      icon: MessageCircle,
                      text: 'Pensado para clínicas que reciben leads por WhatsApp, Instagram o web.',
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-neuro-blue flex-shrink-0 mt-0.5" />
                      <p className="text-gray-400 text-sm leading-snug">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contacto directo */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Contacto directo
                </h3>

                <a
  href={EMAIL_HREF}
  target="_blank"
  rel="noreferrer"
  className="block text-gray-400 hover:text-white text-sm mb-1 transition-colors"
>
  📧 lluis.neuroscale.contact@gmail.com
</a>

                <a
                  href="tel:+34603764807"
                  className="block text-gray-400 hover:text-white text-sm mb-4 transition-colors"
                >
                  📱 +34 603 76 48 07
                </a>

                <a
                  href="https://wa.me/34603764807"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/15 text-white text-sm font-medium hover:border-neuro-blue/50 hover:bg-white/5 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-neuro-blue" />
                  Escribir por WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;