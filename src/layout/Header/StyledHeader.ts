import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  z-index: 5;

  .logo {
    width: 167px;
    height: 45px;
  }

  select {
    padding: 0.5rem;
  }
`

export const StyledHeader ={
  Wrapper
}
