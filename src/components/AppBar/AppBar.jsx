import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

export default function AppBar() {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.bar}>
      <Navigation linkClassName={css.link} />
      {isUserLoggedIn ? <UserMenu /> : <AuthNav linkClassName={css.link} />}
    </div>
  );
}
