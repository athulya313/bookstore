import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='main'>
        <div className='mm'>
            <img className='img' alt='' src='https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbiUyMHJlYWRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
        
         <div className='txt'>
         <h1 className='bookmain' >BookStore</h1>
         <h3 className='text'>Read Books as much as you want.....</h3>
         </div>
        
     </div>
          <div className='btndiv' >
         <Link to={"/books"} className='btn'>View Books</Link>
       </div>
    </div>
  )
}

export default Home