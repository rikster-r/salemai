import Bots from '../servicesSections/Bots';
import CRM from '../servicesSections/CRM';
import Telephone from '../servicesSections/Telephone';
import ServiceCard from '../servicesSections/ServiceCard';
import {
  BarChart3,
  Shield,
  Cloud,
  Smartphone,
  Globe,
  Zap,
  CreditCard,
  Mail,
  Target,
  Wrench,
  TrendingUp,
  Palette,
} from 'lucide-react';
export default function Services() {
  return (
    <section
      className="relative bg-gradient-to-b from-slate-50 to-white py-20 min-h-[1300px]"
      id="services"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Что мы предлагаем?
          </h2>
        </div>
        {/* Main Content */}
        <Bots />
        <CRM />
        <Telephone />

        {/* Additional Services Grid */}
        <div className="mt-16 md:mt-36">
          <div className="text-center mb-8 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">
              ... и многое другое
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            <ServiceCard
              icon={<Zap className="w-6 h-6 text-white" />}
              title="Автоматизация задач"
              description="Сценарии, которые делают рутину за вас"
              gradient="from-yellow-500 to-yellow-600"
            />
            <ServiceCard
              icon={<Cloud className="w-6 h-6 text-white" />}
              title="Документооборот"
              description="Подписание и хранение без бумаг"
              gradient="from-purple-500 to-purple-600"
            />
            <ServiceCard
              icon={<Wrench className="w-6 h-6 text-white" />}
              title="Интеграции систем"
              description="Связь между CRM, 1С, мессенджерами"
              gradient="from-cyan-500 to-cyan-600"
            />
            <ServiceCard
              icon={<Shield className="w-6 h-6 text-white" />}
              title="Контроль доступа"
              description="Безопасность и управление правами"
              gradient="from-green-500 to-green-600"
            />
            <ServiceCard
              icon={<CreditCard className="w-6 h-6 text-white" />}
              title="Автосчета и оплаты"
              description="Выставление и оплата без участия"
              gradient="from-indigo-500 to-indigo-600"
            />
            <ServiceCard
              icon={<Target className="w-6 h-6 text-white" />}
              title="Автоворонки продаж"
              description="Лиды обрабатываются сами"
              gradient="from-teal-500 to-teal-600"
            />
            <ServiceCard
              icon={<Mail className="w-6 h-6 text-white" />}
              title="Email-рассылки"
              description="Триггерные письма клиентам"
              gradient="from-pink-500 to-pink-600"
            />
            <ServiceCard
              icon={<BarChart3 className="w-6 h-6 text-white" />}
              title="Бизнес-аналитика"
              description="Автоотчёты и метрики по отделам"
              gradient="from-blue-500 to-blue-600"
            />
            <ServiceCard
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              title="Продвижение"
              description="SEO и реклама на автопилоте"
              gradient="from-lime-500 to-lime-600"
            />
            <ServiceCard
              icon={<Smartphone className="w-6 h-6 text-white" />}
              title="Мобильные процессы"
              description="Управление бизнесом с телефона"
              gradient="from-orange-500 to-orange-600"
            />
            <ServiceCard
              icon={<Globe className="w-6 h-6 text-white" />}
              title="Онлайн-заявки"
              description="Автоприём и обработка заявок"
              gradient="from-red-500 to-red-600"
            />
            <ServiceCard
              icon={<Palette className="w-6 h-6 text-white" />}
              title="База знаний"
              description="Цифровая поддержка для команды"
              gradient="from-fuchsia-500 to-fuchsia-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
