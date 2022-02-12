import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route path={"/"} exact component={Homepage} />
        <Route path={"/login"} component={Login} />
      </Switch>
    </Container>
  );
}

export default App;
