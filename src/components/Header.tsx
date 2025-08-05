import React from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import LogoFull from '../assets/images/LogoFull.svg';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-3 px-5 sm:py-4 sm:px-6 w-[95%] sm:w-full sm:max-w-xl border border-gray-300 rounded-3xl fixed top-6 left-1/2 -translate-x-1/2 z-100 sm:mx-auto">
      <div className="sm:max-w-7xl flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center mr-16 w-[100px] h-[40px] relative">
          <Image src={LogoFull} alt="" fill={true} priority />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-8">
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-900 font-semibold hover:cursor-pointer"
          >
            Услуги
          </a>

          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 font-semibold hover:cursor-pointer"
          >
            Цены
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold hover:cursor-pointer"
          >
            Связаться
          </a>
        </nav>

        <button className="flex sm:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
