import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Footer from "./components/reusable/Footer";
import Header from "./components/reusable/Header";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Weather from "./components/Weather";
import { styled } from "@material-ui/core";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Landing /> },
    { path: "/", element: <Home /> },
    { path: "/weather", element: <Weather /> },
    { path: "/weather/:city", element: <Weather /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Router>
          <AppRoutes />
        </Router>
      </Content>
      <Footer />
    </>
  );
};

export default App;

const Content = styled("div")({
  padding: 20,
});
