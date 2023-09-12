import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1>Make It Breathtaking</h1>
      <section>
        <Link to="" className="footerLink">
          MakeItBreathtaking@gmail.com
        </Link>
        <Link
          to="https://www.facebook.com/Makeitbreathtaking"
          target="_blank"
          className="footerLink sideBorder"
        >
          Facebook
        </Link>
        <Link
          to="https://www.instagram.com/makeitbreathtaking/"
          target="_blank"
          className="footerLink sideBorder"
        >
          Instagram
        </Link>
        <Link to="" className="footerLink">
          (435)-740-0352
        </Link>
      </section>
    </div>
  );
}

export default Footer;
