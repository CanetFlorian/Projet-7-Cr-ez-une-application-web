import { useState } from 'react'
import styled from 'styled-components'
import FlecheCarousselGauche from '../../assets/FlecheCarousselGauche.png'
import FlecheCarousselDroite from '../../assets/FlecheCarousselDroite.png'
import FlecheGaucheSmall from '../../assets/FlecheGaucheSmall.png'
import FlecheDroiteSmall from '../../assets/FlecheDroiteSmall.png'

const SlideshowWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const SlideshowPhoto = styled.img`
  width: 100%;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 255px;
  }
`

const SlideshowFlecheGauche = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px) {
    content: url(${FlecheGaucheSmall});
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`

const SlideshowFlecheDroite = styled.img`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px) {
    content: url(${FlecheDroiteSmall});
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`

const SlideNumber = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  z-index: 3;
`

const Slideshow = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const ImagePrecedente = () => {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    )
  }

  const ImageSuivante = () => {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <SlideshowWrapper>
      <SlideshowPhoto src={pictures[currentImageIndex]} alt="Carrousel Image" />
      {pictures.length > 1 && (
        <>
          <SlideshowFlecheGauche
            src={FlecheCarousselGauche}
            alt="fleche gauche"
            onClick={ImagePrecedente}
          />
          <SlideshowFlecheDroite
            src={FlecheCarousselDroite}
            alt="fleche droite"
            onClick={ImageSuivante}
          />
        </>
      )}

      {pictures.length > 1 && (
        <SlideNumber>
          {currentImageIndex + 1} / {pictures.length}
        </SlideNumber>
      )}
    </SlideshowWrapper>
  )
}

export default Slideshow
