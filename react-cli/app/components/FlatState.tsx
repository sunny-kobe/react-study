"use client"
import { Key, useState } from 'react';
import { initialTravelPlan } from '../lib/places';

function PlaceTree({id, placesById}) {
  const place = placesById[id];
  
  return (
    <li>
      {place.title}
      <ol>
        {place.childIds.length > 0 && place.childIds.map(childId => { 
          return (
            <PlaceTree
              key={childId}
              id={childId}
              placesById={placesById}
            />
          )
        })}
      </ol>
    </li>
  )
}
export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => {
          return (
            <PlaceTree
              key={id}
              id={id}
              placesById={plan}
            />
          )
        })}
      </ol>
    </>
  );
}
