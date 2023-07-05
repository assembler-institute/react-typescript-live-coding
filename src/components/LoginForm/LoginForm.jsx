import { MainSession} from "../styles/Containers.styled"
import { Form, FormSection, Label, Input } from "../styles/Form.styled"
import { SpanLogo, Title } from "../styles/Text.styled"

const LoginForm = () => {
  return (

    <MainSession>
            <Form>
              <Title>Hello again!</Title>
              <FormSection>
                <Label>email</Label>
                <Input type="email" name="email" />
              </FormSection>
              <FormSection>
                <Label>password</Label>
                <Input type="password" name="password" />
                <SpanLogo className="">Forgot your password?</SpanLogo>
              </FormSection>
            </Form>
      </MainSession>
  )
}

export default LoginForm