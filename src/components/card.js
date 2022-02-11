import axios from "axios"
import createElement from "./createElement"
const API_URL = 'http://localhost:5000/api/articles'
const Card = (article) => {
    let authorPhotoContainer = createElement({classes:['img-container'],children:[createElement({type:'img',attributes:[{attribute:'src',value:article.authorPhoto}]})]})
    let authorName = createElement({type:'span',textContent:`By ${article.authorName}`})
    let headline = createElement({classes:['headline'],textContent:article.headline})
    let author = createElement({classes:['author'],children:[authorPhotoContainer,authorName]})
    return createElement({classes:['card'],children:[headline,author]})
}

const cardAppender = (selector) => {
  let doc = document.querySelector(selector); 
  axios.get(API_URL).then((res)=>{
    Object.entries(res.data.articles).forEach((val)=> val[1].forEach(article=>doc.appendChild(Card(article))))
  }).catch(err=>console.error(err)); 
}

export { Card, cardAppender }
