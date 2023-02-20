import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

const SearchBar = (props: { changeSearchText: Function }) => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <div className={styles.search_bar}>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          props.changeSearchText(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
