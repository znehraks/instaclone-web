import styled from "styled-components";

const SFormError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 1vw;
  margin-top: 0.4vw;
`;

function FormError({ message }) {
  return (message === "") | !message ? null : (
    <SFormError>{message}</SFormError>
  );
}

export default FormError;
