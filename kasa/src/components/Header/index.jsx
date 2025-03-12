import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/LOGO.png'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
`

const StyledLink = styled(NavLink)`
  padding-right: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: black;
  text-decoration: none;
  font-size: 24px;

  &.active {
    text-decoration: underline;
  }
`

const HeadLogo = styled.img`
  padding-left: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
`
function Header() {
  return (
    <NavContainer>
      <HeadLogo src={LOGO} alt="logo" />
      <div>
        <StyledLink to="/" end>
          Accueil
        </StyledLink>
        <StyledLink to="/about" end>
          A propos
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
