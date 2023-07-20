import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
/* import reportWebVitals from './reportWebVitals'; */

/* import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; */
import './index.css';
import App from './App';
import PerfilPersonaje from './views/PerfilPersonaje';
import Home from './views/Home';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path ="home" element={<Home />}/>
      <Route path ="perfil" element={<PerfilPersonaje />}/>
    </Routes>
  </BrowserRouter>





)
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/perfil",
    element: <PerfilPersonaje/>,
  },
]); */

/* root.render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals(); */
