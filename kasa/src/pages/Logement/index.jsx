import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appartList from '../../datas'
import styled from 'styled-components'
import Slideshow from '../../components/SlideShow'
import star from '../../assets/star.png'
import starVide from '../../assets/starVide.png'
import Collapse from '../../components/Collapse'

const LogementWrapper = styled.div`
  display: flex;
  padding-left: 120px;
  padding-right: 120px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
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
  @media (max-width: 768px) {
    font-size: 18px;
  }
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
  flex-wrap: wrap;
  overflow-x: auto;
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
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const LogementHostPictureName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`
const LogementTitleHostTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

  @media (max-width: 768px) {
  font-size:12px;
`

const LogementHostPhoto = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  @media (max-width: 768px) {
  width: 32px;
  height: 32px;
`

const LogementStarContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
  width:98px;
  height: 18px;
  gap:10px;
  
`
const LogementHostStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`
const LogementCollapseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  gap: 20px;
  @media (max-width: 768px) {
  flex-direction: column;
  gap:0px;
  
`

const LogementContainerWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

  const notationStar = (rating, logementId) => {
    const totalStars = 5
    let stars = []

    for (let i = 0; i < totalStars; i++) {
      const key = `star-${logementId}-${i}-${rating}`
      if (i < rating) {
        stars.push(<img key={key} src={star} alt="étoile" />)
      } else {
        stars.push(<img key={key} src={starVide} alt="étoile vide" />)
      }
    }
    return stars
  }

  return (
    <LogementWrapper>
      <Slideshow pictures={logement.pictures} />
      <LogementContainerWrapper>
        <LogementTitleHostTagWrapper>
          <LogementTitleLocation>
            <LogementTitle>{logement.title}</LogementTitle>
            <LogementLocation>{logement.location}</LogementLocation>
          </LogementTitleLocation>

          <LogementTagsContainer>
            {logement.tags.map((tag, index) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </LogementTagsContainer>
        </LogementTitleHostTagWrapper>
        <LogementHostStarWrapper>
          <LogementHostPictureName>
            <LogementHostName>{logement.host.name}</LogementHostName>
            <LogementHostPhoto
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </LogementHostPictureName>
          <LogementStarContainer>
            {notationStar(logement.rating)}
          </LogementStarContainer>
        </LogementHostStarWrapper>
      </LogementContainerWrapper>
      <LogementCollapseWrapper>
        <Collapse title="Description">
          <div>{logement.description}</div>
        </Collapse>
        <Collapse title="Equipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={`equipment-${index}`} style={{ listStyleType: 'none' }}>
                {equipment}
              </li>
            ))}
          </ul>
        </Collapse>
      </LogementCollapseWrapper>
    </LogementWrapper>
  )
}

export default Logement
