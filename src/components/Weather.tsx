import { ArrowBack } from "@material-ui/icons";
import {
  Button,
  Container,
  TableHead,
  TableRow,
} from "./reusable/StyledComponents";
import { Table, TableCell, styled, Hidden, TableBody } from "@material-ui/core";

const Weather = () => {
  return (
    <Container>
      {/* @ts-ignore */}
      <Hidden mdDown>
        <Table className="mb-10">
          <TableHead>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell>Temp (F)</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Main</TableCell>
            <TableCell>Pressure</TableCell>
            <TableCell>Humidity</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Date (mm/dd/yyyy)</TableCell>
              <TableCell>Temp (F)</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Main</TableCell>
              <TableCell>Pressure</TableCell>
              <TableCell>Humidity</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Hidden>
      {/* @ts-ignore */}
      <Hidden mdUp>
        <Table className="mb-10">
          <TableHead>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell>Temp (F)</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Date (mm/dd/yyyy)</TableCell>
              <TableCell>Temp (F)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Hidden>
      <ButtonContainer>
        <Button variant="contained" startIcon={<ArrowBack />}>
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
