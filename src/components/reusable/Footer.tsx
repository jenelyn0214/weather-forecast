import { styled } from "@material-ui/core";

const Footer = () => {
  return <FooterContainer>© 2022</FooterContainer>;
};

export default Footer;

const FooterContainer = styled("div")({
  backgroundColor: "#213343",
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  color: "#FFF",
});
