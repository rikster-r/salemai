import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 border border-gray-300 rounded-3xl sticky top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="max-w-7xl flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center mr-16">
          <span className="text-2xl font-bold text-gray-800">SalemAI</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Услуги
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Цены
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
