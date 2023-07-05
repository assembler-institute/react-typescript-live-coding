import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  
`;

export const Label = styled.label`
  position: absolute;
  top: .4rem;
  left: .8rem;
  font-size: .95rem;
`;

export const Input = styled.input`
	padding: 1rem 0 0 .8rem;
  margin: 0 0 1rem 0;
  width: 21rem;
  height: 3.3rem;
  border: 0;
  border-radius: .6rem;
  background: #fefefe70;
  color: #fefefe;
  font-size: 1.2rem;
`;