import Bots from '../servicesSections/Bots';
import CRM from '../servicesSections/CRM';
import Telephone from '../servicesSections/Telephone';

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 min-h-[1300px]">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Что мы предлагаем?
          </h2>
        </div>

        {/* Main Content */}
        <Bots />
        <CRM />
        <Telephone />
      </div>
    </section>
  );
}
