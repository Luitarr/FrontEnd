import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles =()=>{
const [currentArticles, setCurrentArticles]=useState([])
const [IsLoading,setIsLoading]= useState(false)

useEffect(()=>{
    setIsLoading(true)
    getArticles().then(({articles})=>{
        setIsLoading(false)
        setCurrentArticles(articles)
 
        
    })
},[])

if(IsLoading) return <p>Loading...</p>;
  

return (
    <ul>
{currentArticles.map((article)=>{

    return <ArticleCard key={article.article_id}  article={article} />
})}
    </ul>
)

}

export default Articles;