import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles =()=>{
const [currentArticles, setCurrentArticles]=useState([])

useEffect(()=>{
    getArticles().then(({articles})=>{
        setCurrentArticles(articles)
        // console.log(articles)
    })
},[])

return (
    <ul>
{currentArticles.map((article)=>{
    console.log({article})
    return <ArticleCard key={article.article_id}  article={article} />
})}
    </ul>
)

}

export default Articles;