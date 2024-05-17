"use client"
import { useState } from 'react';
import { initialTravelPlan } from '../lib/places';

// 定义 Place 类型
interface Place {
  id: number;
  title: string;
  childIds: number[];
}

// 定义 PlaceTree 组件的 props 类型
interface PlaceTreeProps {
  id: number;
  placesById: { [key: number]: Place };
}

function PlaceTree({ id, placesById }: PlaceTreeProps) {
  const place = placesById[id];

  return (
    <li>
      {place.title}
      <ol>
        {place.childIds.length > 0 && place.childIds.map(childId => (
          <PlaceTree
            key={childId}
            id={childId}
            placesById={placesById}
          />
        ))}
      </ol>
    </li>
  );
}

// 定义 TravelPlan 组件的状态类型
interface TravelPlanState {
  [key: number]: Place;
}

export default function TravelPlan() {
  const [plan, setPlan] = useState<TravelPlanState>(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            placesById={plan}
          />
        ))}
      </ol>
    </>
  );
}
