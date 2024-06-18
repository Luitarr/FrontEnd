import axios from "axios";

const justNews = axios.create({baseURL : "https://just-news-tmxc.onrender.com/api"})

export const getArticles = ()=>{
    return justNews.get("/articles").then(({data})=>{
        return data
})
}

export const getArticleById = (article_id) => {
    return justNews.get(`/articles/${article_id}`).then(({ data }) => {
      return data;
    });
  };