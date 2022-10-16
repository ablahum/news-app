import { Form } from 'react-bootstrap'

const Search = ({ onKeyUp }) => {
  return (
    <Form.Group className='mt-5 mb-3 shadow-lg'>
      <Form.Control type='text' placeholder='Search news...' className='text-center' onKeyUp={onKeyUp} />
    </Form.Group>
  )
}

export default Search
