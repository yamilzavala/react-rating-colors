import React, {useState} from 'react'
import Star from '../star/star.component';
import './star-rating.styless.css';

const createArray = length => [...Array(length)]

// export default function StarRating({style={}, totalStars = 5, ...props}) {
export default function StarRating({totalStars = 5, selectedStar = 0, onRate = f => f}) {
    // const [selectedStar, setSelectedStar] = useState(0);
    return (
        // <div className="container" style={{padding: '5px', ...style}} {...props}>
        //    {createArray(totalStars).map((star, index) => (
        //         <Star key={index} selected={selectedStar > index} onSelect={() => setSelectedStar(index + 1) }/>
        //     ))}
        //     <p>Selected stars {selectedStar} of {totalStars}</p>
        // </div>

        <div>
            {createArray(totalStars).map((star, index) => (
                <Star key={index} selected={selectedStar > index} onSelect={() => onRate(index + 1)}/>
            ))}
             <p>Selected stars {selectedStar} of {totalStars}</p>
        </div>
    )
}