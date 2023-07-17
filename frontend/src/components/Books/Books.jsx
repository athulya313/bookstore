import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Books.css'
import { Link, Navigate } from 'react-router-dom'


function Books() {
    const[books,setBooks]=useState([''])
    const[redirect,setRedirect]=useState('')
    const[update,setUpdate]=useState('')
    useEffect(()=>{
        axios.get("http://localhost:4000/books").then(response=>{
            const {data}=response
            
            setBooks(data)
         
        })
     },[])
     async function deleteHandler(id) {
        const response = await axios.delete(`http://localhost:4000/delete/${id}`);
         if(response){
            setRedirect( <Navigate to={"/deletedpage"}></Navigate>)
         }
      
      }
      if(redirect){
        return redirect
      }
      
     
     
  return (
  <div className='container'>
   {books.length && books.map((book,index)=>(
        <div  className='divcontainer' key={index}>
        <img src={`http://localhost:4000/${book.image}`} alt={book.name} />
        <Link to={`/viewbyid/${book._id}`} className='h'>{book.name}</Link>
      <h2>{book.author}</h2>
      <h6>{book.description}</h6>
        <h4 >₹{book.price}</h4>
        <div className='btns'>
        <Link to={`/updatepage/${book._id}`} className='link' >UPDATE</Link>
        <Link onClick={()=>deleteHandler(book._id)} className='link' to={""}>DELETE</Link>
        </div>
        </div>
    ))}

  </div>
  )
}

export default Books