import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <a href="mailto:saidhajabdallahs@gmail.com">
          <span>Email Me </span>
        </a>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #fefefe;
    text-transform: uppercase;
    color: #fefefe;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
  }

  a::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background-color: #212121;
    transition: 0.3s ease-in-out;
    transform: scaleY(1);
  }

  a:hover::before {
    transform: scaleY(0);
  }

  a::after {
    content: "";
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background-color: #212121;
    transition: 0.3s ease-in-out;
    transform: scaleX(1);
    transition-delay: 0.5s;
  }

  a:hover::after {
    transform: scaleX(0);
  }

  a span {
    position: relative;
    z-index: 3;
  }

  button {
    margin-top: 3em;
    background-color: none;
    text-decoration: none;
    background-color: #212121;
    border: none;
  }
`;

export default Button;