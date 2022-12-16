import styled, { css } from "styled-components";

const Form = styled.form``;
const FormControl = styled.div`
  margin-bottom: 15px;
`;
const FormLabel = styled.label`
  color: #222;
  padding-bottom: 10px;
`;
const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 8px;
  border: 1px solid #546990;
  background: transparent;
  outline: 0;
  border-radius: 5px;
  font-size: 0.95rem;
  color: #222;
  transition: padding 0.25s ease-out;
  &::placeholder {
    color: #444;
  }
  &:focus {
    padding-left: 15px;
  }
`;
const FormButton = styled.button`
  display: block;
  margin: 20px 0;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  background: #5a8dee;
`;
const FormRoutetext = styled.div`
  color: #333;
`;

const FormFieldError = styled.p`
  color: hsl(0, 88%, 50%);
  font-size: 0.9rem;
  margin-top: 2px;
  font-weight: 600;
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 15px;
  margin-bottom: 10px;
  border: 2px solid #e57373;
  border-radius: 5px;
`;
const AlertText = styled.p`
  color: hsl(0, 68%, 37%);
  font-weight: bold;
`;
const AlertCancelBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  background: transparent;
  color: darkred;
  cursor: pointer;
`;

export {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormRoutetext,
  FormFieldError,
  Alert,
  AlertText,
  AlertCancelBtn,
};
