import { Link } from "react-router-dom";
import CommentAdder from "./CommentAdder";

const ArticleCard =({article, upVote})=>{
   return (
  <li>
    <Link to={`/articles/${article.article_id}`} >
     <h3>{article.title}</h3>
     </Link>
     <p>{article.id}</p>
     <p>Author: {article.author}</p>
     <p>Topic: {article.topic}</p>
     <p>Votes: {article.votes}</p>
     <p>{article.text}</p>
      <button onClick={()=> upVote(article.article_id)}>
      {/* {article.votes} */}
      <span aria-label="Votes for this article"> Vote</span>


      </button>
      {/* <CommentAdder /> */}
  </li>
  
 
     
      
    
   )
}

export default ArticleCard;