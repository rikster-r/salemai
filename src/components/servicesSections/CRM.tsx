import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Users, MessageSquareMore, Phone, Trophy } from 'lucide-react';

type Stage = {
  id: string;
  name: string;
  count: number;
  color: string;
  icon: React.ElementType;
};

const initialStages: Stage[] = [
  { id: '1', name: 'Лиды', count: 24, color: 'bg-blue-500', icon: Users },
  {
    id: '2',
    name: 'Консульт.',
    count: 19,
    color: 'bg-green-500',
    icon: MessageSquareMore,
  },
  {
    id: '3',
    name: 'Звонок',
    count: 14,
    color: 'bg-yellow-500',
    icon: Phone,
  },
  {
    id: '4',
    name: 'Закрыто',
    count: 9,
    color: 'bg-red-500',
    icon: Trophy,
  },
];

function SortableStage({ stage }: { stage: Stage }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: stage.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  const IconComponent = stage.icon;

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className="touch-none flex flex-row justify-between items-center md:flex-col md:justify-start md:items-start bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div>
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${stage.color}`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-800 mb-1">{stage.name}</h4>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{stage.count}</p>
        <p className="text-sm text-gray-500">контактов</p>
      </div>
    </div>
  );
}

function StageItem({ stage }: { stage: Stage }) {
  const IconComponent = stage.icon;

  return (
    <div className="touch-none flex flex-row justify-between items-center md:flex-col md:justify-start bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div>
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${stage.color}`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-800 mb-1">{stage.name}</h4>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{stage.count}</p>
        <p className="text-sm text-gray-500">контактов</p>
      </div>
    </div>
  );
}

export default function CRM() {
  const [stages, setStages] = useState(initialStages);
  const [activeId, setActiveId] = useState<UniqueIdentifier>();

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over?.id) {
      setStages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(undefined);
  }

  const activeStage = stages.find((stage) => stage.id === activeId) as Stage;

  return (
    <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-16 max-w-6xl mx-auto mt-16">
      {/* Right Side - CRM Information */}
      <div className="flex-1 space-y-6 md:space-y-8 md:mt-10">
        <h3 className="text-2xl md:text-4xl font-bold text-slate-800">
          CRM-Система
        </h3>
        <div className="space-y-3 md:space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Настраиваемая воронка продаж с перетаскиванием этапов
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Автоматизация процессов работы с клиентами
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Аналитика конверсий и эффективности продаж
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Интеграция с внешними сервисами и API
            </p>
          </div>
        </div>
      </div>

      {/* Left Side - Sales Funnel */}
      <div className="flex-1  w-full">
        <div className="rounded-2xl md:p-6 h-full">
          <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={stages}
              strategy={verticalListSortingStrategy}
            >
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] w-full justify-between h-full">
                {stages.map((stage) => (
                  <SortableStage key={stage.id} stage={stage} />
                ))}
              </div>
            </SortableContext>
            <DragOverlay>
              {activeId ? <StageItem stage={activeStage} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
