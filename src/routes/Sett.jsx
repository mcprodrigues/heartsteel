
import { Helmet } from 'react-helmet';
import { Main } from "../components/Main/index";
import {ColorBar }  from "../components/Header/Colobar"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Container/index"
import { MainContainer, ImageContainer, Image } from "../components/ImageContainer";
import { Card, Title, Subtitle, Description, ContainerHeader, ContainerInfos } from "../components/Card";
import { Icons } from "../components/Icons/index";



const Sett = () => {
    return (
      <Main>

      <Helmet>
        <title>Heartsteel – Sett</title>
      </Helmet>

        <ImageContainer>
          <MainContainer>
          <ColorBar/>
          <Image src="img/members/sett.svg" alt="Sett" />
          </MainContainer>
        </ImageContainer>

        <Sidebar>
          <Container>
          <Card>
            <ContainerHeader>
              <Title hoverColor="#FC7406">
              Sett<img src="img/icons/sett.svg" alt="Ícone Sett" />
              </Title>
              <Subtitle>Líder e rapper</Subtitle>
            </ContainerHeader>

            <ContainerInfos>
              <Description><strong>Signo:</strong> Áries</Description>
              <Description><strong>Mbti:</strong> ESTP</Description>
            </ContainerInfos>

            <Description>
            Sett é um amante da musculação e bodybuilding, se orgulha bastante de sua forma física. É o coração e pilar da banda, ele ama profundamente seus amigos e familiares. Um grande admirador do gênero musical de Hip-Hop, ele é um talentoso rapper e também especialista em costura!            
            </Description>
          </Card>
        <Icons/>
          </Container>
        </Sidebar>
      </Main>
    )
}

export default Sett;