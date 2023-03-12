import { useState } from 'react';
import React from 'react';
import './Tour.css'

function Tour(props) {
    const { tour } = props;
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className='card'>
            <h2 className='title'>{tour.name}</h2>
            <img src={tour.image} alt={tour.city} className='image' />
            <p className='info'>
                {showInfo ? tour.info : `${tour.info.substring(0, 100)}...`}
                <button onClick={() => setShowInfo(!showInfo)} className="see-more">{showInfo ? 'See less' : 'See more'}</button>
            </p>
        </div>
    );
}

export default Tour;
