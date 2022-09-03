import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();

  const { total_items } = useCartContext();

  const { signIn, user } = useUserContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link onClick={closeSidebar} to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      <button type="button" onClick={(e) => signIn(e)} className="auth-btn">
        {`${user ? "Logout" : "Login"}`}
        {user ? <FaUserMinus /> : <FaUserPlus />}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: hsl(22, 28%, 21%);
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    color: hsl(22, 28%, 21%);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.3rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: hsl(22, 28%, 37%);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.7rem;
    color: white;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    color: hsl(22, 28%, 21%);
    letter-spacing: 0.1rem;
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
