import "./App.css";

import Layout from "../Layout/Layout";

import { selectIsRefreshing } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";

function App() {
  const isUserRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isUserRefreshing ? <div>Refreshing user...</div> : <Layout />;
}

export default App;
