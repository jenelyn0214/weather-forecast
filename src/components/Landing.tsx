import { GitHub } from "@material-ui/icons";
import { Button, Container } from "./reusable/StyledComponents";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <Container className="text-center">Loading Page...</Container>;
  }

  return (
    <Container>
      <p className="mb-3">
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city
      </p>
      <Button
        variant="contained"
        startIcon={<GitHub />}
        onClick={() => loginWithRedirect()}
      >
        Login
      </Button>
    </Container>
  );
};

export default Landing;
