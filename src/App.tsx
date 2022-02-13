import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import Browse from "./pages/Browse";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Search from "./pages/Search";
import MovieDetail from './pages/MovieDetail'

const Container = styled.div`
  position: relative;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route path={"/"} exact component={Homepage} />
        <Route path={"/login"} component={Login} />
        <Route path={"/browse"} exact component={Browse} />
        <Route path='/browse/:id' exact component={MovieDetail} />
        <Route path={"/search"} component={Search} />
      </Switch>
    </Container>
  );
}

export default App;
