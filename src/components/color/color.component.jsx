import React from 'react';
import StarRating from '../../components/star-rating/star-rating.component'
import {FaTrash} from 'react-icons/fa'
 
const Color = ({id, title, color, rating, onRemove = f => f, onRateEvt = f => f}) => {
 return(
     <section>
        <h2>{title}</h2>
        <button onClick={() => onRemove(id)}>
            <FaTrash/>
        </button>
        <div style={{height: '50px', backgroundColor: color}}></div>
        <StarRating selectedStar={rating} onRate={ratingEvt => onRateEvt(id, ratingEvt)}/>
     </section>
 )
}

export default Color;