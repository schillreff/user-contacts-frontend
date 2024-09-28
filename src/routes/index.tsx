import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const RoutesMain = () => (
  <Routes>
    <Route path='*' element={<Navigate replace to='/login' />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Routes>
);
