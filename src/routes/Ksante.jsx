
import { Helmet } from 'react-helmet';
import { Main } from "../components/Main/index";
import {ColorBar }  from "../components/Header/Colobar";
import { Sidebar } from "../components/Sidebar";
import { Container } from "../components/Container/index";
import { MainContainer, ImageContainer, Image } from "../components/ImageContainer";
import { Card, Title, Subtitle, Description, ContainerHeader, ContainerInfos } from "../components/Card";
import { Icons } from "../components/Icons/index";



const Ksante = () => {
    return (
      <Main>

        <Helmet>
        <title>Heartsteel – K&apos;Sante</title>
      </Helmet>

        <ImageContainer>
          <MainContainer>
            <ColorBar/>
            <Image src="img/members/ksante.svg" alt="K'Sante" />
          </MainContainer>
        </ImageContainer>

        <Sidebar>
          <Container>
            <Card>
              <ContainerHeader>
                <Title hoverColor="#F3D302">
                  K&apos;Sante<img src="img/icons/ksante.svg" alt="Ícone K'Sante" />
                </Title>
                <Subtitle>Co-líder e vocalista</Subtitle>
              </ContainerHeader>

              <ContainerInfos>
                <Description><strong>Signo:</strong> Leão</Description>
                <Description><strong>Mbti:</strong> ENFJ</Description>
            </ContainerInfos>

            <Description>
              K&apos;Sante é um diretor brilhante de videoclipes musicais e ama música R&B. Seu olhar apurado para o design visual deu vida à visão da equipe com diversos adereços. Ele também é um amante da musculação e conheceu Sett na academia antes da formação da banda.
            </Description>
            
            </Card>
            <Icons/>
          </Container>
        </Sidebar>
      </Main>
    )
}

export default Ksante;