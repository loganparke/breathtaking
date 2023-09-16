import { Link } from "react-router-dom";
import "./contact.css";

function Contact() {
  return (
    <div>
      <h1 className="head1">Contact Us</h1>
      <div className="contactWrap">
        <Link to="mailto:MakeItBreathtaking@gmail.com" className="contactItem">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojHbNiDtC8IgdZEPTuWXsf-6rFtIKJtI9xw&usqp=CAU" />
          <p>Email</p>
        </Link>
        <Link
          target="_blank"
          to="https://www.facebook.com/Makeitbreathtaking"
          className="contactItem"
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mO-zyrkgQG3E4QeIZnxuL2KjWD5ZPiXrIg&usqp=CAU" />
          <p>Facebook</p>
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/makeitbreathtaking/"
          className="contactItem"
        >
          <img src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000" />
          <p>Instagram</p>
        </Link>
        <Link
          to="https://www.facebook.com/Makeitbreathtaking"
          className="contactItem"
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbEkQLsaEa-exjfHciKrP8RbpEWbRRMF4mQ&usqp=CAU" />
          <p>(435)-740-0352</p>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
