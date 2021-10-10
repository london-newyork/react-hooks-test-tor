import React, {useState,useEffect} from "react";
import App from "./App"

const Foo = () => {
    const [page,changePage] = useState(1)
    const [articles,changeArticle] = useState([])
    
    useEffect(()=>{
      console.log("fetch")
      const url = `https://jsonplaceholder.typicode.com/posts${page}`
      fetch(url)
        .then( res => res.json() )
        .then( res => {
          changeArticle(res);
        })
    },[])
    
    return (
        <>
          <p>{page}ページ</p>
          <input type="button" value="次" onClick={()=>changePage(prevPage=>prevPage+1)} />
          <ul>
            {articles.map(article=>(
              <li>{article.title.rendered}</li>
            ))}
          </ul>
        </>
      )
  }