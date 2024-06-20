import { useState } from "react";
import { Link } from "react-router-dom";
// import { patchArticle } from "../api";

const ArticleCard =({article, upVote})=>{

//    const[articles, setArticles]=useState([]);
  
//    const upVote=(article_id)=>{

//       patchArticle(article_id)

// setArticles((currentArticles)=>{
//    console.log(currentArticles)

//    return currentArticles.map((article)=>{
//       if(article.article_id===article_id) {
// return {...article, votes:article.votes +1}
//       }
//       return article;
//    })
// })


//    }
   return (
  <li>
    <Link to={`/articles/${article.article_id}`} >
     <h3>{article.title}</h3>
     </Link>
     <p>{article.id}</p>
     <p>Author: {article.author}</p>
     <p>Topic: {article.topic}</p>
     <p>Votes: {article.votes}</p>
{/* 
     <li key ={article.article_id}> */}
      <p>{article.text}</p>
      <button onClick={()=> upVote(article.article_id)}>
      {article.votes}
      <span aria-label="Votes for this article"> Vote</span>
    

      </button>
     {/* </li> */}
    
  </li>
  
 
     
      
    
   )
}

export default ArticleCard;