import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import UploadDNA from './pages/UploadDNA.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <UploadDNA />,
  },
]);
