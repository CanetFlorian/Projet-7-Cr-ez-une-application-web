import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/LOGO.png'
import LOGOmobile from '../../assets/LOGOmobile.png'

const NavContainer = styled.nav`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(NavLink)`
  padding-right: 120px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: black;
  text-decoration: none;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-right: 20px;
    text-transform: uppercase;
  }

  &.active {
    text-decoration: underline;
  }
`

const HeadLogo = styled.img`
  padding-left: 100px;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    content: url(${LOGOmobile});
    padding-left: 20px;
  }
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
