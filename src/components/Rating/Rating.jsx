import React, { Component } from "react";
import { Container } from "../App.styles";
import {
  RatingCard,
  RatingIconStart,
  RatingIconContainer,
  RatingCardTitle,
  RatingCardDescritpion,
  RatingList,
  RatingListItem,
  Button,
} from "./Rating.styles";
class Rating extends Component {
  render() {
    return (
      <Container>
        {/* Raing Card */}
        <RatingCard>
          {/* Rating Icon */}
          <RatingIconContainer>
            <RatingIconStart
              src={require("../../assets/images/icon-star.svg").default}
            />
          </RatingIconContainer>
          {/* Title */}
          <RatingCardTitle>How did we do?</RatingCardTitle>
          {/* Description */}
          <RatingCardDescritpion>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </RatingCardDescritpion>
          {/* Rating List */}
          <RatingList>
            {[1, 2, 3, 4, 5].map((rate) => (
              <RatingListItem>{rate}</RatingListItem>
            ))}
          </RatingList>
          {/* Button */}
          <Button>submit</Button>
        </RatingCard>
      </Container>
    );
  }
}

export default Rating;
