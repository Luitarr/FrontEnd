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

  export const getCommentsByArticleId = (article_id) => {
    return justNews.get(`/articles/${article_id}/comments`).then(({ data }) => {   //is used to fetch and display a list of comments for a particular article. This would be useful in a comments section where you want to show all the comments related to an article.
      return data;
    });
  };

  export const getCommentById = (comment_id) => {
    return justNews.get(`/articles/${article_id}/comments/${comment_id}`).then(({ data }) => {   // is used to fetch the details of a single comment, usually when a user clicks on a specific comment to view more details.
      return data;
    });
  };

  // export const postComment =(article_id, newCommentText)=>{
  //   const postBody ={text: newCommentText};
  //   return justNews.post(`/articles/${article_id}/comments`, postBody).then(({data})=>{
  //     return data.comment
  //   })
  // }

  export const patchArticle =(article_id)=>{
    const patchBody={inc_votes:1};

      return justNews.patch(`/articles/${article_id}`, patchBody)
      .then(({data})=>{
        return data.article
      })
    
      
    
  }