import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

export interface DndItem<T> {
  id: string;
  data: T;
}

interface DragAndDropProps<T> {
  items: DndItem<T>[];
  onReorder: (newItems: DndItem<T>[]) => void;
  renderItem: (item: T) => React.ReactNode;
}

export function DragAndDrop<T>({
  items,
  onReorder,
  renderItem,
}: DragAndDropProps<T>) {
  const [internalItems, setInternalItems] = useState<DndItem<T>[]>(items);

  useEffect(() => {
    setInternalItems(items);
  }, [items]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = internalItems.findIndex(i => i.id === active.id);
      const newIndex = internalItems.findIndex(i => i.id === over.id);
      const newOrder = arrayMove(internalItems, oldIndex, newIndex);
      setInternalItems(newOrder);
      onReorder(newOrder);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={internalItems.map(i => i.id)}
        strategy={verticalListSortingStrategy}
      >
        {internalItems.map(item => (
          <SortableItem
            key={item.id}
            id={item.id}
            renderItem={() => renderItem(item.data)}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}

interface SortableItemProps {
  id: string;
  renderItem: () => React.ReactNode;
}

function SortableItem({ id, renderItem }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className=" rounded flex items-center"
    >
      <GripVertical
        {...attributes}
        {...listeners}
        className="ml-8 cursor-grab text-[#181f2c] text-opacity-25 hover:text-gray-900 outline-none"
      />
      <div className="flex-1">
        {renderItem()}
      </div>
    </div>
  );
}
