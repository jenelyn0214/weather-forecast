import { InputAdornment, TextField, styled } from "@material-ui/core";
import { Search, Visibility } from "@material-ui/icons";
import { Button, Container } from "./reusable/StyledComponents";

const Home = () => {
  return (
    <Container>
      <p className="text-center">John Smith</p>
      <p className="text-center mb-10">https://github.com/smithjogn</p>
      <InputContainer className="mb-3">
        <TextField
          className="mb-3"
          placeholder="City"
          variant="outlined"
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
        <Button variant="contained" startIcon={<Visibility />}>
          Display Weather
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Home;

const InputContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});
