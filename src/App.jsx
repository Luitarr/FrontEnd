import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Articles from './Components/Articles'
import Body from './Components/Body'
import Comments from './Components/Comments'
import CommentBody from './Components/CommentBody'
import ArticleCard from './Components/ArticleCard'


import './App.css'

const App=()=> {
  return(
   <BrowserRouter>
       <div className="app">
    <Header/>
    <Nav />
    <Routes>
   
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/articles" element={<Articles />} />
    <Route path="/articles/:article_id" element={<Body />} />
    <Route path="/articles/:article_id/comments" element={<Comments />} />
    <Route path="/articles/:article_id/comments/:comment_id" element={<CommentBody />} />
        

    {/* <Route path="/" element={<Nav />} /> */}
  
    </Routes>
 
   
   


    </div>
  
   </BrowserRouter>

  );

}

export default App
