import { Route, Routes as RouteProvider } from 'react-router-dom';
import { useUser } from '../contexts/user';

import Home from '../pages/home';
import Login from '../pages/login';

export function Routes() {
  const { user } = useUser();
  return (
    <RouteProvider>
      {user ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}
    </RouteProvider>
  );
}
