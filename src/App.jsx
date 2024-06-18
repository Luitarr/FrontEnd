import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Nav from './Components/Nav'
// import Nav from './Components/Nav'
import Articles from './Components/Articles'
import ArticleCard from './Components/ArticleCard'


import './App.css'

const App=()=> {
  return(
   <BrowserRouter>
       <div className="app">
    <Header/>
    <Nav />
    <Routes>
    <Route path="/" element={<Nav />} />
    <Route path="/articles" element={<Articles />} />
    {/* <Route path="/" element={<Nav />} /> */}
  
    </Routes>
 
   
   


    </div>
  
   </BrowserRouter>

  );

}

export default App
