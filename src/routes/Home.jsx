import { Helmet } from 'react-helmet';
import { Main } from "../components/Main/index";
import { Header } from "../components/Header/index";
import { ColorBar }  from "../components/Header/Colobar";
import { Sidebar } from "../components/Sidebar/index";
import { Container } from "../components/Container/index";
import { Logo } from "../components/Logo/index";
import { Icons } from "../components/Icons/index";
import { Carousel } from "../components/Carousel/index";

const Home = () => {
    return (
      <Main>
      <Helmet>
        <title>Heartsteel</title>
      </Helmet>
        <Sidebar>

          <Header>
            <ColorBar/>
          </Header>

        <Container>
          <Logo src="img/logos/heartsteel-logo.png" alt="Logo Heartsteel" />
          <Logo src="img/divider.png" alt="Divisor" />
          <p>Heartsteel é um grupo de aventureiros dinâmicos que expressam sua individualidade e criatividade sem dar satisfações a ninguém. A personalidade e o som do grupo buscam inspiração em coletivos musicais modernos e uma variedade de influências de diferentes gêneros e épocas, resultando em uma identidade ousada e única.</p>
        <Icons/>
        </Container>

      </Sidebar>

        <Carousel/>
        
      </Main>
    )
}

export default Home;