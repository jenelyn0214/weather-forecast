import { ArrowBack } from "@material-ui/icons";
import {
  Button,
  Container,
  TableHeadRow,
  TableRow,
  TableHeadCell,
} from "./reusable/StyledComponents";
import {
  Table,
  TableCell,
  styled,
  Hidden,
  TableBody,
  TableHead,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IWeather from "../interfaces/weather";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const Weather = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState<IWeather>();
  const { city } = useParams();

  const safeCity = decodeURI(city || "").replaceAll(" ", ",");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${safeCity}&appid=${apiKey}&units=imperial`;

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    if (!city) {
      navigate("/");
    }

    if (city) {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }
  }, [apiUrl, city]);

  if (isLoading) {
    return <Container className="text-center">Loading Page...</Container>;
  }

  const WeatherRow = apiData?.weather?.map((item) => {
    const dt = new Date(apiData?.dt * 1000);

    const formattedDate = dt.toLocaleDateString("en-US");

    return (
      <TableRow key={"weather_id" + item.id}>
        <TableCell>{formattedDate}</TableCell>
        <TableCell>{apiData?.main?.temp}</TableCell>
        {/* @ts-ignore */}
        <Hidden mdDown>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.main}</TableCell>
          <TableCell>{apiData?.main?.pressure}</TableCell>
          <TableCell>{apiData?.main?.humidity}</TableCell>
        </Hidden>
      </TableRow>
    );
  });

  return (
    <Container>
      <h1>{city?.toLocaleUpperCase() + " | " + apiData?.sys?.country}</h1>
      <Table className="mb-10">
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>Date (mm/dd/yyyy)</TableHeadCell>
            <TableHeadCell>Temp (F)</TableHeadCell>
            {/* @ts-ignore */}
            <Hidden mdDown>
              <TableHeadCell>Description</TableHeadCell>
              <TableHeadCell>Main</TableHeadCell>
              <TableHeadCell>Pressure</TableHeadCell>
              <TableHeadCell>Humidity</TableHeadCell>
            </Hidden>
          </TableHeadRow>
        </TableHead>
        <TableBody>{WeatherRow}</TableBody>
      </Table>
      <ButtonContainer>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/", { state: { city } })}
        >
          Back
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Weather;

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});
