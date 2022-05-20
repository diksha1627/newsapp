import React from 'react'
import "../App.css"

export const News = (props) => {

 

  return (
    <div className='container ' >
      <h1 className=" my-3">News Articles - <em><strong>TOP HEADLINES</strong></em> </h1>
      <hr />

      {
        props?.value?.map((news) => {
          return (   <div className="news ">
          <h3 className="news__title">{news.title}</h3>
          <p className="news__desc">{news.description}</p>
          <span className="news__author">{news.author}</span> <br />
          <span className="news__published">{news.publishedAt}</span>
          <span className="news__source">{news.source.name}</span>
        </div> )

        })

      }

    </div>
  )
}
