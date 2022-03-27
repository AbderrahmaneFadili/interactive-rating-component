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
  //handle selected rating
  handleSelectedRating = ({ rate, selected }) => {
    //Upadte the ratings list
    this.setState({
      ...this.state,
      ratings: [
        ...this.state.ratings.filter((item) => item.rate !== rate),
        {
          rate,
          selected: !selected,
        },
      ],
    });

    //Set the Selected Ratings
    if (this.state.selectedRatings.some((r) => r === rate)) {
      this.setState({
        selectedRatings: [
          ...this.state.selectedRatings.filter((r) => r !== rate),
        ],
      });
    } else {
      this.setState({
        selectedRatings: [...this.state.selectedRatings, rate],
      });
    }
  };

  //handle submit
  handleSubmit = (event) => {};

  render() {
    console.log(this.state.selectedRatings);
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
          <Button>submit</Button>
        </RatingCard>
      </Container>
    );
  }
}

export default Rating;
