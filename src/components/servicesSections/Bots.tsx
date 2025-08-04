import Image from 'next/image';
import PhoneMockup from '../../assets/images/phoneMockup.png';
import { SendHorizontal } from 'lucide-react';

export default function Bots() {
  return (
    <div className="flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-16 max-w-6xl mx-auto md:min-h-[850px]">
      {/* Left Side - Bot Information */}
      <div className="flex-1 space-y-6 md:space-y-8 md:mt-10">
        <h3 className="text-2xl md:text-4xl font-bold text-slate-800">
          Чат-Боты
        </h3>

        <div className="space-y-3 md:space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Автоматизация бизнес-процессов через умных чат-ботов
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Круглосуточная поддержка клиентов без участия человека
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Интеграция со складами и CRM-системами
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Персонализированные рекомендации и предложения для клиентов
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Phone Mockup with Chat */}
      <div className="flex-1 flex justify-center">
        {/* CONTAINER that holds both image and overlay */}
        <div className="relative w-full max-w-[400px]">
          
          {/* 1. The frame image – responsive to container width */}
          <Image
            src={PhoneMockup}
            alt="Phone"
            className="block w-full h-auto select-none"
            width={400} // intrinsic width
            height={800} // intrinsic height matching your png
          />

          {/* 2. Chat overlay: fits exactly over display area */}
          <div className="absolute inset-0 p-[calc(0.12*98%)] flex flex-col justify-between pointer-events-none mt-6">            
            {/* Chat Messages Container: scrollable */}
            <div className="flex-1 overflow-y-auto space-y-3">
              <div className="bg-gray-300 p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                <p className="text-base">Здравствуйте! Чем могу помочь?</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 p-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                  <p className="text-base text-white">Хочу узнать о ваших услуги</p>
                </div>
              </div>
              <div className="bg-gray-300 p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                <p className="text-base">
                  Конечно! Мы предлагаем широкий спектр услуг для автоматизации всех бизнес-процессов
                </p>
              </div>
              {/* More messages as needed... */}
            </div>

            {/* Input Field */}
            <div className="pt-2">
              <div className="w-full bg-white rounded-full p-2 flex items-center border border-gray-300 pointer-events-auto">
                <input
                  type="text"
                  placeholder="Сообщение..."
                  className="flex-grow bg-transparent outline-none text-base px-2 max-w-[87%]"
                />
                <button className="text-blue-500 px-2">
                  <SendHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
