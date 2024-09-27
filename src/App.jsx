import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import SinglePrint from './pages/SinglePrint.jsx';
import CdTemplate from './pages/CdTemplate.jsx';
import SpotifyTemplate from './pages/SpotifyTemplate.jsx';
import Mockups from './pages/Mockups.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "home",
    element: <HomePage />
  },
  {
    path: "aboutus",
    element: <AboutUs />
  },
  {
    path: "contactus",
    element: <ContactUs />
  },
  {
    path: "singleprint",
    element: <SinglePrint />
  },
  {
    path: "cdtemplate",
    element: <CdTemplate />
  },
  {
    path: "spotifytemplate",
    element: <SpotifyTemplate />
  },
  {
    path: "mockups",
    element: <Mockups />
  }
]);


function App() {
  return (
  <div>
    <RouterProvider router={router} />
  </div>
  );
}
export default App
