import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from './pages/Search'

const Container = styled.div`
  position: relative;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route path={"/"} exact component={Homepage} />
        <Route path={"/login"} component={Login} />
        <Route path={"/browse"} component={Browse} />
        <Route path={"/search"} component={Search} />

      </Switch>
    </Container>
  );
}

export default App;
