import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filter/filterSelectors";
import { changeFilter } from "../../redux/filter/filtersSlice";

export default function SearchBox() {
  const filterValue = useSelector(selectNameFilter);
  const findFieldId = useId();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={findFieldId}>Find contacts by name</label>
      <input
        value={filterValue}
        id={findFieldId}
        onChange={handleChange}
      ></input>
    </div>
  );
}
