import axios from "axios";

const justNews = axios.create({baseURL : "https://just-news-tmxc.onrender.com/api"})

export const getArticles = ()=>{
    return justNews.get("/articles").then(({data})=>{
        return data
})
}