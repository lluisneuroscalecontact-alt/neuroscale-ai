// src/pages/WhatsAppDemo.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Phone, Video, MoreVertical,
  CheckCheck, Play, RotateCcw,
} from 'lucide-react';

type Sender = 'patient' | 'bot';

interface Message {
  id: number;
  sender: Sender;
  text: string;
  time: string;
}

interface SystemEvent {
  id: number;
  label: string;
  triggerAfter: number;
}

const MESSAGES: Message[] = [
  {
    id: 1,
    sender: 'patient',
    text: 'Hola, quería información sobre ácido hialurónico en labios. ¿Tenéis cita esta semana?',
    time: '10:42',
  },
  {
    id: 2,
    sender: 'bot',
    text: 'Hola, gracias por escribirnos. Podemos ayudarte con información general sobre ácido hialurónico en labios. Para orientarte mejor, lo recomendable es reservar una valoración con el equipo. ¿Te gustaría agendar una cita?',
    time: '10:42',
  },
  {
    id: 3,
    sender: 'patient',
    text: 'Sí, me gustaría ir esta semana si hay hueco.',
    time: '10:43',
  },
  {
    id: 4,
    sender: 'bot',
    text: 'Perfecto. ¿Me indicas tu nombre y qué día u horario te vendría mejor?',
    time: '10:43',
  },
  {
    id: 5,
    sender: 'patient',
    text: 'Soy Marta García. Podría por la tarde.',
    time: '10:44',
  },
  {
    id: 6,
    sender: 'bot',
    text: 'Genial, Marta. Para poder revisar disponibilidad, dime qué día te vendría mejor esta semana y una hora aproximada.',
    time: '10:44',
  },
  {
    id: 7,
    sender: 'patient',
    text: 'El jueves sobre las 18:00.',
    time: '10:45',
  },
  {
    id: 8,
    sender: 'bot',
    text: 'Hay disponibilidad el jueves a las 18:00 para una valoración. ¿Quieres que reserve ese hueco?',
    time: '10:45',
  },
  {
    id: 9,
    sender: 'patient',
    text: 'Sí, perfecto.',
    time: '10:46',
  },
  {
    id: 10,
    sender: 'bot',
    text: 'Cita registrada. Marta García queda agendada para el jueves a las 18:00. El equipo de la clínica recibirá el aviso con los datos de la reserva.',
    time: '10:46',
  },
];

const SYSTEM_EVENTS: SystemEvent[] = [
  { id: 1, label: 'Consulta recibida',       triggerAfter: 1  },
  { id: 2, label: 'Información recogida',    triggerAfter: 5  },
  { id: 3, label: 'Horario solicitado',      triggerAfter: 6  },
  { id: 4, label: 'Disponibilidad revisada', triggerAfter: 8  },
  { id: 5, label: 'Cita registrada',         triggerAfter: 10 },
  { id: 6, label: 'Aviso enviado al equipo', triggerAfter: 10 },
];

const DELAY_BETWEEN = 1200;

