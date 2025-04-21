import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation({ linkClassName }) {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <NavLink className={linkClassName} to="/">
        Home
      </NavLink>
      {isUserLoggedIn && (
        <NavLink className={linkClassName} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
}
