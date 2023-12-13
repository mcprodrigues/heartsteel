import styled from "styled-components";

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100vw;
  gap: 1rem;
  overflow: hidden;

  & p {
    color: ${props => props.theme.colors.secondary};
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    max-width: 25rem;
    
  }
`