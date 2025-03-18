import React from 'react'
import styled from 'styled-components'
import star from '../../assets/star.png'
import starVide from '../../assets/starVide.png'
import Slideshow from './Slideshow'

const CardWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`

const CardTitleLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const CardTitle = styled.h2`
  color: #ff6060;
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
`

const CardLocation = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`

const CardTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 15px;
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
`

const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
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
      <CardTitleLocation>
        <CardTitle>{logement.title}</CardTitle>
        <CardLocation>{logement.location}</CardLocation>
        <CardTagsContainer>
          {logement.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </CardTagsContainer>
      </CardTitleLocation>
      <RatingContainer>{notationStar(logement.rating)}</RatingContainer>
    </CardWrapper>
  )
}

export default Card
