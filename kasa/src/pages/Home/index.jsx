import styled from 'styled-components'
import ImgAccueil from '../../assets/Image source 1.png'
import { Link } from 'react-router-dom'
import appartList from '../../datas'
import Banner from '../../components/Banner'
import MainWrapper from '../../components/MainWrapper'

const HomeContainer2 = styled.div`
  width: 90%;
  display: grid;
  border-radius: 20px;
  background: #f6f6f6;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  box-sizing: border-box;
  padding: 40px;
  gap:40px;
  overflow: hidden;
    @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    background: white;
    padding:0;
   
   
   
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  box-sizing: border-box;
  @media (max-width: 768px) {
  }
`

function Home() {
  return (
    <MainWrapper>
      <Banner
        imageSrc={ImgAccueil}
        title="Chez vous, partout et ailleurs"
        showFonduGris={true}
      />

      <HomeContainer2>
        {appartList.map((appart) => (
          <Link key={appart.id} to={`/logement/${appart.id}`}>
            <CardImg src={appart.cover} alt={`Image de ${appart.id}`} />
          </Link>
        ))}
      </HomeContainer2>
    </MainWrapper>
  )
}

export default Home
