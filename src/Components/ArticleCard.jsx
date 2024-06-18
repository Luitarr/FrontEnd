import { Link } from "react-router-dom";

const ArticleCard =({article})=>{
   return (
  <li>
    <Link to={`/articles/${article.article_id}`} >
     <h3>{article.title}</h3>
     </Link>
     <p>{article.id}</p>
     <p>Author: {article.author}</p>
     <p>Topic: {article.topic}</p>
    
  </li>
  
 
     
      
    
   )
}

export default ArticleCard;