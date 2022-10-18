import { GitHub } from "@material-ui/icons";
import { Button, Container } from "./reusable/StyledComponents";

const Landing = () => {
  return (
    <Container>
      <p className="mb-3">
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city
      </p>
      <Button variant="contained" startIcon={<GitHub />}>
        Login
      </Button>
    </Container>
  );
};

export default Landing;
