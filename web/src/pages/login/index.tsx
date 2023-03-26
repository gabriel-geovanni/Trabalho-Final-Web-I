import React from 'react';
import { useUser } from '../../contexts/user';
// import GoogleLogin from 'react-google-login';

import { ButtonLoginSocial, Container } from './styles';

const Login: React.FC = () => {
  const { setUser } = useUser();

  return (
    <Container>
      <div>
        <h1>Login</h1>
        <h2>Faça login com seu e-mail da UFOP</h2>
        <ButtonLoginSocial
          client_id={'832409312988-6t8rm3772e0adufv0mmnek89om5oud3t.apps.googleusercontent.com' || ''}
          scope="https://www.googleapis.com/auth/userinfo.email"
          onResolve={({ data }) => {
            if (data) {
              setUser(data);
            }
          }}
          onReject={console.log}
        >
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
        </ButtonLoginSocial>
      </div>
    </Container>
  );
};

export default Login;
