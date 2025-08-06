export default function ServiceCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="rounded-xl relative h-full bg-white border border-slate-200  transition-all duration-300 p-4 sm:p-6 hover:border-slate-300">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl mb-4 flex items-center justify-center transition-transform duration-300`}
      >
        {icon}
      </div>
      <h4 className="overflow-hidden text-ellipsis font-semibold text-slate-800 mb-2 text-sm md:text-base">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
