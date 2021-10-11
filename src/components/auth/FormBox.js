import styled from "styled-components";
import { BaseBox } from "../shared";

const Container = styled(BaseBox)`
  width: 23vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1vw 2vw;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

function FormBox({ children }) {
  return <Container>{children}</Container>;
}

export default FormBox;
