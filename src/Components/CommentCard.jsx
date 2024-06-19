import { Link } from "react-router-dom";

const CommentCard =({comment})=>{
   return (
  <li>
    {/* <p>{`/articles/${comment.article_id}/comments/${comment.comment_id}`}</p> */}
     <p>{comment.body}</p>
   
    
     <p>Author: {comment.author}</p>
     <p>Votes: {comment.votes}</p>
     {/* <p>Date: {comment.created_at}</p> */}
     <p>Created At: {new Date(comment.created_at).toLocaleString()}</p>
    
  </li>
  
 
     
      
    
   )
}

export default CommentCard;