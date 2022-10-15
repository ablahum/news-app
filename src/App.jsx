import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import moment from 'moment'

import { Header, Search, Body } from './components'
import { getByKey, getDefault } from './apis'

const App = () => {
  const [articles, setArticles] = useState([])
  const [keyword, setKeyword] = useState('')

  const changes = (value) => setKeyword(value)

  const getNews = async () => {
    try {
      const res = await getDefault()

      setArticles(res.data.article)
    } catch (err) {
      console.log(err)
    }
  }

  const getSpecificNews = async () => {
    try {
      const res = await getByKey(keyword)

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  // const getBusinessNews = async () => {
  //   try {
  //     const res = await getByCategory('business')

  //     setArticles(res.data.articles)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const getHealthNews = async () => {
  //   try {
  //     const res = await getByCategory('health')

  //     setArticles(res.data.articles)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const getSportNews = async () => {
  //   try {
  //     const res = await getByCategory('sport')

  //     setArticles(res.data.articles)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    getNews()
  }, [])

  useEffect(() => {
    getSpecificNews()
  }, [keyword])

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
