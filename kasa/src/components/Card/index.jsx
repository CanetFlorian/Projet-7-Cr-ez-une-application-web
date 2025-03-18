import React from 'react'
import styled from 'styled-components'
import star from '../../assets/star.png'
import starVide from '../../assets/starVide.png'
import Slideshow from '../../components/SlideShow'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTitleLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const CardTitle = styled.h1`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const CardLocation = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
`

const CardTagsContainer = styled.div`
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

const CardHostPictureName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`

const CardHostName = styled.h3`
  width: 50px;
  font-size: 18px;
  font-weight: 500;
  line-height: 143%;
  color: #ff6060;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const CardHostPhoto = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`
const CardStarContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    width: 98px;
    height: 18px;
    gap: 10px;
  }
`
const CardTitleHostTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-item: center;
  width: 100%;
`

const CardContainerWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CardHostStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`

const Card = ({ logement }) => {
  const notationStar = (rating) => {
    const totalStars = 5
    let stars = []

    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={star} alt="étoile" />)
      } else {
        stars.push(<img key={i} src={starVide} alt="étoile vide" />)
      }
    }
    return stars
  }

  return (
    <CardWrapper>
      <Slideshow pictures={logement.pictures} />
      <CardContainerWrapper>
        <CardTitleHostTagWrapper>
          <CardTitleLocation>
            <CardTitle>{logement.title}</CardTitle>
            <CardLocation>{logement.location}</CardLocation>
          </CardTitleLocation>

          <CardTagsContainer>
            {logement.tags.map((tag, index) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </CardTagsContainer>
        </CardTitleHostTagWrapper>
        <CardHostStarWrapper>
          <CardHostPictureName>
            <CardHostName>{logement.host.name}</CardHostName>
            <CardHostPhoto
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </CardHostPictureName>
          <CardStarContainer>{notationStar(logement.rating)}</CardStarContainer>
        </CardHostStarWrapper>
      </CardContainerWrapper>
    </CardWrapper>
  )
}

export default Card
