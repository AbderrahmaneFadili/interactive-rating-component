import React from "react";
import { Container } from "../App.styles";
import { PageNotFoundTitle } from "./PageNotFound.styles";

function PageNotFound() {
  return (
    <Container>
      <PageNotFoundTitle>Page not found (404)</PageNotFoundTitle>
    </Container>
  );
}
export default PageNotFound;
