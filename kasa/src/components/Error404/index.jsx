import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 30px;
`
const ErrorTitle = styled.h2`
  font-size: 288px;
  font-weight: 700;
  color: #ff6060;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 96px;
  }
`
const ErrorSubTitle = styled.h3`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ErrorLink = styled(Link)`
  color: black;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 14x;
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubTitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubTitle>
      <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
    </ErrorWrapper>
  )
}

export default Error
