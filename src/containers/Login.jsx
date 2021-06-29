import styled from '@emotion/styled';
import { Formik } from 'formik';
import { Button, Layout } from '../components';

export const Login = () => (
  <Layout title="Eldes Gates">
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
        <form onSubmit={handleSubmit}>
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
        </form>
      )}
    />
  </Layout>
);

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
