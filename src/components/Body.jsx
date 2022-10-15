import { Col, Card, Button } from 'react-bootstrap'

export const Body = ({ img, title, author, time, desc, more }) => {
  return (
    <Col xl={3} lg={4} md={6} sm={12} className='my-4'>
      <Card className='shadow'>
        <Card.Img variant='top' src={img} />

        <Card.Body>
          <Card.Title className='card-title mb-3'>{title}</Card.Title>

          <div className='card-subtitle text-muted my-2'>
            <h6 style={{ marginBottom: '.4rem' }}>{author}</h6>

            <h6 style={{ fontSize: '.8rem' }}>{time}</h6>
          </div>

          <Card.Text className='card-desc text-muted mt-3'>{desc}</Card.Text>

          <Button style={{ fontSize: '.8rem' }} variant='primary' target='_blank' className='btn btn-success' href={more}>
            Read more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
