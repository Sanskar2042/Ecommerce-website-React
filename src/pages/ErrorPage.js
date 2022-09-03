import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - 10rem);
  padding: 5rem 0;
  background: hsl(22, 31%, 88%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
