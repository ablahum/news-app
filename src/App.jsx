import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'

import { Header, Search, Body } from './components'

const App = () => {
  const [articles, setArticles] = useState([])
  const [keyword, setKeyword] = useState('')

  const apiKey = 'd8aada2c9c54465c88335ed383186169'

  const getNews = async () => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`)

      setArticles(res.data.article)
    } catch (err) {
      console.log(err)
    }
  }

  const getSpecifiedNews = async () => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/everything?language=id&apiKey=${apiKey}&q=${keyword}`)

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  useEffect(() => {
    getSpecifiedNews()
  }, [keyword])

  const changes = (value) => {
    setKeyword(value)
  }

  return (
    <div>
      <Header title={'NEWS APP'} />

      <Container>
        <Search keyup={changes} />

        {keyword ? (
          <Row>
            {articles &&
              articles.map((article, i) => (
                <Body key={i} img={article.urlToImage} title={article.title} author={article.author} time={moment(article.publishedAt).format('dddd, DD MMMM - HH:mm')} desc={article.description} more={article.url} />
              ))}
          </Row>
        ) : (
          <Outlet />
        )}

        <Row>
          {articles &&
            articles.map((article, i) => (
              <Body key={i} img={article.urlToImage} title={article.title} author={article.author} time={moment(article.publishedAt).format('dddd, DD MMMM - HH:mm')} desc={article.description} more={article.url} />
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default App
