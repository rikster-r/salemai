import React, { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

type Props = {
  openContactModal: (plan?: string) => void;
};

const WhyUsSection = ({ openContactModal }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const comparisons = [
    {
      others: 'Внедрение тянется месяцами, стоимость растёт на каждом этапе',
      us: 'Запускаем за 7–14 дней, фиксируем цену сразу',
    },
    {
      others: 'Работает только с ограниченным списком систем',
      us: 'Интегрируемся с любыми CRM, ERP и сервисами',
    },
    {
      others: 'Одинаковые шаблонные решения для всех',
      us: 'Делаем под ваши процессы и цели',
    },
    {
      others: 'Поддержка “в рабочее время”',
      us: 'На связи 24/7, даже в праздники',
    },
    {
      others: 'Непрозрачное ценообразование, скрытые платежи',
      us: 'Чёткие тарифы и честные условия',
    },
    {
      others: 'Результат не гарантирован',
      us: 'Закрепляем KPI и даём гарантию возврата',
    },
  ];

  const results = [
    { value: '98%', label: 'клиентов продолжают сотрудничество' },
    { value: '14', label: 'дней до полного запуска' },
    { value: '24/7', label: 'поддержка без выходных' },
    { value: '100%', label: 'автоматизация процессов' },
  ];

  return (
    <section className="bg-slate-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Почему выбирают нас?
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Мы не просто внедряем шаблоны, а создаём решения, которые работают
            на вас.
          </p>
        </div>

        {/* Comparison */}
        <div className="relative mb-16">
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-slate-900/60 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-slate-600">
                  <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-700">
                    {/* Others */}
                    <div className="p-5 flex items-start gap-3 hover:bg-slate-800/40 transition-all duration-300">
                      <div className="w-6 h-6 rounded-full border-2 border-slate-600 bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-slate-500" />
                      </div>
                      <p className="text-slate-400 text-base leading-relaxed">
                        {item.others}
                      </p>
                    </div>

                    {/* Us */}
                    <div className="p-5 bg-gradient-to-r from-blue-900/20 to-transparent flex items-start gap-3 hover:bg-blue-900/30 transition-all duration-300">
                      <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <p className="text-white text-base leading-relaxed font-semibold">
                        {item.us}
                      </p>
                    </div>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/5 blur-xl pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950 border border-slate-700 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Не верите словам?
            </h3>
            <p className="text-slate-400 text-sm lg:text-base max-w-2xl mx-auto">
              Вот конкретные результаты наших клиентов
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 max-w-[90%] mx-auto">
            {results.map((stat, i) => (
              <div
                key={i}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl lg:text-5xl font-extrabold text-white mb-1 bg-gradient-to-b from-white to-slate-300 bg-clip-text">
                  {stat.value}
                </div>
                <p className="text-slate-400 text-sm group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-semibold text-base transition-all duration-300"
              onClick={() => openContactModal()}
            >
              Запустить проект
              <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
