import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import { data } from 'react-router-dom';

const NewCollection = () => {

  const  [new_collection,setnew_collection] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections') 
    .then((Response)=>Response.json())
    .then((data)=>setnew_collection(data));
  },[])


  return (

    <div className='new-collections'>
      <h1>New Items</h1>
      <hr/>
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
