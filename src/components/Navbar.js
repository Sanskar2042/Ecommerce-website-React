import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { useCartContext } from "../context/cart_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();

  const { user } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <span
              style={{
                color: "hsl(22, 28%, 37%)",
                fontFamily: "Aboreto",
                fontSize: "2rem",
              }}
            >
              AEKI
            </span>
          </Link>
          <button onClick={openSidebar} type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: hsl(210, 22%, 49%);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: hsl(209, 34%, 30%);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid hsl(22, 28%, 37%);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
