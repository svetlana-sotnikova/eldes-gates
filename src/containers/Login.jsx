import styled from '@emotion/styled';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Layout } from '../components';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  localStorage['login'] = JSON.stringify({ login });

  const handleChangePhone = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendForm = (event) => {
    event.preventDefault();

    axios
      .post('/api/eldes/login', {
        login: login,
        psw: password,
      })
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error.msg);
        } else {
          if (typeof window !== 'undefined') {
            localStorage['deviceList'] = JSON.stringify(response.data);
          }
          router.push('/');
        }
      })
      .catch((error) => {
        console.error(error);

        try {
          setError(JSON.stringify(error.data, null, 2));
        } catch {
          setError(error);
        }
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
            value={login}
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

        <Error>{error}</Error>

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

const Error = styled.p`
  color: red;
`;
