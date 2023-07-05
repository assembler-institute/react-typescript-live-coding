import { styled } from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	/* background-image: url('src/assets/images/background-black.jpg'); */
`;

export const MainSession = styled(Main)`
background-image: url('src/assets/images/background-black.jpg');
width: 100%
`;