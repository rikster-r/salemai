import {
  ShoppingCart,
  Megaphone,
  Phone,
  Package,
  Calculator,
  BarChart3,
  TrendingUp,
  Bot,
  Mail,
  Calendar,
  FileText,
  Zap,
  CheckCircle,
  Star,
  Search,
  Target,
  MessageSquare,
  Truck,
} from 'lucide-react';
import { motion } from 'motion/react';

type Props = {
  selectedSphere: string | null;
  setSelectedSphere: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function BusinessSpheresDashboard({
  selectedSphere,
  setSelectedSphere,
}: Props) {
  return (
    <div
      className={`relative max-w-7xl mx-auto h-full  ${
        selectedSphere ? 'hidden' : 'hidden lg:block'
      }`}
    >
      {/* Sales */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setSelectedSphere('Продажи')}
        className="absolute left-0 top-8 w-80 bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">Продажи</span>
          </div>
          <TrendingUp className="w-4 h-4 text-green-400" />
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Star className="w-4 h-4 text-green-400" />
              <span className="text-white text-sm font-medium">
                Лиды и конверсии
              </span>
            </div>
            <p className="text-green-200 text-xs flex">
              Автоматизация воронок продаж
            </p>
          </div>

          <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-3">
            <div className="flex items-center space-x-2 mb-1">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm font-medium">CRM</span>
            </div>
            <p className="text-blue-200 text-xs flex">
              Управление клиентами и сделками
            </p>
          </div>

          <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-white text-sm font-medium">
                Целевые кампании
              </span>
            </div>
            <p className="text-purple-200 text-xs flex">
              Персонализированные предложения
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-violet-900 to-blue-900 rounded-xl p-3">
          <div className="text-white font-bold text-lg">+240%</div>
          <div className="text-green-100 text-sm">конверсия лидов</div>
        </div>
      </motion.button>

      {/* Marketing*/}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setSelectedSphere('Маркетинг')}
        className="absolute left-85 top-0 bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 w-72"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Megaphone className="w-6 h-6 text-orange-500" />
          <span className="text-white font-medium">Маркетинг</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 ">
          <div className="flex flex-col justify-center items-center bg-orange-600/20 border border-orange-500/30 rounded-lg p-3 text-center">
            <Mail className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className="text-white text-xs font-medium">Email кампании</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-pink-600/20 border border-pink-500/30 rounded-lg p-3 text-center">
            <Calendar className="w-6 h-6 text-pink-400 mx-auto mb-2" />
            <div className="text-white text-xs font-medium">Соцсети</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-cyan-600/20 border border-cyan-500/30 rounded-lg p-3 text-center">
            <Search className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-white text-xs font-medium">SEO отчеты</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-3 text-center">
            <BarChart3 className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-white text-xs font-medium">A/B тесты</div>
          </div>
        </div>
      </motion.button>

      {/* Customer Support*/}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setSelectedSphere('Поддержка клиентов')}
        className="absolute -right-6 top-4 bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 w-80"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-6 h-6 text-blue-500" />
            <span className="text-white font-medium">Поддержка клиентов</span>
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <Bot className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm">AI чат-боты</span>
            </div>
            <CheckCircle className="w-4 h-4 text-green-400" />
          </div>

          <div className="flex items-center justify-between bg-purple-600/20 border border-purple-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-white text-sm">FAQ ответы</span>
            </div>
            <CheckCircle className="w-4 h-4 text-green-400" />
          </div>

          <div className="flex items-center justify-between bg-cyan-600/20 border border-cyan-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-white text-sm">Контроль качества</span>
            </div>
            <CheckCircle className="w-4 h-4 text-green-400" />
          </div>
        </div>

        <div className="bg-blue-500 rounded-xl p-4 text-center">
          <div className="text-white font-bold text-lg">24/7</div>
          <div className="text-blue-100 text-sm">доступность поддержки</div>
        </div>
      </motion.button>

      {/* Operations/Logistics */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setSelectedSphere('Операции / Логистика')}
        className="absolute left-[50%] transform top-24 bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 w-80"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Package className="w-6 h-6 text-indigo-500" />
          <span className="text-white font-medium">Операции / Логистика</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex flex-col justify-center items-center bg-indigo-600/20 border border-indigo-500/30 rounded-lg p-3 text-center">
            <Zap className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
            <div className="text-white text-xs">Обработка заказов</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-green-600/20 border border-green-500/30 rounded-lg p-3 text-center">
            <Package className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <div className="text-white text-xs">Складской учет</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
            <Truck className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <div className="text-white text-xs">Трекинг доставки</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-purple-600/20 border border-purple-500/30 rounded-lg p-3 text-center">
            <FileText className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-white text-xs">Автозакупки</div>
          </div>
        </div>
      </motion.button>

      {/* Finance & Accounting */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setSelectedSphere('Финансы')}
        className="absolute right-12 top-110 bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 w-72"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="w-6 h-6 text-emerald-500" />
          <span className="text-white font-medium">Финансы</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">Расходы</span>
            <span className="text-blue-400 font-semibold">Трекинг</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">Зарплаты</span>
            <span className="text-purple-400 font-semibold">Процессинг</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">Налоги</span>
            <span className="text-yellow-400 font-semibold">Отчеты</span>
          </div>
        </div>
      </motion.button>

      {/* Analytics & Reporting */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setSelectedSphere('Аналитика и отчеты')}
        className="absolute left-50 top-110 bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 w-80"
      >
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-6 h-6 text-violet-500" />
          <span className="text-white font-medium">Аналитика и отчеты</span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-sm flex">Дашборды</p>
              <p className="text-gray-400 text-xs flex">В реальное времени</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-sm flex">KPI метрики</p>
              <p className="text-gray-400 text-xs flex">Живые показатели</p>
            </div>
          </div>
        </div>
      </motion.button>

      {/* Results Summary */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="absolute left-[40%] transform bottom-50 bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 w-96"
      >
        <div className="text-center mb-4">
          <span className="text-white font-medium text-lg">
            Общие результаты
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div>
            <div className="text-2xl font-bold text-green-400">+300%</div>
            <div className="text-gray-400 text-xs">эффективность</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">-75%</div>
            <div className="text-gray-400 text-xs">рутинных задач</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">24/7</div>
            <div className="text-gray-400 text-xs">работа систем</div>
          </div>
        </div>
      </motion.button>
    </div>
  );
}
