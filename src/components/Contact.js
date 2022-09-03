import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            perferendis dolores qui autem illo molestiae voluptatem atque est
            tenetur quaerat.
          </p>
          <form action="" className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: hsl(210, 22%, 49%);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid black;
  }
  .form-input {
    border-right: none;
    color: hsl(22, 28%, 37%);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    outline: none;
  }
  .submit-btn {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: hsl(210, 22%, 49%);
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    color: black;
  }
  .submit-btn:hover {
    color: white;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
