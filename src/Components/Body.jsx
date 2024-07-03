import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "./Comments";


import { useState, useEffect } from 'react';
import { getArticleById } from '../api';

const Body = ()=>{
const {article_id}= useParams()
const [article, setArticle] = useState([]);
const [comments, setComments] = useState([]);
const [IsLoading,setIsLoading]= useState(false)


useEffect(() => {
  setIsLoading(true)
    getArticleById(article_id).then(({ article }) => {
    setIsLoading(false)
      setArticle(article);
    });
  }, []);

  if (IsLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>

      <h2>Comments</h2>
      
      {/* <Link to={`/articles/${article_id}/comments`}>View Comments</Link> */}
      <Comments article_id={article_id} comments={comments} setComments={setComments} />
      
     
    </div>
   
  );



}

export default Body;