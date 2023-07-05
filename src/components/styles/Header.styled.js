import { styled } from "styled-components";

export const Header = styled.h1`
  padding: ${({coolPadding}) => coolPadding ? '1rem' : '3rem'};
  color: blue;
  /* background-color: red; */
  /* background-color: ${({bg}) => bg}; */
  background-color: ${({orangeTitle}) => orangeTitle ? 'brown' : ''};
  /* background-color: ${({theme}) => theme.colors.paragraph}; */
  `;