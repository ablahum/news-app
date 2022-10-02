import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

export const Search = ({ keyup }) => {
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    keyup(keyword)
  }, [keyword])

  const handleInput = (input) => setKeyword(input.target.value)

  return (
    <Form.Group className='mt-5 mb-3 shadow-lg' controlId='formBasicName'>
      <Form.Control type='text' placeholder='Search news...' className='text-center' onKeyUp={handleInput} />
    </Form.Group>
  )
}
