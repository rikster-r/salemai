import React from 'react';
import {
  Users,
  CheckCircle,
  Bot,
  ShoppingCart,
  AlignEndHorizontal,
  Phone,
  Package,
} from 'lucide-react';
import Image from 'next/image';
import HeroSmall from '../../assets/images/HeroSmall.png';

export default function HRPlatformHero() {
  return (
    <section className="max-h-[800px] bg-gray-50 relative overflow-hidden pt-35 pb-16 md:pt-40">
      {/* Centered Container for Floating Elements */}
      <div className="absolute inset-x-0 items-center justify-center z-50 hidden lg:flex ">
        <div className="relative w-full max-w-4xl h-96">
          {/* Floating Elements - positioned relative to centered container */}
          {/* Top Left */}
          <div className="absolute z-10 -top-4 left-6 md:left-16 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-purple-500  rounded-2xl overflow-hidden shadow-lg">
            <AlignEndHorizontal className="w-5 h-5 text-white" />
          </div>
          {/* Center Left */}
          <div className="absolute z-10 top-10 left-10 md:left-34 w-12 h-12 md:w-16 md:h-16 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <Bot className="w-6 h-6 text-white" />
          </div>
          {/* Bottom Left Side */}
          <div className="absolute z-10 top-28 left-6 md:left-14 w-10 h-10 md:w-14 md:h-14 bg-cyan-400 rounded-xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <Package className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          {/* Center */}
          <div className="absolute z-10 top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-primary-500 rounded-2xl flex items-center justify-center shadow-xl">
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          {/* Top Right */}
          <div className="absolute z-10 -top-4 md:top-0 right-12 md:right-24 w-11 h-11 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          {/* Center Right Side */}
          <div className="absolute z-10 top-10 right-4 w-13 h-13 md:w-16 md:h-16 bg-gray-100 rounded-xl flex items-center justify-center shadow-lg border-2 border-gray-200">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </div>
          {/* Bottom Right Side */}
          <div className="absolute z-10 top-28 right-10 sm:right-16 md:right-24 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-orange-400 rounded-xl overflow-hidden shadow-lg">
            <Phone className="w-5 h-5 text-white" />
          </div>

          {/* SVG Lines for Connections */}
          <>
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-gray-300">
              {/* Analytics */}
              <line x1="100" y1="1" x2="270" y2="1" strokeWidth="1" />
              <line x1="270" y1="1" x2="340" y2="70" strokeWidth="1" />
              {/* Bot */}
              <line x1="140" y1="70" x2="450" y2="70" strokeWidth="1" />
              {/* Box */}
              <line x1="100" y1="140" x2="200" y2="140" strokeWidth="1" />
              <line x1="200" y1="140" x2="270" y2="70" strokeWidth="1" />

              {/* Cart */}
              <line x1="700" y1="30" x2="770" y2="30" strokeWidth="1" />
              <line x1="650" y1="70" x2="700" y2="30" strokeWidth="1" />
              {/* Users */}
              <line x1="450" y1="70" x2="850" y2="70" strokeWidth="1" />
              {/* Phone */}
              <line x1="650" y1="135" x2="800" y2="135" strokeWidth="1" />
              <line x1="580" y1="70" x2="650" y2="135" strokeWidth="1" />
            </svg>
          </>

          {/* Small screens */}
          {/* <>
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-gray-300">
              <line x1="50" y1="1" x2="100" y2="1" strokeWidth="1" />
              <line x1="100" y1="1" x2="125" y2="70" strokeWidth="1" />

              <line x1="80" y1="70" x2="180" y2="70" strokeWidth="1" />

              <line x1="50" y1="140" x2="100" y2="140" strokeWidth="1" />
              <line x1="100" y1="140" x2="140" y2="70" strokeWidth="1" />

              <line x1="250" y1="10" x2="300" y2="10" strokeWidth="1" />
              <line x1="220" y1="70" x2="250" y2="10" strokeWidth="1" />

              <line x1="180" y1="70" x2="300" y2="70" strokeWidth="1" />

              <line x1="260" y1="135" x2="300" y2="135" strokeWidth="1" />
              <line x1="210" y1="70" x2="260" y2="135" strokeWidth="1" />
            </svg>
          </> */}
        </div>
      </div>

      {/* Image instead of Elements for phone screens */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-start lg:hidden pt-30">
        <Image src={HeroSmall} alt="" width={500} height={300} priority />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-2xl mx-auto mt-55 sm:mt-65 lg:mt-50 relative z-50">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight mx-0">
          Ускорьте свой
          <br />
          бизнес
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8 w-[95%] max-w-lg mx-auto leading-relaxed ">
          Автоматизируйте процессы в продажах, маркетинге, HR и других сферах с
          помощью SalemAI.
        </p>
        <button className="bg-primary-400 hover:bg-primary-500 text-white font-semibold px-8 py-4 rounded-2xl duration-200 shadow-lg transition-all">
          Оставить заявку
        </button>
      </div>

      {/* Background subtle patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-full h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-full h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}
