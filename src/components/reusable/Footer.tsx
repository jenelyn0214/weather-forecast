import Styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLabel>© 2022</FooterLabel>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = Styled.div`
    background-color: #213343;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;

const FooterLabel = Styled.span`
  color: #FFFFFF;
`;
