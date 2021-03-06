import { useState } from 'react';
import './App.css';
import {HashRouter, Route,Routes} from 'react-router-dom'
import AddRoom from './Components/AddRoom/AddRoom';
import HomePage from './Components/HomePage/HomePage';
import Room from './Components/Room/Room'

function App() {

  const [rooms,setRooms] = useState([]);
  //Creates room objects
  const addRoom = (type,name,color)=>{
    let room = {
      name:name,
      type:type,
      color:color,
      products:[]
    }
    setRooms([...rooms,room])
  }
  //Adds products to rooms hook if room doesn't have more than 5 products
  const addProduct = (product, roomNumber) =>{
    if (rooms[roomNumber].products.length >= 5) {
      return alert("Only 5 products in each room");
    }
    rooms[roomNumber].products.push({nameP:product,state: "red"});

  }
  //Checks the current state of a product and changes it when clicked in the component
  const changeState = (roomNumber, currentState, stateNum) => { 
    let products = rooms;
    if (currentState === "red") {
      products[roomNumber].products[stateNum].state = "rgb(0, 204, 27)";
      setRooms([...products]);
    }
    else {
      products[roomNumber].products[stateNum].state = "red";
      setRooms([...products]);
    }
  }

  return (
    <div className="App">
    <h1>Smart House</h1>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage rooms={rooms}/>} />
          <Route path='/addroom' element={<AddRoom add={addRoom}/>} />
          {rooms.map((value,i)=>{ 
          //Map function to loop over all the rooms and create links to include the room name
          return <Route key={i} path={`/room${value.name}`} element={<Room name={value.name} type={value.type} products={value.products} add={addProduct} change={changeState} index={i}/>} />
          })}
        </Routes> 
      </HashRouter>

    </div>
  );
}

export default App;
