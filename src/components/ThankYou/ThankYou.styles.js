import styled from "styled-components";

export const ThankYouCard = styled.div`
  width: 340px;
  background-color: var(--dark-blue);
  padding: 20px;
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThankYouCardTitle = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 400;
  text-align: center;
`;

export const ThankYouCardDescritpion = styled.p`
  color: var(--light-grey);
  line-height: 1.3;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ThankYouCardSelectedContainer = styled.div`
  padding: 0.8rem 0.4rem;
  background-color: var(--grey);
  border-radius: 5rem;
  text-align: center;
  width: 200px;
  margin-bottom: 1.4rem;
`;

export const ThankYouCardSelectedTitle = styled.p`
  font-size: 1rem;
  color: var(--primary);
`;

export const ThankYouCarIllustration = styled.img`
  margin-bottom: 3rem;
  margin-top: 1.5rem;
`;
