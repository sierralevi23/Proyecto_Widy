import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: silver;
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 35%;
  height: 90vh;
  transition: right 0.3s linear;
  border-radius: 15px;
  margin-right: 0.3rem;
  

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: black;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: black;
    text-decoration: none;
  }
`;