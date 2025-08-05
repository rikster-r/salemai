import React, { useState, useEffect } from 'react';
import {
  Phone,
  PhoneCall,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  Clock,
} from 'lucide-react';
import { motion } from 'motion/react';

const callStates = [
  {
    status: 'incoming',
    caller: 'Анна Иванова',
    number: '+7 (777) 123-45-67',
    duration: null,
  },
  {
    status: 'active',
    caller: 'Анна Иванова',
    number: '+7 (777) 123-45-67',
    duration: '02:34',
  },
  {
    status: 'ended',
    caller: 'Анна Иванова',
    number: '+7 (777) 123-45-67',
    duration: '05:42',
  },
];

const phoneVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function Telephony() {
  const [currentCall, setCurrentCall] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCall((prev) => (prev + 1) % callStates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const call = callStates[currentCall];

  return (
    <div className="flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-16 max-w-6xl mx-auto mt-36">
      {/* Left Side - Telephony Information */}
      <div className="flex-1 space-y-6 md:space-y-8 md:mt-10">
        <h3 className="text-2xl md:text-4xl font-bold text-slate-800">
          Телефония
        </h3>

        <div className="space-y-3 md:space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Облачная IP-телефония с записью разговоров
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Автоматическое распределение вызовов между операторами
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Интеграция с CRM для автоматического создания карточек клиентов
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Детальная аналитика звонков и качества обслуживания
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Phone Interface Mockup */}
      <div className="flex-1 flex justify-center">
        <motion.div
          className="relative w-full max-w-[350px]"
          variants={phoneVariants}
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Phone Frame */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] p-3 shadow-2xl">
            <div className="bg-black rounded-[2.5rem] p-4 relative overflow-hidden">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-white text-sm mb-6">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
              </div>

              {/* Call Interface */}
              <div className="text-center text-white space-y-6 pb-8">
                {/* Caller Info */}
                <div className="space-y-2">
                  <motion.div
                    key={call.caller}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                  >
                    <h4 className="text-2xl font-semibold">{call.caller}</h4>
                    <p className="text-gray-300 text-lg">{call.number}</p>
                  </motion.div>
                </div>

                {/* Status/Duration */}
                <div className="space-y-2">
                  {call.status === 'incoming' && (
                    <p className="text-green-400 text-lg font-medium">
                      Входящий звонок
                    </p>
                  )}
                  {call.status === 'active' && (
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-lg font-medium">В разговоре</p>
                    </div>
                  )}
                  {call.status === 'ended' && (
                    <p className="text-gray-400 text-lg font-medium">
                      Завершен
                    </p>
                  )}

                  {call.duration && (
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <Clock className="w-4 h-4" />
                      <span className="text-xl font-mono">{call.duration}</span>
                    </div>
                  )}
                </div>

                {/* Avatar */}
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto"
                  animate={
                    call.status === 'incoming' ? { scale: [1, 1.1, 1] } : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: call.status === 'incoming' ? Infinity : 0,
                  }}
                >
                  <span className="text-3xl font-bold text-white">АИ</span>
                </motion.div>

                {/* Control Buttons */}
                <div className="flex justify-center space-x-6 pt-8">
                  {call.status === 'incoming' && (
                    <>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <PhoneOff className="w-8 h-8 text-white" />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Phone className="w-8 h-8 text-white" />
                      </motion.button>
                    </>
                  )}

                  {call.status === 'active' && (
                    <>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-14 h-14 ${
                          isMuted ? 'bg-red-500' : 'bg-gray-600'
                        } rounded-full flex items-center justify-center shadow-lg`}
                      >
                        {isMuted ? (
                          <MicOff className="w-6 h-6 text-white" />
                        ) : (
                          <Mic className="w-6 h-6 text-white" />
                        )}
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <PhoneOff className="w-8 h-8 text-white" />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Volume2 className="w-6 h-6 text-white" />
                      </motion.button>
                    </>
                  )}

                  {call.status === 'ended' && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <PhoneCall className="w-8 h-8 text-white" />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
