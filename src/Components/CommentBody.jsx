import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';
import { getCommentById } from '../api';

const CommentBody = ()=>{
const {article_id, comment_id}= useParams()

const [comment, setComment] = useState([]);
const [IsLoading,setIsLoading]= useState(false)//not really needed here as I have not done the body clickable


useEffect(() => {
    setIsLoading(true)
    getCommentById(article_id, comment_id).then(({ comment }) => {
   
        setIsLoading(true)
      setComment(comment);
    });
  }, [article_id, comment_id]);

  if (IsLoading) return <p>Loading...</p>;

  return (
    <div>
      
      <p>{comment.body}</p>
      <p>Author: {comment.author}</p>
      <p>Topic: {comment.topic}</p>
      <p>Topic: {comment.created_at}</p>
      <p>Created At: {new Date(comment.created_at).toLocaleString()}</p>
    </div>
  );



}

export default CommentBody;