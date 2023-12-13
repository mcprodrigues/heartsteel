
import { Helmet } from 'react-helmet';
import { Main } from "../components/Main/index";
import {ColorBar }  from "../components/Header/Colobar"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Container/index"
import { MainContainer, ImageContainer, Image } from "../components/ImageContainer";
import { Card, Title, Subtitle, Description, ContainerHeader, ContainerInfos } from "../components/Card";
import { Icons } from "../components/Icons/index";


const Aphelios = () => {
    return (
      <Main>
        
      <Helmet>
        <title>Heartsteel – Aphelios</title>
      </Helmet>

        <ImageContainer>
          <MainContainer>
            <ColorBar/>
          <Image src="img/members/aphelios.svg" alt="Aphelios e Alune" />
          </MainContainer>
        </ImageContainer>

        <Sidebar>
          <Container>
            <Card>
            <ContainerHeader>
              <Title hoverColor="#0AB7B5">
              Aphelios<img src="img/icons/aphelios.svg" alt="Ícone Aphelios" />
              </Title>
            <Subtitle>Instrumentista e compositor</Subtitle>
          </ContainerHeader>

            <ContainerInfos>
              <Description><strong>Signo:</strong> Peixes</Description>
              <Description><strong>Mbti:</strong> ISTJ</Description>
            </ContainerInfos>

            <Description>
            Amante das artes, Aphelios é proficiente em uma variedade de instrumentos musicais. Devido a uma problema em suas cordas vocais, ele raramente fala e muitas vezes se expressa por meio da música. Ele também é o irmão gêmeo mais velho da gerente da banda, Alune.
          </Description>
        </Card>
        <Icons/>
          </Container>
        </Sidebar>
      </Main>
    )
}

export default Aphelios;