import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import RootLayout from './RootLayout';
import Home from './home';
import ProjectDetail from './projectDetails';
import AboutMe from './components/about';
import ProjectDetail2 from './projectDetails2';
import ProjectDetail3 from './projectDetails3';
import ProjectDetail4 from './projectDetails4';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutMe />,
      },
      {
        path: '/fithub',
        element: <ProjectDetail />,
      },
      {
        path: '/digiadgenda',
        element: <ProjectDetail2 />,
      },
      {
        path: '/museshop',
        element: <ProjectDetail3 />,
      },
      {
        path: '/rockarthub',
        element: <ProjectDetail4 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);