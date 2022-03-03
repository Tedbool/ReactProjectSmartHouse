import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./AddRoom.css"

export default function AddRoom(props) {
  
    const [color,setColor] = useState('')
    const [name,setName] = useState('')
    const [type,setType] = useState('Kitchen')
    const nav = useNavigate();
    return (
    <div>
        <select id="selectRoom" onChange={(e)=>{setType(e.target.value)}}>
            <option value="Kitchen">Kitchen</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Toilet/Bathroom">Toilet/Bathroom</option>
        </select><br/>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Name of the room' maxlength='5'/><br/>
        <input onChange={(e)=>{setColor(e.target.value)}} type="text" placeholder='Color of the room' /><br/>
         <button onClick={()=>{if (name.length < 1) {
            //If no name applied redirect to home page without adding to the array of rooms
            alert("Room's name must include at least one character"); 
            nav('/')
         }
            //If the validation pass = redirect to the home page with adding the room to the array of rooms
         else props.add(type,name,color); nav('/')}}>Add room</button>
        
    </div>
  )
}
