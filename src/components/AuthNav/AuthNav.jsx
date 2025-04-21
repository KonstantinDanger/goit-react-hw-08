import { NavLink } from "react-router-dom";

export default function AuthNav({ linkClassName }) {
  return (
    <div>
      <NavLink className={linkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClassName} to="/login">
        Login
      </NavLink>
    </div>
  );
}
