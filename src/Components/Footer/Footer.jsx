import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_cont}>
      <div className={styles.footer_description}>
        <div>
          <h6>COMPANY</h6>

          <p>Carreers</p>
          <p>Newsroom</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h6>RESOURCES</h6>
          <p>Docs</p>
          <p>Support</p>
          <p>FAQs</p>
        </div>
        <div>
          <h6>OVERVIEW</h6>

          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>History</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
