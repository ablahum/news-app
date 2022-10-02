import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'

import { Body } from '../components'

export const Health = () => {
  const [articles, setArticles] = useState([])

  const apiKey = 'd8aada2c9c54465c88335ed383186169'
  const category = 'health'

  const getHealthNews = async () => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${apiKey}`)

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getHealthNews()
  }, [])

  return (
    <Row>
      {articles &&
        articles.map((article, i) => <Body key={i} img={article.urlToImage} title={article.title} author={article.author} time={moment(article.publishedAt).format('dddd, DD MMMM - HH:mm')} desc={article.description} more={article.url} />)}
    </Row>
  )
}
