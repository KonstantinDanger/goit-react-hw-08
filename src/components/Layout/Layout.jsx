import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import PrivateRoute from "../routes/PrivateRoute";
import RestrictedRoute from "../routes/RestrictedRoute";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          path="/contacts"
          element={<PrivateRoute toPage="/login" element={<ContactsPage />} />}
        ></Route>

        <Route
          path="/register"
          element={
            <RestrictedRoute
              toPage="/contacts"
              element={<RegistrationPage />}
            />
          }
        ></Route>

        <Route
          path="/login"
          element={
            <RestrictedRoute toPage="/contacts" element={<LoginPage />} />
          }
        ></Route>

        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}
