import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";


const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [IsLoading,setIsLoading]= useState(false)
  
    useEffect(() => {
      setIsLoading(true)
      getCommentsByArticleId(article_id).then(({ comments }) => {
        setIsLoading(false)
        setComments(comments);
      });
    }, [article_id]);

    if (IsLoading) return <p>Loading...</p>;
  
    return (
      <ul>
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    );
  };
  
  export default Comments;