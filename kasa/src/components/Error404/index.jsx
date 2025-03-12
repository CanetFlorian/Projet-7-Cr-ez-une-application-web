import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 1440px;
  gap: 30px;
`
const ErrorTitle = styled.h2`
  font-size: 288px;
  font-weight: 700;
  color: #ff6060;
  margin: 0;
`
const ErrorSubTitle = styled.h3`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
`

const ErrorLink = styled(Link)`
  color: black;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 60px;
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
