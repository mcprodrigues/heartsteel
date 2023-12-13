
import { Helmet } from 'react-helmet';
import { Main } from "../components/Main/index";
import { Sidebar } from "../components/Sidebar";
import { Container } from "../components/Container/index";
import { MainContainer, ImageContainer, Image } from "../components/ImageContainer";
import {ColorBar }  from "../components/Header/Colobar"
import { Card, Title, Subtitle, Description, ContainerHeader, ContainerInfos } from "../components/Card";
import { Icons } from "../components/Icons/index";



const Yone = () => {
    return (
      <Main>
      <Helmet>
        <title>Heartsteel – Yone</title>
      </Helmet>
        <ImageContainer>
          <MainContainer>
          <ColorBar/>
          <Image src="img/members/yone.svg" alt="Yone" />
          </MainContainer>
        </ImageContainer>

        <Sidebar>
          <Container>
            <Card>
              <ContainerHeader>
              <Title hoverColor="#D60400">
              Yone<img src="img/icons/yone.svg" alt="Ícone Yone" />
              </Title>
              <Subtitle>Produtor</Subtitle>
              </ContainerHeader>

            <ContainerInfos>
              <Description><strong>Signo:</strong> Touro</Description>
              <Description><strong>Mbti:</strong> INFJ</Description>
            </ContainerInfos>

            <Description>
            Um produtor/DJ japonês famoso e irmão de Yasuo, membro do grupo TRUE DAMAGE. Em seu tempo livre, Yone gosta de jogar TeamFight Tactics com Sett, que frequentemente se irrita pelo elo de Yone ser mais alto.            
            </Description>
        </Card>
        <Icons/>
          </Container>
        </Sidebar>
      </Main>
    )
}

export default Yone;