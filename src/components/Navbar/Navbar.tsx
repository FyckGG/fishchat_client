import React, { ReactNode } from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

const Navbar = (props: { children: ReactNode }) => {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.search_bar}>
        <SearchBar />
      </div> */}
      {props.children}
      {/* <div className={styles.exit_button}></div> */}
    </div>
  );
};

export default Navbar;
