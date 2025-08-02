import React, { useEffect } from 'react';
import SphereSelect from './SphereSelect';
import { ArrowLeft } from 'lucide-react';

type Props = {
  spheresList: string[];
  selectedSphere: string | null;
  setSelectedSphere: React.Dispatch<React.SetStateAction<string | null>>;
};

const sphereDescriptions: Record<
  string,
  {
    title: string;
    description: string;
    advantages: string[];
    scenario?: string;
  }
> = {
  Продажи: {
    title: 'Продажи',
    description:
      'Автоматизация от лида до закрытия сделки с отслеживанием этапов.',
    advantages: [
      'Автораспределение заявок',
      'Контроль этапов сделок',
      'Единая CRM система',
    ],
    scenario:
      'Заявка с сайта → автосоздание сделки → назначение менеджера → уведомления → отслеживание в CRM.',
  },
  Маркетинг: {
    title: 'Маркетинг',
    description:
      'Email-рассылки, управление соцсетями и аналитика в одной системе.',
    advantages: [
      'Автоматические email-кампании',
      'Постинг в соцсети',
      'A/B тестирование',
    ],
    scenario:
      'Запуск рассылки → отслеживание открытий → A/B тест заголовков → автопостинг в соцсети.',
  },
  'Поддержка клиентов': {
    title: 'Поддержка клиентов',
    description: 'AI-боты и шаблоны ответов для быстрого решения вопросов.',
    advantages: ['Чат-боты 24/7', 'Шаблоны FAQ', 'Контроль качества'],
    scenario:
      'Вопрос клиента → бот определяет тему → предлагает решение → сохраняет историю.',
  },
  'Операции / Логистика': {
    title: 'Операции / Логистика',
    description:
      'Автоматизация заказов, учёта товаров и отслеживания доставки.',
    advantages: [
      'Контроль остатков',
      'Автогенерация закупок',
      'Отслеживание заказов',
    ],
    scenario:
      'Остаток ниже порога → автозаявка поставщику → отслеживание доставки → уведомления.',
  },
  Финансы: {
    title: 'Финансы',
    description: 'Учёт расходов, зарплат и налогов с автогенерацией отчётов.',
    advantages: [
      'Учёт трат и поступлений',
      'Расчёт зарплат',
      'Налоговые отчёты',
    ],
    scenario:
      'Формирование отчёта за квартал → анализ отклонений → подготовка налоговых документов.',
  },
  'Аналитика и отчеты': {
    title: 'Аналитика и отчеты',
    description: 'Дашборды с KPI по всем отделам и автоматические отчёты.',
    advantages: ['Актуальные дашборды', 'Индивидуальные KPI', 'Автоотчёты'],
    scenario:
      'Открытие дашборда → просмотр показателей → выявление проблем → быстрое реагирование.',
  },
};

export default function SpheresDescriptions({
  spheresList,
  selectedSphere,
  setSelectedSphere,
}: Props) {
  useEffect(() => {
    if (window.innerWidth < 1024 && !selectedSphere) {
      setSelectedSphere(spheresList[0]);
    }
  }, [spheresList, setSelectedSphere, selectedSphere]);

  const data = selectedSphere ? sphereDescriptions[selectedSphere] : null;

  return (
    <div className="space-y-4 flex flex-col lg:grid max-w-max mx-auto gap-y-2 gap-x-8">
      <div className="lg:col-start-2 lg:row-start-1">
        <SphereSelect
          spheresList={spheresList}
          selectedSphere={selectedSphere}
          setSelectedSphere={setSelectedSphere}
        />
      </div>

      {data && (
        <>
          <div className="w-max justify-start hidden lg:flex items-center lg:col-start-1 lg:row-start-1">
            <button
              className="text-white flex items-center text-sm"
              onClick={() => setSelectedSphere(null)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back</span>
            </button>
          </div>
          <div className="flex flex-col gap-8 lg:col-start-1">
            <div className="w-full bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-200 max-w-xl lg:max-w-lg mr-16 mx-auto lg:mx-0">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2">
                  {data.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {data.description}
                </p>
              </div>
              {/* Advantages */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide mb-3">
                  Преимущества
                </h3>
                <div className="grid gap-2">
                  {data.advantages.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Scenario */}
              {data.scenario && (
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="text-sm font-semibold text-blue-300 mb-2">
                    Как это работает
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {data.scenario}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-start-2"></div>
        </>
      )}
    </div>
  );
}
