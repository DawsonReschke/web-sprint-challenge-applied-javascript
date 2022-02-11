import axios from "axios"
import createElement from "./createElement"
const API_URL = 'http://localhost:5000/api/topics'
const Tabs = (topics) => {
  return createElement({classes:['topics'],children:topics.map(val=>createElement({classes:['tab'],textContent:val}))})
}

const tabsAppender = (selector) => {
  axios.get(API_URL).then((val)=>document.querySelector(selector).appendChild(Tabs(val.data.topics))).catch(err=>console.error(err)); 
}

export { Tabs, tabsAppender }