const WhatsAppDemo = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isPlaying, setIsPlaying]       = useState(false);
  const [isTyping, setIsTyping]         = useState(false);
  const bottomRef                        = useRef<HTMLDivElement>(null);
  const timerRef                         = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeEvents = SYSTEM_EVENTS.filter(e => e.triggerAfter <= visibleCount);
  const isDone       = visibleCount >= MESSAGES.length;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleCount, isTyping]);

  useEffect(() => {
    if (!isPlaying || isDone) {
      setIsTyping(false);
      if (isDone) setIsPlaying(false);
      return;
    }

    const nextMsg = MESSAGES[visibleCount];
    const delay   = nextMsg?.sender === 'bot' ? DELAY_BETWEEN + 700 : DELAY_BETWEEN;

    if (nextMsg?.sender === 'bot') setIsTyping(true);

    timerRef.current = setTimeout(() => {
      setIsTyping(false);
      setVisibleCount(c => c + 1);
    }, delay);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isPlaying, visibleCount, isDone]);

  const handlePlay = () => { if (!isDone) setIsPlaying(true); };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setIsTyping(false);
    setVisibleCount(0);
  };

  return (
    <div className="min-h-screen bg-neuro-black px-4 sm:px-6 lg:px-8 py-10">

      {/* Back */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>

      {/* Cabecera */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neuro-blue/30 bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-4">
          Demo interactiva
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-3">
          Así responde NeuroScale{' '}
          <span className="gradient-text">en tiempo real</span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Conversación de ejemplo entre una paciente y el sistema automatizado de una clínica estética.
        </p>
      </div>

      {/* Layout principal */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 items-start justify-center">

        {/* Móvil simulado */}
        <div className="w-full max-w-sm mx-auto lg:mx-0 flex-shrink-0">
          <div className="rounded-[2.5rem] border-[6px] border-gray-700 bg-gray-900 shadow-2xl overflow-hidden">

            {/* Barra de estado */}
            <div className="bg-gray-900 px-6 pt-3 pb-1 flex justify-between items-center">
              <span className="text-white text-xs font-medium">10:42</span>
              <div className="flex gap-1 items-center">
                <div className="w-3.5 h-3.5 rounded-sm bg-white/60" />
                <div className="w-3.5 h-3.5 rounded-sm bg-white/60" />
                <div className="w-3.5 h-3.5 rounded-sm bg-white/60" />
              </div>
            </div>

            {/* Header WhatsApp */}
            <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neuro-blue/30 border border-neuro-blue/40 flex items-center justify-center flex-shrink-0">
                <span className="text-neuro-blue font-bold text-sm">CE</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">Clínica Estética Demo</p>
                <p className="text-[#4fae5e] text-xs">Online</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Video        className="w-5 h-5" />
                <Phone        className="w-5 h-5" />
                <MoreVertical className="w-5 h-5" />
              </div>
            </div>

            {/* Área de chat */}
            <div
              className="h-[460px] overflow-y-auto px-3 py-4 space-y-2"
              style={{ background: '#0b1014' }}
            >
              <AnimatePresence>
                {MESSAGES.slice(0, visibleCount).map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className={`flex ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-snug shadow-sm ${
                        msg.sender === 'patient'
                          ? 'bg-[#005c4b] text-white rounded-tr-sm'
                          : 'bg-[#1f2c34] text-gray-100 rounded-tl-sm'
                      }`}
                    >
                      {msg.id === 10 && (
                        <div className="flex items-center gap-1.5 mb-2 bg-neuro-blue/20 border border-neuro-blue/30 rounded-lg px-2.5 py-1.5">
                          <span className="text-neuro-blue text-xs">📅</span>
                          <span className="text-neuro-blue text-xs font-semibold">
                            Cita añadida a Google Calendar
                          </span>
                        </div>
                      )}
                      <p>{msg.text}</p>
                      <div className={`flex items-center gap-1 mt-1 ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-[10px] text-gray-400">{msg.time}</span>
                        {msg.sender === 'patient' && (
                          <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#1f2c34] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 rounded-full bg-gray-400 block"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Input falso */}
            <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2">
              <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2">
                <p className="text-gray-500 text-sm">Escribe un mensaje</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Controles */}
          <div className="flex gap-3 mt-5 justify-center">
            <button
              onClick={handlePlay}
              disabled={isPlaying || isDone}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #7b2cff)' }}
            >
              <Play className="w-4 h-4" />
              {isDone ? 'Demo completada' : 'Reproducir demo'}
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-white/15 text-white hover:border-neuro-blue/50 hover:bg-white/5 transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </button>
          </div>
        </div>

        {/* Panel lateral */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Lo que ocurre en el sistema
            </p>

            <div className="flex flex-col gap-3">
              {SYSTEM_EVENTS.map((event) => {
                const isActive = activeEvents.some(e => e.id === event.id);
                return (
                  <motion.div
                    key={event.id}
                    animate={{ opacity: isActive ? 1 : 0.25 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isActive
                        ? 'border-neuro-blue bg-neuro-blue/20'
                        : 'border-white/15 bg-transparent'
                    }`}>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ ease: 'easeOut', duration: 0.25 }}
                          className="w-2.5 h-2.5 rounded-full bg-neuro-blue"
                        />
                      )}
                    </div>
                    <span className={`text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                      {event.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-gray-500 text-xs leading-relaxed">
                Ejemplo visual del flujo de conversación. Los datos mostrados son ficticios.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <p className="text-white font-semibold text-sm mb-1">¿Lo quieres en tu clínica?</p>
            <p className="text-gray-400 text-xs mb-4 leading-snug">
              Configuro esto adaptado a tus tratamientos y horarios.
            </p>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center w-full px-4 py-2.5 rounded-lg font-semibold text-xs text-black transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #7b2cff)' }}
            >
              Solicitar demo aplicada a mi clínica
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatsAppDemo;