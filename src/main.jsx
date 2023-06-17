import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import Page_01 from './pages/01-hello-world';
import Page_02 from './pages/02-3d-text';
import Page_03 from './pages/03-blender-scene/index.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path='01-hello-world' element={<Page_01 />} />
      <Route path='02-3d-text' element={<Page_02 />} />
      <Route path='03-blender-scene' element={<Page_03 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
