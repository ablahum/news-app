import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { Header, Search, Scroll } from './components'
import { Trending, Business, Health, Sport } from './pages'
import { getByCategory, getByKey, getDefault } from './api'

const App = () => {
  const [articles, setArticles] = useState([])
  const [active, setActive] = useState('trending')

  const getNews = async () => {
    try {
      const res = await getDefault()

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  const getSpecificNews = async (params) => {
    try {
      const res = await getByKey(params)

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  const getBusinessNews = async () => {
    try {
      const res = await getByCategory('business')

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  const getHealthNews = async () => {
    try {
      const res = await getByCategory('health')

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  const getSportNews = async () => {
    try {
      const res = await getByCategory('sport')

      setArticles(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    switch (active) {
      case 'business':
        getBusinessNews()
        break
      case 'health':
        getHealthNews()
        break
      case 'sport':
        getSportNews()
        break

      default:
        getNews()
        break
    }
  }, [active])

  const handleKeyword = (e) => {
    if (e.target.value) {
      getSpecificNews(e.target.value)
    } else {
      getNews()
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header title='News App' active={active} setActive={setActive} />

        <Container>
          <Search onKeyUp={handleKeyword} />

          <Routes>
            <Route path='/' element={<Trending articles={articles} />} />
            <Route path='/business' element={<Business articles={articles} />} />
            <Route path='/health' element={<Health articles={articles} />} />
            <Route path='/sport' element={<Sport articles={articles} />} />
          </Routes>
        </Container>

        <Scroll />
      </BrowserRouter>
    </>
  )
}

export default App
