import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';
import { getArticleById } from '../api';

const Body = ()=>{
const {article_id}= useParams()
const [article, setArticle] = useState([]);
// console.log(article)

useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
        console.log(article)
      setArticle(article);
    });
  }, []);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
    </div>
  );



}

export default Body;