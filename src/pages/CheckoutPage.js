import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <div>
          {cart.length < 1 ? (
            <>
              <h1>Your shopping cart in empty. Fill it!!</h1>
              <Link className="btn" to="/products">
                Products
              </Link>
            </>
          ) : (
            <>
              <h1>Thanking for shopping with us!!</h1>
              <h5>Your order will be delivered shortly.</h5>
              <Link className="btn" to="/">
                Back Home
              </Link>
            </>
          )}
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default CheckoutPage;
