import React from 'react';
import Tour from './Tour/Tour';
import toursData from '../../data/db.json';

function Tours() {
  return (
    <div className='cards'>
      {toursData.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
    
  );
}
export default Tours;