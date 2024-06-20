import { useState, useEffect } from "react";
import { getArticles, patchArticle } from "../api";
import ArticleCard from "./ArticleCard";

const Articles =()=>{
const [currentArticles, setCurrentArticles]=useState([])
const [IsLoading,setIsLoading]= useState(false)
const [error, setError] = useState(null);

useEffect(()=>{
    setIsLoading(true)
    getArticles().then(({articles})=>{
        setIsLoading(false)
        setCurrentArticles(articles)
    })
    .catch((err) => {
        console.log(err)
      setIsLoading(false);
      setError("Failed to fetch articles.");
    });
        
   
},[]);

const upVote = (article_id) => {

setCurrentArticles((currentArticles)=>{
    return currentArticles.map((article)=>{
        if (article.article_id === article_id) {
            return {...article, votes: article.votes + 1}
        }
        return article
    })
})

patchArticle(article_id).catch((err)=>{
    console.log(err)
    setError("Failed to vote Please try again.");
    setCurrentArticles((currentArticles)=>{
        return currentArticles.map((article)=>{
            if (article.article_id === article_id) {
                return {...article, votes: article.votes - 1}
            }
            return article;
        });

        
    })
})
  };

if(IsLoading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
    <ul>
{currentArticles.map((article)=>{

return <ArticleCard key={article.article_id}  article={article} upVote={upVote}/>
})}
    </ul>
)

}

export default Articles;