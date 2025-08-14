import React from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { X } from 'lucide-react';
import Image from 'next/image';
import LogoFull from '../assets/images/LogoFull.svg';

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  openContactModal: (plan?: string) => void;
};

const MobileSidebar = ({
  isOpen,
  onClose,
  openContactModal,
}: MobileSidebarProps) => {
  return (
    <Transition show={isOpen}>
      <Dialog onClose={onClose} className="relative z-110">
        {/* Backdrop */}
        <TransitionChild
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/75" />
        </TransitionChild>

        {/* Sidebar */}
        <div className="fixed inset-0 flex">
          <TransitionChild
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="relative w-full max-w-xs bg-white shadow-xl flex flex-col border-r border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <div className="w-[100px] h-[40px] relative">
                  <Image src={LogoFull} alt="Logo" fill priority />
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-5 py-6">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#services"
                      onClick={onClose}
                      className="block text-lg font-semibold text-gray-700 hover:text-primary-600 hover:translate-x-1 transition-transform"
                    >
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      onClick={onClose}
                      className="block text-lg font-semibold text-gray-700 hover:text-primary-600 hover:translate-x-1 transition-transform"
                    >
                      Цены
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        openContactModal();
                        onClose();
                      }}
                      className="w-full text-left text-lg font-semibold text-gray-700 hover:text-primary-600 hover:translate-x-1 transition-transform"
                    >
                      Связаться
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Footer / CTA */}
              <div className="border-t border-gray-200 p-5">
                <button
                  onClick={() => {
                    openContactModal('premium');
                    onClose();
                  }}
                  className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  Получить консультацию
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileSidebar;
