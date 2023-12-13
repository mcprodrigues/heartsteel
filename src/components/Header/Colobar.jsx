import styled from 'styled-components';
import { Link } from "react-router-dom";

const ColorBarContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  position: absolute;
`;

const ColorBlockColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorBlock = styled.div`
  width: 0.4rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const colors = ['#0AB7B5', '#02FD3E', '#F3D302', '#FC7406', '#D60400', '#D100FF'];

export const ColorBar = () => {
  return (
    <ColorBarContainer>
      <ColorBlockColumn>
        {colors.map((color, index) => (
          <ColorBlock key={index} style={{ backgroundColor: color }} />
        ))}
      </ColorBlockColumn>
      <Link to= "/heartsteel/">
      <img src="img/logos/league-of-legends-logo.svg" alt="League of Legends" />
      </Link>
    </ColorBarContainer>
  );
};


