import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Footer from "./components/reusable/Footer";
import Header from "./components/reusable/Header";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Weather from "./components/Weather";
import Styled from "styled-components";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Landing /> },
    { path: "/", element: <Home /> },
    { path: "/weather", element: <Weather /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <div>
      <Header />
      <Content>
        <Router>
          <AppRoutes />
        </Router>
      </Content>
      <Footer />
    </div>
  );
};

export default App;

const Content = Styled.div`
  padding: 20px;
`;
