import createElement from './createElement'; 

const Header = (title, date, temp) => {
  let dateElement = createElement({type:'span',classes:['date'],textContent:date})
  let titleElement = createElement({type:'h1',textContent:title})
  let tempElement = createElement({type:'span',classes:['temp'],textContent:temp}); 
  return createElement({classes:['header'],children:[dateElement,titleElement,tempElement]})
}

const headerAppender = (selector) => {
  let appendHeader = document.querySelector(selector); 
  appendHeader.appendChild(Header('Bloom News',new Date(),'Components By Dawson Reschke')); 
}

export { Header, headerAppender }
