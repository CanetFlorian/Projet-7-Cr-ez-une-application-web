import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appartList from '../../datas'
import styled from 'styled-components'
import Collapse from '../../components/Collapse'
import Card from '../../components/Card'

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

const LogementCollapseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  gap: 20px;
  @media (max-width: 768px) {
  flex-direction: column;
  gap:0px;
  
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

  return (
    <LogementWrapper>
      <Card logement={logement} />

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
