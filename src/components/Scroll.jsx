import { FaArrowCircleUp } from 'react-icons/fa'
import styled from 'styled-components'

const Button = styled(FaArrowCircleUp)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 3rem;
  z-index: 1;
  opacity: 0.5;
  cursor: pointer;
  color: var(--primary);
  transition: 300ms;

  &:hover {
    font-size: 5rem;
    opacity: 1;
  }
`

const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return <Button onClick={scrollToTop} />
}

export default Scroll
