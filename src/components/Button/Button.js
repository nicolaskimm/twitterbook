import React from "react";
import styles from "./Button.module.scss";

const Button = ({ linkButton, href, children }) => (
  <>
    {linkButton ? (
      <a className={styles.button} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <button type="submit" className={styles.button}>
        {children}
      </button>
    )}
  </>
);

export default Button;
