import ImgAbout from '../../assets/Image source 2.png'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import styled from 'styled-components'
import MainWrapper from '../../components/MainWrapper'

const CollapseAboutWrapper = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

function About() {
  return (
    <MainWrapper>
      <Banner imageSrc={ImgAbout} showFonduGris={false} hideTitle={true} />
      <CollapseAboutWrapper>
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </CollapseAboutWrapper>
    </MainWrapper>
  )
}

export default About
