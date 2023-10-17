import { rgba } from "polished";
import styled from "styled-components";
import { TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url("/images/Background.png") no-repeat center,
  linear-gradient(
    0deg,
    ${theme.colors["base-white"]} 0%,
    ${rgba(theme.colors["base-background"], 0.2)} 50%,
    ${theme.colors["base-background"]} 100%
  )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    background: none;
    height: 45rem;
  }
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    > img{
      width: 28.3rem;
    }

    @media (max-width: 1200px) {
      padding-inline: 30px;
      
        > img {
            display: none;
        }
    }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;