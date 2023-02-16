import React from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import ExitButton from "../../ui/ExitButton/ExitButton";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.search_bar}>
        <SearchBar />
      </div>
      <div className={styles.exit_button}>
        <ExitButton />
      </div>
    </div>
  );
};

export default Navbar;
