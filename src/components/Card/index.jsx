import styled from "styled-components";
import PropTypes from 'prop-types';

export const Card = styled.div`
  max-width: 23rem;
  height: auto;
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.primary};
  border-radius: 1.5rem;
  padding: 1rem;
  margin-top: 3rem;

  @media (max-width: 425px) {
    width: 100%;  
    height: auto; 
  }
  @media (max-width: 1024px) {
    margin-top: 3rem;
  }
`
export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: .8rem;
    padding-top: 1rem;

`

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: .8rem;

`

export const Title = styled.h1`
  font-family: 'Koulen', sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  height: 3rem;
  transition: ease-in-out 0.3s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: ${props => props.hoverColor};
  }

`
Title.propTypes = {
  hoverColor: PropTypes.string, 
};

export const Subtitle = styled.h2`
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;
`

export const Description = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`