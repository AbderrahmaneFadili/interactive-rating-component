import styled from "styled-components";

export const RatingCard = styled.div`
  width: 340px;
  background-color: var(--dark-blue);
  padding: 20px;
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
`;

export const RatingIconContainer = styled.div`
  background-color: var(--grey);
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RatingIconStart = styled.img``;

export const RatingCardTitle = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 400;
`;

export const RatingCardDescritpion = styled.p`
  color: var(--light-grey);
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const RatingList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const RatingListItem = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.selected === true ? "var(--primary)" : "var(--grey)";
  }};
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--light-grey);
  }
`;

export const Button = styled.button`
  background-color: var(--primary);
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  padding: 0.7rem;
  font-family: inherit;
  font-size: 1.2rem;
  color: var(--white);
  text-transform: uppercase;

  &:hover {
    background-color: var(--white);
    color: var(--primary);
    transition: 0.5s;
  }
`;
