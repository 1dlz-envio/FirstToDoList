import React from "react";
import classes from './Header.module.css'

const Header = () => {
      return (
            <section className={classes.head}>
                  <span className={classes.head__text}>Your ToDo List</span>
            </section>
      )
}

export default Header;
