import {
  styled,
  Button as MuiButton,
  Container as MuiContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from "@material-ui/core";

export const Button = styled(MuiButton)({
  backgroundColor: "#213343",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#486e91",
  },
  minWidth: 150,
  paddingLeft: 20,
  paddingRight: 20,
});

export const Container = styled(MuiContainer)({
  paddingTop: "80px",
  fontSize: 20,
});

export const TableHead = styled(MuiTableHead)({
  backgroundColor: "#486e91",
  color: "#FFF",
});
export const TableRow = styled(MuiTableRow)({
  backgroundColor: "#FFF",
  color: "#000",
});
