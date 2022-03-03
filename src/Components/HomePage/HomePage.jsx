import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css'

export default function HomePage(props) {
  return (
    <div>
      <div className='roomDiv'>
        {props.rooms.map((value,i)=>{
          return <Link key={i} to={`/room${value.name}`} ><div className='roomBlock' style={{backgroundColor:value.color}}><h1>{value.name}</h1></div></Link>
        })}
      </div>
        <Link to='/addroom'><button id='btnAdd'>+</button></Link>
    </div>

    
  )
}
