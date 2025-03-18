import styled from 'styled-components'

const BannerContainer = styled.div`
  width: 90%;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    height: 111px;
  }
`

const BannerImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BannerTitle = styled.h2`
  position: absolute;
  font-weight: 700;
  font-size: 48px;
  color: #ffffff;
  z-index: 2;
  line-height: 143%;
  letter-spacing: 0%;
  vertical-align: bottom;
  @media (max-width: 768px) {
    font-size: 24px;
    white-space: pre-line;
    padding-left: 20px;
    padding-right: 20px;
  }
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

const Banner = ({
  imageSrc,
  title,
  showFonduGris = true,
  hideTitle = false,
}) => (
  <BannerContainer>
    <BannerImg src={imageSrc} alt="Image bannière" />
    {showFonduGris && <FonduGris />}
    {!hideTitle && <BannerTitle>{title}</BannerTitle>}
  </BannerContainer>
)

export default Banner
