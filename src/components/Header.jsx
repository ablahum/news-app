import { Link as LinkRouter } from 'react-router-dom'
import { Container, Navbar as NavbarBootstrap, Nav } from 'react-bootstrap'
import styled from 'styled-components'

const Navbar = styled(NavbarBootstrap)`
  height: 60px;
`

const NavbarBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  position: absolute;

  @media (max-width: 991px) {
    display: none;
  }
`

const Link = styled(LinkRouter)`
  color: var(--white);
  text-decoration: none;
  padding: 0 1rem;
  transition: 300ms;
  line-height: 60px;

  :hover {
    color: var(--primary);
    background-color: var(--white);
    font-size: 1.2rem;
    transition: 300ms;
  }

  @media (max-width: 424px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 376px) {
    font-size: 0.8rem;
  }
`

const Header = ({ title, setActive }) => {
  return (
    <Navbar bg='success' variant='dark'>
      <Container>
        <NavbarBrand href='/'>{title}</NavbarBrand>

        <Nav className='mx-auto'>
          <Link to='/' onClick={() => setActive('trending')}>
            TRENDING
          </Link>
          <Link to='business' onClick={() => setActive('business')}>
            BUSINESS
          </Link>
          <Link to='health' onClick={() => setActive('health')}>
            HEALTH
          </Link>
          <Link to='sport' onClick={() => setActive('sport')}>
            SPORT
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
