import logo from "../../logo.svg";
import { ExitToApp } from "@material-ui/icons";
import { Button } from "./StyledComponents";
import { Hidden, styled } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        {/* @ts-ignore */}
        <Hidden mdDown>
          <LogoLabel>Weather Forecast</LogoLabel>
        </Hidden>
      </LogoContainer>
      {isAuthenticated && (
        <Button
          variant="contained"
          startIcon={<ExitToApp />}
          onClick={() =>
            logout({ returnTo: window.location.origin + "/login" })
          }
        >
          Log out
        </Button>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  boxShadow: "0px 5px 19px -3px rgba(0,0,0,0.24)",
  padding: 10,
  justifyContent: "space-between",
});
const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Logo = styled("img")({
  height: 100,
});

const LogoLabel = styled("h2")({
  color: "#213343",
  marginLeft: 15,
});
