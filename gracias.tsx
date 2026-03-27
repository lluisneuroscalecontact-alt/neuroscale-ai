import { Link } from 'react-router-dom';
import { CheckCircle, MessageCircle } from 'lucide-react';

const Gracias = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-neuro-blue" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ¡Solicitud recibida!
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Gracias por contactar con <span className="text-white font-semibold">NeuroScale AI</span>.
          Hemos recibido tu información correctamente.
        </p>

        <p className="text-gray-400 mb-8">
          Revisaré tu caso y te responderé lo antes posible en
          <span className="text-white font-medium"> lluis.neuroscale.contact@gmail.com</span>
          {' '}o por teléfono si has dejado tu número.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/34603764807"
            target="_blank"
            rel="noreferrer"
            className="glow-button"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Hablar por WhatsApp
          </a>

          <Link
            to="/"
            className="border border-white/20 hover:border-neuro-blue text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gracias;