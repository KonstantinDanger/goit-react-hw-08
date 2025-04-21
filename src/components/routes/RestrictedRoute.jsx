import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ toPage, element }) {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  return <>{!isUserLoggedIn ? element : <Navigate to={toPage} />}</>;
}
