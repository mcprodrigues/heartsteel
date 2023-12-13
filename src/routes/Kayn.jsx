
import { Helmet } from 'react-helmet';
import { Main } from "../components/Main/index";
import {ColorBar }  from "../components/Header/Colobar"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Container/index"
import { MainContainer, ImageContainer, Image } from "../components/ImageContainer";
import { Card, Title, Subtitle, Description, ContainerHeader, ContainerInfos } from "../components/Card"
import { Icons } from "../components/Icons/index"



const Kayn = () => {
    return (
      <Main>

      <Helmet>
        <title>Heartsteel – Kayn</title>
      </Helmet>

        <ImageContainer>
          <MainContainer>
            <ColorBar/>
          <Image src="img/members/kayn.svg" alt="Kayn" />
          </MainContainer>
        </ImageContainer>

        <Sidebar>
          <Container>
            <Card>
              <ContainerHeader>
              <Title hoverColor="#D100FF">
              Kayn<img src="img/icons/kayn.svg" alt="Ícone Kayn" />
              </Title>
              <Subtitle>Instrumentista e rapper</Subtitle>
              </ContainerHeader>
          
              <ContainerInfos>
              <Description><strong>Signo:</strong> Escorpião</Description>
              <Description><strong>Mbti:</strong> ENTJ</Description>
              </ContainerInfos>
            
            <Description>
            Talvez possa ser orgulhoso, mas Kayn é muito dedicado em provar suas habilidades ao trabalhar em equipe.  Ele ama pintar o cabelo e frequentemente aparece com cores selvagens. Eclético; foi descoberto que quando ninguém está em casa, Kayn gosta de escutar músicas fofas e pop.
          </Description>
        </Card>
        <Icons/>
          </Container>
        </Sidebar>

      </Main>
    )
}

export default Kayn;