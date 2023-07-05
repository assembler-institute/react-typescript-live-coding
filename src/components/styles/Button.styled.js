import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Button = styled.button`
  position: absolute;
  bottom: 6rem;
  width: 20.4375rem;
  height: 3.6875rem;
  border: 0;
  border-radius: 1rem;
  background: ${(props) => props.BtnColor};
  font-size: 1.2em;
  font-weight: 700;

  &:hover {
    background: #EF950D;
    transition: 0.2s;
  }
  &:active {
    background: #EFBD0D;
    transition: 0;
  }
`;

export const LinkButton = styled(Link)`
  position: absolute;
  bottom: 6rem;
  padding: 1.1rem 9rem;
  /* height: 3.6875rem; */
  border: 0;
  border-radius: 1rem;
  background: #EFBD0D;
  font-size: 1.2em;
  font-weight: 700;
  color: #000;
  text-decoration:0;

  &:hover {
    background: #EF950D;
    transition: 0.2s;
  }
  &:active {
    background: #EFBD0D;
    transition: 0;
  }
`;