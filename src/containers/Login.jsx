import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import { Button, Layout } from '../components';

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendForm = (event) => {
    event.preventDefault();

    axios
      .post('https://security.eldes.lt/api1?gatelogin=1', {
        login: phone,
        psw: password,
      })
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Layout title="Eldes Gates">
      <form onSubmit={sendForm}>
        <Label>
          Phone number
          <Input
            name="phone"
            type="tel"
            inputmode="tel"
            required
            value={phone}
            onChange={handleChangePhone}
          />
          {/* {errors.phone && touched.phone && errors.phone} */}
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChangePassword}
          />
          {/* {errors.password && touched.password && errors.password} */}
        </Label>

        <Button type="submit">Login</Button>
      </form>
    </Layout>
  );
};

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
