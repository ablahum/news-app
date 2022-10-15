import { Link as LinkRouter } from 'react-router-dom'
import { Container, Navbar as NavbarBootstrap, Nav } from 'react-bootstrap'
import styled from 'styled-components'

const Navbar = styled(NavbarBootstrap)`
  height: 60px;
`

const NavbarBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  position: absolute;

  @media (max-width: 992px) {
    display: none;
  }
`

const Link = styled(LinkRouter)`
  color: #fff;
  font-weight: 200;
  text-decoration: none;
  padding: 0 1em;
  line-height: 60px;
  transition: 300ms;

  :hover {
    color: #198754;
    background-color: #fff;
    font-size: 1.2rem;
    transition: 300ms;
  }
`

export const Header = ({ title }) => {
  return (
    <Navbar bg='success' variant='dark'>
      <Container>
        <NavbarBrand href='/'>{title}</NavbarBrand>

        <Nav className='mx-auto'>
          <Link to='/hooks'>TRENDING</Link>
          <Link to='health'>HEALTH</Link>
          <Link to='sport'>SPORT</Link>
          <Link to='business'>BUSINESS</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
