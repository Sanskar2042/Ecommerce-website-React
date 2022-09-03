import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper>
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            reprehenderit vel unde aspernatur, optio accusantium, repudiandae
            porro officiis quasi fuga eius quis consectetur illum non doloribus
            praesentium? Illum distinctio eligendi saepe ipsum, voluptates
            dolores, ut dolor ratione, officiis explicabo quam libero illo.
            Laboriosam inventore earum iste dicta, recusandae rerum quos.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - (20vh + 10rem));
  padding: 5rem 0;
  display: grid;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: hsl(210, 22%, 49%);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
