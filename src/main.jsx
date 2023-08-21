import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
const Page_01 = lazy(() => import('./pages/01-mirror-cabinet'));
const Page_02 = lazy(() => import('./pages/02-3d-text'));
const Page_03 = lazy(() => import('./pages/03-blender-scene/index.jsx'));
const Page_04 = lazy(() => import('./pages/04-chess-landing/index.jsx'));
const Page_05 = lazy(() => import('./pages/05-portfolio/index.jsx'));
const Page_05_Browser = lazy(() =>
  import('./pages/05-portfolio-screen/index.jsx')
);
const Page_06 = lazy(() => import('./pages/06-marble-game/index.jsx'));
const Page_07 = lazy(() => import('./pages/07-shader-art/index.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path='01-mirror-cabinet' element={<Page_01 />} />
      <Route path='02-3d-text' element={<Page_02 />} />
      <Route path='03-blender-scene' element={<Page_03 />} />
      <Route path='04-chess-landing' element={<Page_04 />} />
      <Route path='05-portfolio' element={<Page_05 />} />
      <Route path='05-portfolio-screen' element={<Page_05_Browser />} />
      <Route path='06-marble-game' element={<Page_06 />} />
      <Route path='07-shader-art' element={<Page_07 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
