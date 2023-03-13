import React from 'react';
import './Tour.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function Tour(props) {

    const { tour } = props;

    
    return (
        <div className='card'>
            <h2 className='title'>{props.tour.name}</h2>
            <img src={props.tour.image} alt={tour.city} className='image' />
            <Link to={`/city/${props.tour.id}`}>  {/* the "id" was taken from the dataBase  */}
                <Button variant="primary">more information</Button>

            </Link>
        </div>
    );
}

export default Tour;
