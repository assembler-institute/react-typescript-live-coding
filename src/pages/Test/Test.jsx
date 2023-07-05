import { styled } from 'styled-components';
import { Header } from '../../components/styles/header.styled';

const Test = () => {

  const ContainerPlus = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* height: 100vh; */
    `;

const Container = styled.section`
height: calc(100vh - 16px);

		display: flex;
		justify-content: center;
		align-items: center;
    /* overflow: hidden; */
    /* height: 100%; */
	`;

	// const Title = styled.h1`
	// 	color: greenyellow;
	// 	/* text-align: center; */
	// 	font-size: 2rem;
	// 	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
	// 		sans-serif;
	// `;

	return (
		<ContainerPlus>
    <Container>
			<Header orangeTitle coolPadding>Home</Header>
			<Header bg='red'>Home</Header>
			<Header orangeTitle >Home</Header>
    </Container>
		</ContainerPlus>
	);
};

export default Test;
