import React from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import LogoFull from '../assets/images/LogoFull.svg';
import MobileSidebar from './MobileSidebar';

type Props = {
  openContactModal: (plan?: string) => void;
};

const Header = ({ openContactModal }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        openContactModal={openContactModal}
      />

      <header className="bg-white shadow-sm py-3 px-5 sm:py-4 sm:px-6 w-[95%] sm:w-full sm:max-w-xl border border-gray-300 rounded-3xl fixed top-6 left-1/2 -translate-x-1/2 z-100">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mr-16 w-[100px] h-[40px] relative">
            <Image src={LogoFull} alt="Logo" fill priority />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
            >
              Услуги
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
            >
              Цены
            </a>
            <button
              onClick={() => openContactModal()}
              className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
            >
              Связаться
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="sm:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
