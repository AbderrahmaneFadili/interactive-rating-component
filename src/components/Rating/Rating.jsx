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
  constructor(props) {
    super(props);
    this.state = {
      ratings: [
        {
          rate: 1,
          selected: false,
        },
        {
          rate: 2,
          selected: false,
        },
        {
          rate: 3,
          selected: false,
        },
        {
          rate: 4,
          selected: false,
        },
        {
          rate: 5,
          selected: false,
        },
      ],
      selectedRatings: [],
    };
  }

  //handle submit
  handleSubmit = (event) => {};
  //handle selected rating
  handleSelectedRating = (item) => {
    console.log(item);
  };

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
            {this.state.ratings
              //sort the items
              .sort(({ rate: a }, { rate: b }) => a - b)
              //loop throw it using map
              .map((item, i) => (
                <RatingListItem
                  selected={item.selected}
                  onClick={(event) => this.handleSelectedRating(item)}
                  key={i.toString()}
                >
                  {item.rate}
                </RatingListItem>
              ))}
          </RatingList>
          {/* Button */}
          <Button onClick={this.handleSubmit}>submit</Button>
        </RatingCard>
      </Container>
    );
  }
}

export default Rating;
