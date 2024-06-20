
import { useState } from "react";
import { postComment } from "../api";

const CommentAdder =({article_id, setComments})=>{
const [newComment, setNewComment]= useState("");
// const [isLoading, setIsLoading] = useState(false);

const handleSubmit =(event)=>{
    event.preventDefault();

    postComment(newComment).then((newCommentFromApi)=>{
        console.log(newCommentFromApi)
        setNewComment('')

        setComments((currComments)=>{
            return [newCommentFromApi, ...currComments]
        })
    })
}


return (
    <form className ="CommentAdder" onSubmit={handleSubmit} id="commentAdder">
<label htmlFor="">Add a cooment</label>
<textarea 
id="newComment" 
multiline="true" 
value={newComment}
onChange={(e)=>setNewComment(e.target.value)}></textarea>
<button>Add</button>

    </form>
)
}

export default CommentAdder;