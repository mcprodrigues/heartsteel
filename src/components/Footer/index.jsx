import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    background-color: #181818;
    
    overflow: hidden;
    
    display: block;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    padding: 1rem;

    @media (max-width: 768px) {
        position: relative;
    }
    @media (max-width: 1024px) {
        position: relative;
    }

    & p {
        text-align: center;
        color: ${props => props.theme.colors.brown}; ;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 1rem;
    }
`

export const Footer = () => {
    return (
        <StyledFooter>
        <p>Heartsteel &copy; 2023</p>
    </StyledFooter>
    )
}