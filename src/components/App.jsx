import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from 'Layouts/MainLayout';

const HomePage = lazy(() => import('pages/Home/Home'));
const PostPage = lazy(() => import('pages/Post/Post'));

export const App = () => {
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
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<>Error page</>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
