import styled from 'styled-components'
import ImgAccueil from '../../assets/Image source 1.png'
import Thumb from '../../assets/Thumb.png'
import { Link } from 'react-router-dom'
import appartList from '../../datas'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`
export const HomeContainer = styled.div`
  width: 1320px;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 40px;
`
export const HomeImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const FonduGris = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

const HomeTitle = styled.h2`
  position: absolute;
  font-weight: 700;
  font-size: 48px;
  color: #ffffff;
  z-index: 2;
  line-height: 143%;
  letter-spacing: 0%;
  vertical-align: bottom;
`
const HomeContainer2 = styled.div`
  width: 1320px;
  display: grid;
  border-radius: 20px;
  background: #f6f6f6;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  box-sizing: border-box;
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  box-sizing: border-box;
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeImg src={ImgAccueil} alt="Image acceuil" />
        <FonduGris />
        <HomeTitle>Chez vous, partout et ailleurs</HomeTitle>
      </HomeContainer>
      <HomeContainer2>
        {appartList.map((appart) => (
          <Link key={appart.id} to={`/logement/${appart.id}`}>
            <CardImg src={appart.cover} alt={`Image de ${appart.id}`} />
          </Link>
        ))}
      </HomeContainer2>
    </HomeWrapper>
  )
}

export default Home
