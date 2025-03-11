import ImgAbout from '../../assets/Image source 2.png'
import { HomeWrapper, HomeContainer, HomeImg } from '../Home'

function About() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeImg src={ImgAbout} alt="Image A propos" />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default About
