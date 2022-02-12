import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

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
      </Switch>
    </Container>
  );
}

export default App;
