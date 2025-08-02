import React, { useEffect, useRef } from 'react';

type Props = {
  spheresList: string[];
  selectedSphere: string | null;
  setSelectedSphere: (sphere: string) => void;
};

export default function SphereButtons({
  spheresList,
  selectedSphere,
  setSelectedSphere,
}: Props) {
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    if (selectedSphere && buttonRefs.current[selectedSphere]) {
      buttonRefs.current[selectedSphere]?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedSphere]);

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar justify-start max-w-max mx-auto">
      {spheresList.map((sphere) => (
        <button
          key={sphere}
          ref={(el) => {
            buttonRefs.current[sphere] = el;
          }}
          onClick={() => setSelectedSphere(sphere)}
          className={`
            min-w-max px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ease-in-out
            border border-gray-600 hover:border-gray-400 text-nowrap
            ${
              selectedSphere === sphere
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-white hover:bg-gray-800'
            }
          `}
        >
          {sphere}
        </button>
      ))}
    </div>
  );
}
