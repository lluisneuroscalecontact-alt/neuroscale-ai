import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const servicesData = {
  'social-media': {
    title: 'Social Media Management',
    icon: '📱',
    description: 'Gestión completa de redes sociales con IA que crea contenido viral y optimiza publicaciones automáticas.',
    fullDescription: 'Transformamos tu presencia en redes sociales con nuestra tecnología de IA que analiza tendencias, crea contenido optimizado y programa publicaciones en el momento perfecto para maximizar el engagement.',
    benefits: [
      'Contenido automatizado de alta calidad',
      'Optimización inteligente de hashtags',
      'Análisis predictivo de tendencias',
      'Programación basada en IA',
      'Monitoreo 24/7 de menciones',
      'Reportes detallados de rendimiento'
    ],
    features: [
      'Gestión de Instagram, Facebook, LinkedIn, Twitter',
      'Creación de contenido visual y textual',
      'Interacción automática con seguidores clave',
      'Análisis de competencia',
      'Estrategias de crecimiento orgánico',
      'Campañas de influencers automatizadas'
    ],
    process: [
      {
        step: 'Análisis de Perfil',
        description: 'Auditamos tu presencia actual y identificamos oportunidades de mejora'
      },
      {
        step: 'Estrategia de Contenido',
        description: 'Desarrollamos un calendario de contenido optimizado por IA'
      },
      {
        step: 'Ejecución Automatizada',
        description: 'Publicamos y optimizamos contenido de forma automática'
      },
      {
        step: 'Análisis y Optimización',
        description: 'Monitoreamos resultados y ajustamos la estrategia en tiempo real'
      }
    ],
    metrics: [
      { value: '+400%', label: 'Engagement promedio' },
      { value: '3x', label: 'Más seguidores' },
      { value: '89%', label: 'Reducción de tiempo manual' }
    ],
    price: 'Desde €999/mes'
  },
  'paid-ads': {
    title: 'Paid Ads (Meta/Google)',
    icon: '🎯',
    description: 'Campañas publicitarias optimizadas por IA que maximizan ROAS y minimizan el coste por adquisición.',
    fullDescription: 'Nuestra IA analiza millones de puntos de datos para crear campañas publicitarias ultra-optimizadas que generan el máximo retorno de inversión posible.',
    benefits: [
      'Segmentación predictiva avanzada',
      'Optimización automática de pujas',
      'A/B testing inteligente',
      'Presupuesto optimizado en tiempo real',
      'Análisis de competencia publicitaria',
      'Retargeting dinámico'
    ],
    features: [
      'Campañas en Meta Ads (Facebook/Instagram)',
      'Google Ads (Search/Display/YouTube)',
      'LinkedIn Ads para B2B',
      'TikTok Ads',
      'Creación de creativos optimizados',
      'Landing pages personalizadas'
    ],
    process: [
      {
        step: 'Investigación de Mercado',
        description: 'Analizamos tu audiencia y competencia'
      },
      {
        step: 'Creación de Campañas',
        description: 'Diseñamos anuncios optimizados por IA'
      },
      {
        step: 'Lanzamiento y Monitoreo',
        description: 'Activamos campañas con optimización continua'
      },
      {
        step: 'Escalado',
        description: 'Ampliamos presupuestos en campañas rentables'
      }
    ],
    metrics: [
      { value: '4.2x', label: 'ROAS promedio' },
      { value: '-45%', label: 'Coste por adquisición' },
      { value: '+250%', label: 'Tasa de conversión' }
    ],
    price: 'Desde €1,499/mes'
  },
  'automation': {
    title: 'Automatización con IA',
    icon: '🤖',
    description: 'Sistemas inteligentes que operan tu marketing 24/7 sin intervención manual.',
    fullDescription: 'Implementamos sistemas de automatización avanzados que gestionan todo tu ecosistema de marketing mientras te concentras en hacer crecer tu negocio.',
    benefits: [
      'Respuestas automáticas personalizadas',
      'Lead scoring avanzado',
      'Nuturing automatizado',
      'Análisis en tiempo real',
      'Integración con múltiples plataformas',
      'Escalabilidad infinita'
    ],
    features: [
      'Chatbots inteligentes',
      'Automatización de email marketing',
      'CRM automatizado',
      'Integración con redes sociales',
      'Flujos de trabajo personalizados',
      'Dashboard de control en tiempo real'
    ],
    process: [
      {
        step: 'Mapeo de Procesos',
        description: 'Identificamos oportunidades de automatización'
      },
      {
        step: 'Diseño de Flujos',
        description: 'Creamos sistemas automatizados personalizados'
      },
      {
        step: 'Implementación',
        description: 'Integramos todas las herramientas necesarias'
      },
      {
        step: 'Optimización',
        description: 'Ajustamos los sistemas para máxima eficiencia'
      }
    ],
    metrics: [
      { value: '90%', label: 'Reducción de tareas manuales' },
      { value: '24/7', label: 'Operación continua' },
      { value: '+300%', label: 'Eficiencia operativa' }
    ],
    price: 'Desde €1,999/mes'
  },
  'lead-generation': {
    title: 'Generación de Leads',
    icon: '👥',
    description: 'Captura y calificación automática de clientes potenciales con altas tasas de conversión.',
    fullDescription: 'Nuestros sistemas de IA identifican, capturan y califican leads de forma automática, entregando solo los prospectos más valiosos a tu equipo de ventas.',
    benefits: [
      'Formularios inteligentes conversión',
      'Calificación automática de leads',
      'Seguimiento personalizado automatizado',
      'CRM integrado',
      'Análisis predictivo de conversión',
      'Nuturing multi-canal'
    ],
    features: [
      'Landing pages optimizadas',
      'Formularios inteligentes',
      'Lead scoring avanzado',
      'Email secuencias automatizadas',
      'Retargeting multi-plataforma',
      'Análisis de comportamiento'
    ],
    process: [
      {
        step: 'Definición de Buyer Persona',
        description: 'Identificamos tu cliente ideal'
      },
      {
        step: 'Creación de Funnels',
        description: 'Diseñamos embudos de conversión optimizados'
      },
      {
        step: 'Implementación',
        description: 'Lanzamos campañas de captación'
      },
      {
        step: 'Optimización',
        description: 'Mejoramos continuamente las tasas de conversión'
      }
    ],
    metrics: [
      { value: '+347%', label: 'Leads generados' },
      { value: '89%', label: 'Tasa de calificación' },
      { value: '4x', label: 'Mejor ROI' }
    ],
    price: 'Desde €1,299/mes'
  },
  'email-marketing': {
    title: 'Email Marketing',
    icon: '📧',
    description: 'Campañas de email personalizadas y automatizadas con tasas de apertura excepcionales.',
    fullDescription: 'Creamos campañas de email marketing ultra-personalizadas usando IA para segmentar, personalizar y optimizar cada comunicación.',
    benefits: [
      'Segmentación dinámica avanzada',
      'Contenido personalizado automático',
      'Automatización de flujos',
      'Análisis detallado de comportamiento',
      'Optimización de asuntos y contenido',
      'Integración con CRM'
    ],
    features: [
      'Emails transaccionales',
      'Campañas promocionales',
      'Newsletters personalizados',
      'Flujos de bienvenida',
      'Campañas de reactivación',
      'Análisis A/B testing'
    ],
    process: [
      {
        step: 'Segmentación de Audiencia',
        description: 'Dividimos tu lista en segmentos relevantes'
      },
      {
        step: 'Creación de Contenido',
        description: 'Diseñamos emails personalizados por IA'
      },
      {
        step: 'Automatización',
        description: 'Configuramos flujos automáticos'
      },
      {
        step: 'Optimización',
        description: 'Analizamos y mejoramos continuamente'
      }
    ],
    metrics: [
      { value: '45%', label: 'Tasa de apertura promedio' },
      { value: '12%', label: 'Tasa de clics' },
      { value: '+200%', label: 'ROI promedio' }
    ],
    price: 'Desde €799/mes'
  },
  'growth-strategy': {
    title: 'Estrategia de Crecimiento',
    icon: '📈',
    description: 'Planificación estratégica basada en datos para escalar tu negocio de forma sostenible.',
    fullDescription: 'Desarrollamos estrategias de crecimiento completas basadas en análisis profundo de datos, competencia y tendencias del mercado.',
    benefits: [
      'Análisis de competencia exhaustivo',
      'Identificación de oportunidades únicas',
      'Roadmap personalizado',
      'Métricas clave definidas',
      'Estrategias multi-canal',
      'Planificación a largo plazo'
    ],
    features: [
      'Análisis DAFO',
      'Investigación de mercado',
      'Definición de KPIs',
      'Plan de acción detallado',
      'Modelado financiero',
      'Estrategias de escala'
    ],
    process: [
      {
        step: 'Diagnóstico Completo',
        description: 'Analizamos tu negocio y mercado'
      },
      {
        step: 'Estrategia',
        description: 'Desarrollamos un plan de crecimiento'
      },
      {
        step: 'Implementación',
        description: 'Ejecutamos las iniciativas clave'
      },
      {
        step: 'Monitoreo',
        description: 'Seguimiento y ajuste continuo'
      }
    ],
    metrics: [
      { value: '+300%', label: 'Crecimiento proyectado' },
      { value: '6 meses', label: 'Tiempo a ROI positivo' },
      { value: '95%', label: 'Precisión de predicciones' }
    ],
    price: 'Desde €2,499/mes'
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-neuro-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold text-neuro-white mb-4">Servicio no encontrado</h1>
          <Link to="/" className="glow-button">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neuro-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neuro-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-neuro-blue" />
              <span className="text-xl font-bold font-poppins gradient-text">NeuroScale AI</span>
            </Link>
            <Link to="/" className="flex items-center text-neuro-blue hover:text-neuro-purple transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold gradient-text mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button">
                Contratar servicio
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link to="/contact" className="border border-neuro-blue/50 text-neuro-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:border-neuro-blue hover:bg-neuro-blue/10">
                Agendar llamada
              </Link>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {service.metrics.map((metric, index) => (
              <div key={index} className="text-center card-dark p-6">
                <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neuro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold gradient-text mb-4">
              Beneficios Clave
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Todo lo que obtienes con este servicio potenciado por IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <Check className="w-6 h-6 text-neuro-blue mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold gradient-text mb-4">
              Características Incluidas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6"
              >
                <Target className="w-8 h-8 text-neuro-blue mb-4" />
                <h3 className="text-lg font-semibold text-neuro-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-neuro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold gradient-text mb-4">
              Nuestro Proceso
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-neuro-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-neuro-black">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-neuro-white mb-2">{step.step}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-neuro-blue/10 to-neuro-purple/10 border border-neuro-blue/30 rounded-2xl p-12 text-center"
          >
            <Award className="w-16 h-16 text-neuro-blue mx-auto mb-6" />
            <h2 className="text-3xl font-poppins font-bold text-neuro-white mb-4">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {service.price} • Resultados garantizados en 90 días
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="glow-button">
                Agendar llamada estratégica
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="border border-neuro-blue/50 text-neuro-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:border-neuro-blue hover:bg-neuro-blue/10">
                Ver planes
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
