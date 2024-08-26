import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import ServicesDetail from "./components/subComponents/services/ServicesDetail.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="services/:id" element={<ServicesDetail />} />
      {/* <Route path='about' element={<About/>} /> */}
      {/* <Route path='users/:id' element={<User/>} /> */}
      <Route path="*" element={<h1>404 Page Not Found!</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
