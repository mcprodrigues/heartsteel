import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  max-width: 100%; 
  flex-wrap: wrap;

  @media only screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
    
`

const IconImage = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${pulse} 1s infinite;
  }
`;

const icons = [
  { name: "aphelios", src: 'img/icons/aphelios.svg', alt: "Aphelios" },
  { name: "ezreal", src: 'img/icons/ezreal.svg', alt: "Ezreal" },
  { name: "ksante", src: 'img/icons/ksante.svg', alt: "K'Sante" },
  { name: "sett", src: 'img/icons/sett.svg', alt: "Sett" },
  { name: "yone", src: 'img/icons/yone.svg', alt: "Yone" },
  { name: "kayn", src: 'img/icons/kayn.svg', alt: "Kayn" },
];


export const Icons = () => {
    return (
      <IconsContainer>
      {icons.map((icon, index) => (
        <Link to={`/heartsteel/${icon.name}`} key={index}>
          <IconImage src={icon.src} alt={icon.alt} />
        </Link>
      ))}
    </IconsContainer>
    )
}