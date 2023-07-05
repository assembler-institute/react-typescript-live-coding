import LoginForm from "../../components/LoginForm/LoginForm"
import { Button } from "../../components/styles/Button.styled"
import { Main } from "../../components/styles/Containers.styled"


const Login = () => {
  return (
    <>
    <Main>
      <Button>Sign in</Button>
      <LoginForm />
    </Main>
    </>
  )
}

export default Login