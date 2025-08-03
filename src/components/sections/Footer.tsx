import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SiTelegram, SiInstagram } from '@icons-pack/react-simple-icons';
import LogoFull from '../../assets/images/LogoFull.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-start-1 mb-4">
            <div className="flex items-center mr-16 w-[100px] h-[40px] relative mb-4">
              <Image
                src={LogoFull}
                alt=""
                fill={true}
                priority
                className="filter invert hue-rotate-180"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Инновационные решения для автоматизации бизнеса с использованием
              искусственного интеллекта.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <SiTelegram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <SiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-start-3">
            <h3 className="font-semibold text-gray-900 mb-4">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  О нас
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  Цены
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  Сертификаты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                г. Астана, Казахстан
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                +7 775 896 1014
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                salemai.astana@gmail.com
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Пн-Пт: 10:00 - 20:00
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2025 SalemAI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
