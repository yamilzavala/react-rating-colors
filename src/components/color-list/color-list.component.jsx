import React from 'react';
import Color from '../color/color.component'

const ColorList = ({colors = [], onRemoveColor = f => f, onRateEvtColor = f => f}) => {
    if(!colors.length) return <div>No colors!</div>

    return (
        <div>
            {colors.map((color) => <Color key={color.id} {...color} onRemove={onRemoveColor} onRateEvt={onRateEvtColor}/>)}
        </div>  
    )
}

export default ColorList;