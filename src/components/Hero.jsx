import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import styled from "styled-components";
import obanga from "../assets/Obanga.jpg";
function Hero() {
  return (
    <>
      <StyledWrapper>
        <div className="heroContainer">
          <div className="flexContainer">
            <h1>Haj Abdallah Said</h1>
            <div className="logoContainer">
              <a href="https://github.com/Ha-Said">
                <img
                  src={github}
                  alt="Logo"
                  style={{ cursor: "pointer" }}
                  className="logo"
                />
              </a>
              <a href="linkedin.com">
                <img
                  src={linkedin}
                  alt="Logo"
                  style={{ cursor: "pointer" }}
                  className="logo"
                />
              </a>
              <a href="instagram.com">
                <img
                  src={instagram}
                  alt="Logo"
                  style={{ cursor: "pointer" }}
                  className="logo"
                />
              </a>
            </div>
            <p>
              A highly motivated final-year Computer Science student with
              experience in web development and team collaboration, seeking an
              internship to apply and further develop skills in software
              engineering and web technologies.
            </p>
          </div>

          <img src={obanga} alt="Obanga" className="portrait" />
        </div>
      </StyledWrapper>
    </>
  );
}
const StyledWrapper = styled.div`
  .heroContainer {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: left;
    padding: 5em;
    border-radius: 5em;
  }
  .logoContainer {
    width: 90%;
  }
  .flexContainer {
    max-width: 60%;
  }

  .portrait {
    height: 10em;

    border-radius: 3em;
  }
`;

export default Hero;
