import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Bookdetails.css'

function Bookdetails() {
    const{id}=useParams();
    const[book,setBook]=useState(null)
    
    useEffect(()=>{
          axios.get(`http://localhost:4000/getdetails/${id}`).then(response=>{
            console.log(response);
            setBook(response.data)
          })
    },[id])
    if (!book) {
        return <div>Loading...</div>;
      }
   
  return (
    <div >
       <img className='img' src={`http://localhost:4000/${book.image}`} alt={book.name} /> 
     <h1>{book.name}</h1>
     <h4>₹{book.price}</h4>
     <h2>{book.author}</h2>
     <h3>{book.description}</h3>
     
    </div>
  )
}

export default Bookdetails