import { Routes, Route, Navigate } from 'react-router-dom';
import List from './components/main/List';
import Edit from './components/edit/Edit';
import { useSelector } from 'react-redux';
import InvalidUrl from './components/default_components/invalidUrl/invalidUrl';
import SignInForm from './components/account/not_authenticated/SignInForm';


export default function UserRoutes() {
  let isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Routes basename='/'>
      <Route
        element={
          <PrivateRoute>
            <List />
          </PrivateRoute>
        }
        path='/list'
      />
      <Route
        element={
          <PrivateRoute>
            <Edit />
          </PrivateRoute>
        }
        path='/edit'
      />
      <Route element={<SignInForm />} path='/login' />
      <Route element={<InvalidUrl />} path='*' />
    </Routes>
  );

  function PrivateRoute({ children }) {
    return isAuth ? children : <Navigate to='/login' />;
  }
}
