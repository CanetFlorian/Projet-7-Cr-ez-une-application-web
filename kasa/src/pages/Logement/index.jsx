import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appartList from '../../datas'
import styled from 'styled-components'
import star from '../../assets/star.png'
import starVide from '../../assets/starVide.png'
import Collapse from '../../components/Collapse'
import FlecheCarousselGauche from '../../assets/FlecheCarousselGauche.png'
import FlecheCarousselDroite from '../../assets/FlecheCarousselDroite.png'

const LogementWrapper = styled.div`
  display: flex;
  padding-left: 60px;
  max-width: 1320px;
  flex-direction: column;
`

const LogementPhoto = styled.img`
  width: 100%;
  height: 415px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`

const LogementTitleLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const LogementTitle = styled.h1`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 0;
`
const LogementLocation = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  color: #000000;
`

const LogementTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const Tag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6060;
  height: 25px;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 0 10px;
  min-width: 80px;
`

const LogementHostPictureName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
const LogementTitleHostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  width: 100%;
`

const LogementHostName = styled.h3`
  width: 50px;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  line-height: 143%;
  color: #ff6060;
`

const LogementHostPhoto = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

const LogementStarContainer = styled.div`
  display: flex;
  gap: 20px;
`
const LogementStarTagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const LogementCollapseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`

function Logement() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    const currentLogement = appartList.find((item) => item.id === id)

    if (currentLogement) {
      setLogement(currentLogement)
    } else {
      navigate('*')
    }
  }, [id, navigate])

  if (!logement) {
    return <div>Chargement de la page en cours...</div>
  }

  const notationStar = (rating) => {
    const totalStars = 5
    let stars = []

    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={star} alt="étoile" />)
      } else {
        stars.push(<img keu={i} src={starVide} alt="étoile vide" />)
      }
    }
    return stars
  }

  return (
    <LogementWrapper>
      <LogementPhoto src={logement.cover} alt={logement.title} />
      <LogementTitleHostWrapper>
        <LogementTitleLocation>
          <LogementTitle>{logement.title}</LogementTitle>
          <LogementLocation>{logement.location}</LogementLocation>
        </LogementTitleLocation>
        <LogementHostPictureName>
          <LogementHostName>{logement.host.name}</LogementHostName>
          <LogementHostPhoto
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </LogementHostPictureName>
      </LogementTitleHostWrapper>
      <LogementStarTagsWrapper>
        <LogementTagsContainer>
          {logement.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </LogementTagsContainer>
        <LogementStarContainer>
          {notationStar(logement.rating)}
        </LogementStarContainer>
      </LogementStarTagsWrapper>
      <LogementCollapseWrapper>
        <Collapse title="Description" width="582px">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Equipements" width="582px">
          <p>
            {logement.equipments.map((equipment, index) => (
              <li key={index} style={{ listStyleType: 'none' }}>
                {equipment}
              </li>
            ))}
          </p>
        </Collapse>
      </LogementCollapseWrapper>
    </LogementWrapper>
  )
}

export default Logement
