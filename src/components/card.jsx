import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cardContainer">
        <div className="card" style={{ animationDelay: "0.2s" }}>
          <div className="main-content">
            <div className="header">
              <span>Article on</span>
              <span>03/01/2024</span>
            </div>
            <p className="heading">Fullstack Relationship Assessment App</p>
            <div className="categories">
              <span>Flask</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>
            <p>
              {" "}
              I made a Fullstack app that utilizes a MySQL Database and Flask
              for the backend.{" "}
            </p>
          </div>
          <button>
            <a href="https://github.com">Check the Code</a>
          </button>
        </div>

        <div className="card" style={{ animationDelay: "0.4s" }}>
          <div className="main-content">
            <div className="header">
              <span>Article on</span>
              <span>03/01/2024</span>
            </div>
            <p className="heading">Calorie Counter React App</p>
            <div className="categories">
              <span>React</span>
              <span>HTML</span>
              <span>Css</span>
              <span>JavaScript</span>
            </div>
            <p>
              I made a website that allows you to track your daily calorie
              intake with a simple and user-friendly interface.
            </p>
          </div>
          <button>
            <a href="https://github.com">Check the Code</a>
          </button>
        </div>

        <div className="card" style={{ animationDelay: "0.6s" }}>
          <div className="main-content">
            <div className="header">
              <span>Article on</span>
              <span>03/01/2024</span>
            </div>
            <p className="heading">This Portfolio</p>
            <div className="categories">
              <span>Flask</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <p> I made this Portfolio from Scratch using React.</p>
          <button>
            <a href="https://github.com">Check the Code</a>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
p{
margin-bottom: 4em;
}
  .cardContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
      }
  button {
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  button:focus,
  button:hover {
    color: #fff;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .card {
    width: 15em;
    height: 20em;
    color: white;
    background: linear-gradient(#212121, #212121) padding-box,
      linear-gradient(145deg, transparent 35%, white, #252e31) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: top bottom;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    animation: slideIn 0.5s ease forwards;
  }

  .card .main-content {
    flex: 1;
  }

  .card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }

  .card .heading {
    font-size: 24px;
    margin: 24px 0 16px;
    font-weight: 600;
  }

  .card .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    gap: 10px;
  }

  .card .categories span {
  
    background-color: #4b4b4b;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
  }

  .card .footer {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }
`;

export default Card;
