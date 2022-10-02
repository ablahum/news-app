import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'

const MyNavbar = styled(Navbar)`
  height: 60px;
`

const MyNavbarBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  position: absolute;

  @media (max-width: 992px) {
    display: none;
  }
`

const MyLink = styled(Link)`
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
    <MyNavbar bg='success' variant='dark'>
      <Container>
        <MyNavbarBrand href='/'>{title}</MyNavbarBrand>

        <Nav className='mx-auto'>
          <MyLink to='/hooks'>TRENDING</MyLink>
          <MyLink to='health'>HEALTH</MyLink>
          <MyLink to='sport'>SPORT</MyLink>
          <MyLink to='business'>BUSINESS</MyLink>
        </Nav>
      </Container>
    </MyNavbar>
  )
}
