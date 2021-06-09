import styled from '@emotion/styled';
import { Formik } from 'formik';
import { Root } from '../components';

export const Login = () => (
  <Root>
    <Container>
      <Formik
        initialValues={{ phone: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
        children={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <H1>Eldes Gates</H1>

              <Label>
                Phone number
                <Input
                  name="phone"
                  type="tel"
                  inputmode="tel"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone && errors.phone}
              </Label>

              <Label>
                Password
                <Input
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </Label>

              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          </FormContainer>
        )}
      />
      <Footer href="#">Feature request</Footer>
    </Container>
  </Root>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: aliceblue;
  min-height: 100vh;
  padding: 0.5em 1em;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  margin: 1em 0;
`;

const FormContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const Form = styled.form`
  flex-grow: 0;
  flex-basis: 300px;
  flex-shrink: 1;
`;

const Label = styled.label`
  display: block;
  margin: 1em 0;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  color: inherit;
  box-sizing: border-box;
  background: white;
  border-radius: 8px;
  border: 1px solid lightgray;
  margin: 0.5em 0;
  padding: 0.75em 1em;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  font: inherit;
  border-radius: 8px;
  border: none;
  padding: 0.75em 2em;
  margin: 2em 0;
  color: white;
  background: blue;
`;

const Footer = styled.a`
  text-align: center;
  margin: 0;
  font-size: 0.75em;
  padding: 0.5em;
  width: 100%;
  color: inherit;
`;
