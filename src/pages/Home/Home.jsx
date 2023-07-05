import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/styles/Button.styled';
import { Main } from '../../components/styles/Containers.styled';
import { Logo, SpanLogo } from '../../components/styles/Text.styled';

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Main>
				<Logo>
					<SpanLogo>Assembler</SpanLogo>Sound
				</Logo>
				<Button BtnColor='#EFBD0D' onClick={() => navigate('login')}>Login</Button>
			</Main>
		</>
	);
};

export default Home;
