import React, { Component } from "react";
import {
  ThankYouCard,
  ThankYouCardTitle,
  ThankYouCardDescritpion,
  ThankYouCardSelectedContainer,
  ThankYouCardSelectedTitle,
  ThankYouCarIllustration,
} from "./ThankYou.styles";
import { Container } from "../App.styles";
import { Redirect } from "react-router-dom";

class ThankYou extends Component {
  render() {
    console.log(this.props);

    if (this.props.match.params.ratingsCount <= 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <Container>
          {/* Card */}
          <ThankYouCard>
            {/* Illustration */}
            <ThankYouCarIllustration
              src={
                require("../../assets/images/illustration-thank-you.svg")
                  .default
              }
            />
            {/* Selected */}
            <ThankYouCardSelectedContainer>
              <ThankYouCardSelectedTitle>
                You selected {this.props.match.params.ratingsCount} out of 5
              </ThankYouCardSelectedTitle>
            </ThankYouCardSelectedContainer>
            {/* Thank you */}
            <ThankYouCardTitle>Thank you!</ThankYouCardTitle>
            {/* Description */}
            <ThankYouCardDescritpion>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </ThankYouCardDescritpion>
          </ThankYouCard>
        </Container>
      );
    }
  }
}

export default ThankYou;
