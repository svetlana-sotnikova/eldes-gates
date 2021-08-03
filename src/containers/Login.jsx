import styled from '@emotion/styled';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Layout } from '../components';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  if (typeof window !== 'undefined') {
    localStorage.removeItem('deviceList');
  }

  const handleChangePhone = (event) => {
    setLogin(event.target.value);
    setError(null);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setError(null);
  };

  const sendForm = (event) => {
    event.preventDefault();
    setIsLoading(true);

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
            localStorage['login'] = JSON.stringify(login);
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
      })
      .finally(() => {
        setIsLoading(false);
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

        {error && <Error>{error}</Error>}

        <Button disabled={isLoading} type="submit">
          {isLoading ? 'loading…' : 'Login'}
        </Button>
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
