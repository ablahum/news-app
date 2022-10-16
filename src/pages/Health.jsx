import { Row } from 'react-bootstrap'
import moment from 'moment'

import { Body } from '../components'

const Health = ({ articles }) => {
  return (
    <Row>
      {articles?.map((article, i) => (
        <Body key={i} img={article.urlToImage} title={article.title} author={article.author} time={moment(article.publishedAt).format('dddd, DD MMMM - HH:mm')} desc={article.description} more={article.url} />
      ))}
    </Row>
  )
}

export default Health
