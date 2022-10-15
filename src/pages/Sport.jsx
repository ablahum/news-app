import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import moment from 'moment'

import { Body } from '../components'
// import { getByCategory } from '../apis'

export const Sport = () => {
  const [articles, setArticles] = useState([])

  // const getSportNews = async () => {
  //   try {
  //     const res = await getByCategory('sport')

  //     setArticles(res.data.articles)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   getSportNews()
  // }, [])

  return (
    <Row>
      {articles &&
        articles.map((article, i) => <Body key={i} img={article.urlToImage} title={article.title} author={article.author} time={moment(article.publishedAt).format('dddd, DD MMMM - HH:mm')} desc={article.description} more={article.url} />)}
    </Row>
  )
}
