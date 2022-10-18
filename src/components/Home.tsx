import { InputAdornment, TextField, styled } from "@material-ui/core";
import { Search, Visibility } from "@material-ui/icons";
import { Button, Container } from "./reusable/StyledComponents";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const location = useLocation();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [city, setCity] = useState(location?.state?.city ?? "");

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <Container className="text-center">Loading Page...</Container>;
  }

  return (
    <Container>
      <p className="text-center">{user?.name}</p>
      <p className="text-center mb-10">https://github.com/{user?.nickname}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/weather/" + city);
        }}
      >
        <InputContainer className="mb-3">
          <TextField
            className="mb-3"
            placeholder="City"
            variant="outlined"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            style={{
              width: 400,
            }}
          />
        </InputContainer>
        <InputContainer>
          <Button type="submit" variant="contained" startIcon={<Visibility />}>
            Display Weather
          </Button>
        </InputContainer>
      </form>
    </Container>
  );
};

export default Home;

const InputContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});
