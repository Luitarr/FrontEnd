import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { getArticleById } from '../api';

const Body = ()=>{
const {article_id}= useParams()
const [article, setArticle] = useState([]);
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
      <Link to={`/articles/${article_id}/comments`}>View Comments</Link>
    </div>
  );



}

export default Body;