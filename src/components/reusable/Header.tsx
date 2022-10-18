import logo from "../../logo.svg";
import Styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="Logo" />
      <HeaderLabel>Weather Forecast</HeaderLabel>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = Styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0px 5px 19px -3px rgba(0,0,0,0.24);
    -webkit-box-shadow: 0px 5px 19px -3px rgba(0,0,0,0.24);
    -moz-box-shadow: 0px 5px 19px -3px rgba(0,0,0,0.24);
    padding: 10px;
`;

const HeaderLogo = Styled.img`
    height: 100px
`;

const HeaderLabel = Styled.h2`
    color: #213343;
    margin-left: 15px
`;
