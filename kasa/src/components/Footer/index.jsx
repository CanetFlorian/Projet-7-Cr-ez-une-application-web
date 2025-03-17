import Foot from '../../assets/Size=Desktop.png'
import styled from 'styled-components'
import FOOTERMobile from '../../assets/FOOTERMobile.png'

const FooterContainer = styled.div`
  width: 100%;
`

const FooterImg = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    content: url(${FOOTERMobile});
  }
`

function Footer() {
  return (
    <FooterContainer>
      <FooterImg src={Foot} alt="logo footer" />
    </FooterContainer>
  )
}

export default Footer
