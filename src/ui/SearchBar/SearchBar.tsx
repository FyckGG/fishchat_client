import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <input type="text" placeholder="Search"></input>
    </div>
  );
};

export default SearchBar;
