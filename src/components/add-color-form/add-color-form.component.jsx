import React, {useRef, useState} from 'react';
import { useInput } from '../../hooks/use-input'

const AddColorForm = ({addColor = f => f}) => {
    // const title = useRef();
    // const color = useRef();

    // const [title, setTitle] = useState('');
    // const [color, setColor] = useState('#000000');

    const [title, resetTitle] = useInput('');
    const [color, resetColor] = useInput('#000000');

    const submit = (e) => {
        e.preventDefault();

        addColor(title.value, color.value);
        resetTitle();
        resetColor();
        
        // addColor(title, color);
        // setTitle('');
        // setColor('#000000');

        // addColor(title.current.value, color.current.value);
        // title.current.value = '';
        // color.current.value = '';
    }

    return(
        <div>  
            <h2>Choose a color</h2> 
            <br/>
            <form onSubmit={submit}>
                {/* <input ref={title} type="text" required placeholder="title"/> */}
                {/* <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" required placeholder="title"/> */}
                <input {...title} type="text" required placeholder="title"/>
                <br/>
                <label>Color: </label>
                {/* <input ref={color} type="color" required placeholder="color"/> */}
                {/* <input onChange={(e) => setColor(e.target.value)} value={color} type="color" required/> */}
                <input {...color} type="color" required/>
                <br/>
                <button>Add color</button>
            </form>
        </div>
    )
}

export default AddColorForm;