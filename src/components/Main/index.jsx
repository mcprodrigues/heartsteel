import styled from "styled-components";

export const Main = styled.main `
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  position: relative;
  width: 100vw;
  background: linear-gradient(180deg, #000 6.31%, #181818 88.32%);
  

  
    @media (max-width: 768px){
    flex-direction: column;
    flex-wrap: wrap;
    }
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100vw;
      
  }
`