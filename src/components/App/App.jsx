import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import css from './App.module.css';

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));


export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
      dispatch(refreshUser());
  }, [dispatch]);
 
  return isRefreshing ? (
    <b>Please wait, updating user info...</b>) : (
      <div className={css.container}>
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={RegistrationPage}/>} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={LoginPage} />}/>
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={ContactsPage} />}/>
        </Routes>
      </Suspense>
        </Layout>
        </div>
  );
}