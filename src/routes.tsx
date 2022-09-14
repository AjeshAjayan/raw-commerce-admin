import React from 'react';
import { RouteObject } from 'react-router-dom';

const Profile = React.lazy(() => import('./views/profile/Profile'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const RouteError = React.lazy(() => import('./views/route-error/RouteError'))


const appContentRouter: RouteObject[] = [
  {
    path: 'dashboard',
    element: <Dashboard />,
    errorElement: <RouteError />
  },
  {
    path: 'profile',
    element: <Profile />,
    errorElement: <RouteError />
  },
];

export default appContentRouter;
