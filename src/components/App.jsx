import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from 'Layouts/MainLayout';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { useEffect } from 'react';
import { refreshUser } from 'Redux/auth/operations';

const HomePage = lazy(() => import('pages/Home/Home'));
const PostPage = lazy(() => import('pages/Post/Post'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const RegisterPage = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<>Page is loading...</>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<>Page is loading...</>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route path="/hello" element={<div>Hello world</div>} />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegisterPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/posts/:id"
              element={
                <ProtectedRoute>
                  <PostPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<>Error page</>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
