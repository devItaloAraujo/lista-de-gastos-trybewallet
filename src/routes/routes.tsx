import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/carteira" element={ <Wallet /> } />
    </Routes>
  );
}

export default Router;
