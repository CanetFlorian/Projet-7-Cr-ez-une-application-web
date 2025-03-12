import { useState } from 'react'
import ArrowU from '../../assets/flechehaut.png'
import styled from 'styled-components'
import ArrowD from '../../assets/flechebas.png'

const CollapseContainer = styled.div`
  width: 1023px;
  margin-bottom: 40px;
`

const CollapseHeader = styled.div`
  background: #ff6060;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  position: relative;
`

const CollapseTitle = styled.h3`
  color: white;
  padding-left: 20px;
`

const CollapseArrow = styled.img`
  padding-right: 20px;
  cursor: pointer;
`

const CollapseContent = styled.div`
  background: #f6f6f673;
  margin-top: -5px;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  witdh: 100%;
`

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <CollapseContainer>
      <CollapseHeader>
        <CollapseTitle>{title}</CollapseTitle>
        <CollapseArrow
          src={isOpen ? ArrowD : ArrowU}
          alt={isOpen ? 'Flèche bas' : 'Flèche haut'}
          onClick={toggleCollapse}
        />
      </CollapseHeader>
      {isOpen && (
        <CollapseContent>
          <p>{children}</p>
        </CollapseContent>
      )}
    </CollapseContainer>
  )
}

export default Collapse
