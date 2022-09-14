import React, { Suspense } from 'react';
import './App.scss';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RouteError from './views/route-error/RouteError';
import NotFound from './views/not-found/NotFound';
import './scss/style.scss'
import DefaultLayout from './layouts/default-layout';
import appContentRouter from './routes';

const Login = React.lazy(() => import('./views/login/Login'))

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'home',
    element: <DefaultLayout />,
    children: [
      ...appContentRouter,
      {
        path: '',
        element: <Navigate to="dashboard" replace />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <RouteError />
  }
])

function App() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
