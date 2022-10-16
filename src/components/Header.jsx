import { Link as LinkRouter } from 'react-router-dom'
import { Container, Navbar as NavbarBootstrap, Nav } from 'react-bootstrap'
import styled from 'styled-components'

import './header.css'

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

  &:hover {
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

const Header = ({ title, active, setActive }) => {
  return (
    <Navbar bg='success' variant='dark'>
      <Container>
        <NavbarBrand href='/'>{title}</NavbarBrand>

        <Nav className='mx-auto'>
          <LinkRouter to='/' onClick={() => setActive('trending')} className={`navbar ${active === 'trending' && 'selected'}`}>
            TRENDING
          </LinkRouter>
          <LinkRouter to='business' onClick={() => setActive('business')} className={`navbar ${active === 'business' && 'selected'}`}>
            BUSINESS
          </LinkRouter>
          <LinkRouter to='health' onClick={() => setActive('health')} className={active === 'health' ? 'navbar selected' : 'navbar'}>
            HEALTH
          </LinkRouter>
          <LinkRouter to='sport' onClick={() => setActive('sport')} className={active === 'sport' ? 'navbar selected' : 'navbar'}>
            SPORT
          </LinkRouter>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
