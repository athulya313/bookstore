import React, { useState } from 'react'
import './Add.css'
import axios from 'axios';

function Add() {
    const[name,setName]=useState('')
    const[author,setAuthor]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[image,setImage]=useState('')
    

   async function submitHandler(e){
    e.preventDefault()
        try {
            const response = await axios.post("http://localhost:4000/add", {
              name,author,description,price,image});
              console.log(response.data);
              setName('')
              setAuthor('')
              setDescription('')
              setPrice('')
              setImage('')
              
          } catch (error) {
            console.error("Axios request failed:", error);
          }

    }
   
    
    async function fileUpload(e){
       const file=e.target.files[0]
       const formData=new FormData()
       formData.append('image',file)
       try {
        const response = await axios.post('http://localhost:4000/upload', formData);
        console.log('File uploaded successfully:', response);
       
        const path=response.data.path
        setImage(path)
        
        } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
    

    
  return (
    <div>
        <form   className='main' >
            <label >Book Name  </label>
            <input  type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            
            <label>Author</label>
                <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            
            <label>Description </label>
               <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/> 
           
            <label>Price </label>
               <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)}/> 
           
            <label>Image </label>
               <input type='file' onChange={(e)=>fileUpload(e)}/> 
             {image && <img className='display' src={`http://localhost:4000/`+image} alt=''/>}  
               
               <div className='btn'>
                <button onClick={(e=>submitHandler(e))} type='button' > Add</button>
                </div>
           
               </form>
    </div>
  )
}

export default Add