import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import Home from './components/Home.jsx'
import Add from './components/Add/Add.jsx';
import Books from './components/Books/Books';
import Delete from './components/Delete/Delete';
import Bookdetails from './components/Books/Bookdetails';
import UpdatePage from './components/Books/UpdatePage';







function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/deletedpage' element={<Delete/>}/>
          <Route path='/viewbyid/:id' element={<Bookdetails/>}/>
          <Route path='/updatepage/:id' element={<UpdatePage/>}/>
          
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App