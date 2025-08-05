import React, { useMemo } from 'react';
import { Check, ArrowRight, Zap, Building, Crown, Rocket } from 'lucide-react';

type Colors = 'emerald' | 'blue' | 'purple' | 'orange';

const PricingSection = () => {
  const plans = useMemo(
    () => [
      {
        name: 'Старт',
        price: '250 000',
        currency: '₸',
        icon: <Zap className="w-5 h-5" />,
        color: 'emerald',
        features: [
          'Базовая CRM система',
          'Автоматизация заявок',
          '1 интеграция',
          'Базовая аналитика',
          'Обучение 1 сотрудника',
        ],
        popular: false,
      },
      {
        name: 'Бизнес',
        price: '400 000',
        currency: '₸',
        icon: <Building className="w-5 h-5" />,
        color: 'blue',
        features: [
          'Расширенная CRM',
          'Автоматизация заявок',
          '3 интеграции',
          'Расширенная отчеты',
          'Обучение 3 сотрудника',
          'Чат-бот базовый',
        ],
        popular: true,
      },
      {
        name: 'Профессионал',
        price: '650 000',
        currency: '₸',
        icon: <Crown className="w-5 h-5" />,
        color: 'purple',
        features: [
          'AI-CRM система',
          'Полная автоматизация',
          '5+ интеграций',
          'AI аналитика',
          'Обучение команды',
          'AI чат-бот',
          'Поддержка 1 месяц',
        ],
        popular: false,
      },
      {
        name: 'Премиум',
        price: '900 000',
        currency: '₸',
        icon: <Rocket className="w-5 h-5" />,
        color: 'orange',
        features: [
          'Индивидуальная AI-CRM',
          'Полная автоматизация',
          'Неограниченные интеграции',
          'Продвинутая аналитика',
          'Мультиязычные боты',
          'Обучение и сопровождение',
          'Поддержка 3 месяца',
          'Индивидуальные доработки',
        ],
        popular: false,
      },
    ],
    []
  );

  const getColorClasses = (color: Colors, popular = false) => {
    const colors = {
      emerald: {
        accent: '-emerald-500',
        icon: 'text-emerald-600',
        hover: 'hover:border-emerald-200',
      },
      blue: {
        accent: '-blue-600',
        icon: 'text-blue-600',
        hover: 'hover:border-blue-200',
      },
      purple: {
        accent: '-purple-600',
        icon: 'text-purple-600',
        hover: 'hover:border-purple-200',
      },
      orange: {
        accent: '-orange-600',
        icon: 'text-orange-600',
        hover: 'hover:border-orange-200',
      },
    };
    return colors[color];
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-slate-100 py-20">
      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300"></div>
            <span className="text-slate-500 font-medium tracking-wide text-sm uppercase">
              Стоимость решений
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-slate-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight" id="pricing">
            Выберите подходящий
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent mt-2">
              уровень
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Профессиональные решения для бизнес-процессов любой сложности
          </p>
        </div>

        {/* Pricing Container - Horizontal scroll on mobile, grid on larger screens */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-6 pt-16 pb-8 overflow-x-auto no-scrollbar">
          {/* Mobile: Horizontal scrollable container */}
          <div className="lg:hidden pb-4">
            <div className="flex space-x-4 min-w-max px-1">
              {plans.map((plan, index) => {
                const colorClasses = getColorClasses(
                  plan.color as Colors,
                  plan.popular
                );
                return (
                  <div
                    key={index}
                    className={`relative group flex-shrink-0 w-72 ${
                      plan.popular ? 'scale-105' : ''
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 inset-x-0 z-50">
                        <div className="mx-6">
                          <div className="rounded-xl bg-primary-800 text-white px-4 py-1.5 text-xs font-semibold text-center border border-slate-700 shadow-lg">
                            РЕКОМЕНДУЕМ
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className={`rounded-xl relative h-full bg-white border border-slate-200 transition-all duration-300 ${
                        colorClasses.hover
                      } ${colorClasses.accent} -4 ${
                        plan.popular
                          ? 'shadow-lg border-slate-300'
                          : 'hover:border-slate-300'
                      }`}
                    >
                      <div className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex flex-col items-start mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`${colorClasses.icon}`}>
                              {plan.icon}
                            </div>
                            <h3 className="text-base font-bold text-slate-800">
                              {plan.name}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-2xl font-bold text-slate-900">
                              {plan.price}
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                              {plan.currency}
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2.5 mb-6 flex-grow">
                          {plan.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <div className="flex-shrink-0 w-4 h-4 border border-slate-300 flex items-center justify-center mr-3 mt-0.5">
                                <Check className="w-2.5 h-2.5 text-slate-600" />
                              </div>
                              <span className="text-slate-700 text-sm leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Button */}
                        <button
                          className={`rounded-lg w-full flex items-center justify-center px-4 py-2.5 font-semibold transition-all duration-200 text-sm ${
                            plan.popular
                              ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                          }`}
                        >
                          <span>Выбрать план</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:contents">
            {plans.map((plan, index) => {
              const colorClasses = getColorClasses(
                plan.color as Colors,
                plan.popular
              );
              return (
                <div
                  key={index}
                  className={`relative group ${
                    plan.popular ? 'scale-105' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 inset-x-0 z-10">
                      <div className="mx-6">
                        <div className="rounded-xl bg-primary-800 text-white px-4 py-1.5 text-xs font-semibold text-center border border-slate-700 shadow-lg">
                          РЕКОМЕНДУЕМ
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    className={`rounded-xl relative h-full bg-white border border-slate-200 transition-all duration-300 ${
                      colorClasses.hover
                    } ${colorClasses.accent} -4 ${
                      plan.popular
                        ? 'shadow-lg border-slate-300'
                        : 'hover:border-slate-300'
                    }`}
                  >
                    <div className="p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex flex-col items-start mb-8">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`${colorClasses.icon}`}>
                            {plan.icon}
                          </div>
                          <h3 className="text-base font-bold text-slate-800">
                            {plan.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-3xl font-bold text-slate-900">
                            {plan.price}
                          </div>
                          <div className="text-base text-slate-500 font-medium">
                            {plan.currency}
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 border border-slate-300 flex items-center justify-center mr-3 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-slate-600" />
                            </div>
                            <span className="text-slate-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Button */}
                      <button
                        className={`rounded-lg w-full flex items-center justify-center px-6 py-3 font-semibold transition-all duration-200 ${
                          plan.popular
                            ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                            : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                        }`}
                      >
                        <span>Выбрать план</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="md:mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"></div>
              <div className="relative p-8 sm:p-12 text-center">
                <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
                  Не нашли подходящий план?
                </h3>
                <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-lg max-w-md sm:max-w-2xl mx-auto leading-relaxed">
                  Разработаем уникальную систему с учетом специфики вашего
                  бизнеса и отраслевых требований
                </p>
                <button className="rounded-md sm:rounded-lg inline-flex items-center px-5 py-3 sm:px-8 sm:py-4 bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all duration-200 group text-sm sm:text-base">
                  Обсудить проект
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
