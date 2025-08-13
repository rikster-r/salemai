import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogPanel,
  Transition,
  TransitionChild,
  DialogBackdrop,
} from '@headlessui/react';
import { X, Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string | null;
  setSelectedPlan: (plan: string | null) => void;
};

const ContactModal = ({
  isOpen,
  onClose,
  selectedPlan,
  setSelectedPlan,
}: Props) => {
  const planOptions = [
    { value: '', label: 'Выберите тариф (необязательно)' },
    { value: 'Старт', label: 'Старт' },
    { value: 'Бизнес', label: 'Бизнес' },
    { value: 'Профессионал', label: 'Профессионал' },
    { value: 'Премиум', label: 'Премиум' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // Sync the plan from props to local state when the modal opens or selectedPlan changes
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        plan: selectedPlan || '',
      }));
    }
  }, [isOpen, selectedPlan]);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If the plan is changed via the form, update the parent component's state
    if (name === 'plan') {
      setSelectedPlan(value || null); // Convert empty string back to null for the parent
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_20cfq2p';
    const templateID =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_g72hxig';
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'URE748ovGSb-9VZ37';

    if (!serviceID || !templateID || !publicKey) {
      console.error('EmailJS environment variables are not set');
      toast.error('Ошибка конфигурации. Пожалуйста, попробуйте позже.');
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    // Check for required fields
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Пожалуйста, заполните все обязательные поля');
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    try {
      // Prepare the template parameters for EmailJS
      const templateParams = {
        ...formData,
        email: '', // Add empty email field for EmailJS template compatibility
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(
        'Не удалось отправить сообщение. Пожалуйста, попробуйте снова.'
      );
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', plan: '', message: '' });
    setSubmitStatus(null);
    setSelectedPlan(null);
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset slightly to allow closing animation to finish
      const timer = setTimeout(() => {
        resetForm();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, resetForm]);

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-200" onClose={onClose}>
        <TransitionChild
          as={React.Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <TransitionChild
              as={React.Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-5xl max-h-screen overflow-y-auto bg-white rounded-xl shadow-2xl">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
                  {/* Contact Information Side */}
                  <div className="hidden md:block bg-gradient-to-br from-slate-50 to-slate-100 p-8 lg:p-12">
                    <div className="space-y-8">
                      <div>
                        <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                          Свяжитесь с нами
                        </DialogTitle>
                        <p className="text-slate-600">
                          Мы готовы помочь вам с любыми вопросами
                        </p>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue-600">
                            <Phone className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">
                              Телефон
                            </h4>
                            <p className="text-slate-600">+7 (777) 123-45-67</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-emerald-600">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">
                              Email
                            </h4>
                            <p className="text-slate-600">
                              salemai.astana@gmail.com
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-purple-600">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">
                              Адрес
                            </h4>
                            <p className="text-slate-600">
                              г. Астана, ул. Мәңгілік Ел 62/4
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-6">
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <p className="text-sm text-slate-600">
                            Работаем с понедельника по пятницу с 10:00 до 20:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Form Side */}
                  <div className="p-8 lg:p-12">
                    {submitStatus === 'success' ? (
                      <div className="h-full flex flex-col justify-center items-center py-12">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check className="w-8 h-8 text-emerald-600" />
                        </div>
                        <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                          Спасибо за заявку!
                        </DialogTitle>
                        <p className="text-slate-600 mb-6">
                          Наш менеджер свяжется с вами в течение 24 часов
                        </p>
                        <button
                          onClick={resetForm}
                          className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                        >
                          Отправить еще сообщение
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                            Оставьте заявку
                          </DialogTitle>
                          <p className="text-slate-600">
                            Заполните форму, и мы свяжемся с вами
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              Имя *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              Телефон *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                        {/* Plan Selection Dropdown - now reflects and updates the prop */}
                        <div>
                          <label
                            htmlFor="plan"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Выбранный тариф
                          </label>
                          <select
                            id="plan"
                            name="plan"
                            value={formData.plan} // Controlled by local state which syncs with prop
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                          >
                            {planOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Сообщение
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Расскажите о вашем проекте..."
                          ></textarea>
                        </div>
                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Отправка...</span>
                              </>
                            ) : (
                              <>
                                <span>Отправить заявку</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                          <p className="text-xs text-slate-500 text-center mt-4">
                            Нажимая на кнопку, вы соглашаетесь с политикой
                            конфиденциальности
                          </p>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
