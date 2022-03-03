// import logo from './logo.svg';
// import StarRating from './components/star-rating/star-rating.component'
import './App.css';
import {colorsData} from './data/color-list'
import {useState} from 'react';
import ColorList from './components/color-list/color-list.component'
import AddColorForm from './components/add-color-form/add-color-form.component';
import {v4} from 'uuid'

function App() { 
  const [colors, setColors] = useState(colorsData);
  
  const handleAddColor = (title, color) => {
    let newState = [ 
      ...colors, 
      {
        id: v4(),
        rating: 0,
        title, 
        color
      }
    ]
    setColors(newState);   
  }

  const handleRemoveColor = (colorId) => {
    console.log(colorId)
    let newState = colors.filter(color => colorId !== color.id)    
    setColors(newState);
  }

  const handlerRating = (id, rating) => {
    const newState = colors.map(color => 
      color.id === id ? {...color, rating} : color
    );
    setColors(newState)
  }

  return (
    <div className='container'>
      <AddColorForm addColor={(title, color) => handleAddColor(title, color)}/>
      <ColorList colors={colors} onRemoveColor={(colorId) => handleRemoveColor(colorId)} onRateEvtColor={(id, rating) => handlerRating(id, rating)}/>
      {/* <StarRating style={{backgroundColor:'pink'}} onDoubleClick={e=> alert('dobleClick')}/> */}
      {/* <button onClick={handleAddColor}>Add color</button> */}
    </div>
  );
}

export default App;
