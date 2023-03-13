import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './TourDetails.css'
import toursData from '../../data/db.json';

function TourDetails() {
    const { id } = useParams();

    const city = toursData.filter((item) => item.id === id);

    let card = city[0];

    const [seeMore, setSeeMore] = useState(false);
    
    const clickSeeMore = () => {
        setSeeMore(!seeMore);
    }



    return (
        <div className='card'>
            <h2 className='title'>{card.name}</h2>
            <img src={card.image} alt={card.info} className='image' />
            {seeMore ? card.info : `${card.info.substring(0, 100)}...`}
            <Button onClick={clickSeeMore}>
                {seeMore ? "See less" : "See more"}
            </Button>
            <p>{card.price} $</p>
        </div>
    )
}
export default TourDetails;