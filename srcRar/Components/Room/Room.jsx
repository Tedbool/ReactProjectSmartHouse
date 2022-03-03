import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Room.css'

export default function Room(props) {
  const [disp, setDisp] = useState("none");
  const [product, setProduct] = useState(["Air Conditioner"]);
  const [countStereo, setCountStereo] = useState(0);
  return (
    <div>
      <div id="topDiv">
        <div className='roomInfo'>
          <h1>Room name: {props.name}</h1>
          <h2>Room type: {props.type}</h2>
        </div>
        <div className='productsBtnsDiv'>
          {props.products.map((element, index)=>{ //Map loop that presents all of the produdcts in room array with the state that equals to red
            return <button className='productBtn' onClick={()=>{props.change(props.index,element.state, index)}} style={{backgroundColor:element.state}} key={index}>{element.nameP}</button>})}
        </div>
      </div>
      <div id="botDiv">
        {/* A button that opens a new block of select menu to add products */}
        <button id="btnAddProd" onClick={()=> {setDisp("block")}}>Add a product</button> 
      </div>
          <div id="chooseProd" style={{display: disp}}>
          <select className='selectProd' onChange={(e)=>{setProduct(e.target.value)}}>
            <option value={"Air Conditioner"}>Air Conditioner</option>
            <option value={"Boiler"}>Boiler</option>
            <option value={"Stereo"}>Stereo</option>
            <option value={"Lamp"}>Lamp</option>
          </select><br/>
          <button onClick={()=>{
            //Validations inside the room itself, errors included
            if (product === "Stereo") {
              setCountStereo(1);
            }
            if (product === "Boiler" && props.type !== "Toilet/Bathroom") {
              return alert("Only bathroom has boiler")
            }
            if (product === "Stereo" && countStereo > 0) {
              return alert("Only one stereo allowed")
            }
            //If all validations pass - add the product selected to the room array and hide this block
            else props.add(product, props.index); setDisp("none")}}>Add</button>
          </div>
          <button id='returnBtn'><Link to="/">Return to Home Page</Link></button>
    </div>
  )
}
