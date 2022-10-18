import { ArrowBack } from "@material-ui/icons";
import {
  Button,
  Container,
  TableHeadRow,
  TableRow,
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
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${safeCity}&appid=${apiKey}`;

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

  const kelvinToFarenheit = (k: number) => {
    return (k - 273.15).toFixed(2);
  };

  if (isLoading) {
    return <Container className="text-center">Loading Page...</Container>;
  }

  const WeatherRow = apiData?.weather?.map((item) => {
    const dt = new Date(apiData?.dt * 1000);

    const formattedDate = dt.toLocaleDateString("en-US");

    return (
      <TableRow key={"weather_id" + item.id}>
        <TableCell>{formattedDate}</TableCell>
        <TableCell>{kelvinToFarenheit(apiData?.main?.temp || 0)}</TableCell>
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
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell>Temp (F)</TableCell>
            {/* @ts-ignore */}
            <Hidden mdDown>
              <TableCell>Description</TableCell>
              <TableCell>Main</TableCell>
              <TableCell>Pressure</TableCell>
              <TableCell>Humidity</TableCell>
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
