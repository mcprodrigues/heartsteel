import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './utils/GlobalStyles.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home.jsx";
import Aphelios from "./routes/Aphelios.jsx";
import Ezreal from "./routes/Ezreal.jsx";
import Ksante from "./routes/Ksante.jsx";
import Sett from "./routes/Sett.jsx";
import Yone from "./routes/Yone.jsx";
import Kayn from "./routes/Kayn.jsx";

const router = createBrowserRouter ([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/heartsteel/",
        element: <Home />
      },
      {
        path: "/heartsteel/aphelios",
        element: <Aphelios />
      },
      {
        path: "/heartsteel/ezreal",
        element: <Ezreal />
      },
      {
        path: "/heartsteel/ksante",
        element: <Ksante />
      },
      {
        path: "/heartsteel/sett",
        element: <Sett />
      },
      {
        path: "/heartsteel/yone",
        element: <Yone />
      },
      {
        path: "/heartsteel/kayn",
        element: <Kayn />
      },
    
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
