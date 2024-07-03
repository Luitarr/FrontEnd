
import { useState } from "react";
import { postComment } from "../api";

const CommentAdder =({setComments, article_id})=>{
const [newComment, setNewComment]= useState("");
const [error, setError] = useState(null);
// const [isLoading, setIsLoading] = useState(false);
console.log(article_id)
const handleSubmit =(event)=>{
    event.preventDefault();
    setError(null);
    setNewComment('');

    postComment(article_id,newComment).then((newCommentFromApi)=>{
        console.log(newCommentFromApi)
       

        setComments((currComments)=>{
        
            return [newCommentFromApi, ...currComments]
        })
        .catch((err) => {
            console.log('Failed to add comment:', err);
            setError("Failed to add comment. Please try again.");
          });
        
    })
}


return (
    <form className ="CommentAdder" onSubmit={handleSubmit} id="commentAdder">
<label htmlFor="">Add a comment: </label>
<textarea 
id="newComment" 
multiline="true" 
value={newComment}
onChange={(e)=>setNewComment(e.target.value)}></textarea>
<div>
<button>  Add </button>
</div>
{error && <p>{error}</p>}
    </form>
   
)
}

export default CommentAdder;