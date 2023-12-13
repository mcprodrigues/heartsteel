
import { Helmet } from 'react-helmet';
import { Main } from "../components/Main/index";
import {ColorBar }  from "../components/Header/Colobar"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Container/index"
import { MainContainer, ImageContainer, Image } from "../components/ImageContainer";
import { Card, Title, Subtitle, Description, ContainerHeader, ContainerInfos } from "../components/Card"
import { Icons } from "../components/Icons/index"



const Aphelios = () => {
    return (
      <Main>
        <Helmet>
        <title>Heartsteel – Ezreal</title>
      </Helmet>
        <ImageContainer>
          <MainContainer>
            <ColorBar/>
          <Image src="img/members/ezreal.svg" alt="Ezreal" />
          </MainContainer>
        </ImageContainer>
        <Sidebar>
          <Container>
            <Card>
              <ContainerHeader>
                <Title hoverColor="#02FD3E">
                Ezreal<img src="img/icons/ezreal.svg" alt="Ícone Ezreal" />
                </Title>
                <Subtitle>Vocalista</Subtitle>
              </ContainerHeader>

              <ContainerInfos>
              <Description><strong>Signo:</strong> Sagitário</Description>
              <Description><strong>Mbti:</strong> ENFP</Description>
            </ContainerInfos>

              <Description>
              Com afinidades pela leitura e fotografia, além de um amplo conhecimento, Ezreal ama história antiga e esperava ser arqueólogo. Ele tem um grande talento vocal e sua música é influenciada pelo pop britânico e pelo rock psicodélico.          
              </Description>
            </Card>
        <Icons/>
          </Container>
        </Sidebar>
      </Main>
    )
}

export default Aphelios;