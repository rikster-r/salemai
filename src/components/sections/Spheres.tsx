import React, { useState } from 'react';
import BusinessSpheresDashboard from '../BusinessSpheresDashboard';
import SpheresDescriptions from '../SpheresDescriptions';

const spheresList = [
  'Продажи',
  'Маркетинг',
  'Поддержка клиентов',
  'Операции / Логистика',
  'Финансы',
  'Аналитика и отчеты',
];

const Spheres = () => {
  const [selectedSphere, setSelectedSphere] = useState<string | null>(null);

  return (
    <section className={`${selectedSphere ? "h-[800px]" : "h-[900px]"} bg-[radial-gradient(circle_at_center,_#0a1a3a_0%,_#000000_60%)] p-8 py-16 md:py-24 relative overflow-hidden`}>
      {/* Header */}
      <div className="text-center mb-6 lg:mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Автоматизация каждой сферы
        </h2>
      </div>

      {/* Dashboard panels container */}
      <BusinessSpheresDashboard
        selectedSphere={selectedSphere}
        setSelectedSphere={setSelectedSphere}
      />
      <SpheresDescriptions
        spheresList={spheresList}
        selectedSphere={selectedSphere}
        setSelectedSphere={setSelectedSphere}
      />
    </section>
  );
};

export default Spheres;
