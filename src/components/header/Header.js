import React from "react";
import { useRef } from "react"
import "./header.css";
import { Link } from "react-router-dom";
import textlogo from "../../assets/textLogo.svg";

function Header() {

  const burger = useRef();
  const nawWrap = useRef();
  const handleNavOpen = () => {
    console.log(burger.current.classList)
    if(nawWrap.current.classList.contains('openNav')){
      console.log('open')
      nawWrap.current.classList.remove('openNav')
    } else {
      
      nawWrap.current.classList.add('openNav')
      console.log('close')
    }
  }

  return (
    <header>
      <div className="mobileNav">
      <img id="mobileLogo" alt="textLogo" src={textlogo} />
        <div ref={burger} onClick={handleNavOpen} className="burger">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <nav ref={nawWrap} className="navWrap">
        <img id="textLogo" alt="textLogo" src={textlogo} />
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/tables">Tables</Link>
        </h3>
        <h3>
          <Link to="/seating">Seating</Link>
        </h3>
        <h3>
          <Link to="/backDrops">Back Drops</Link>
        </h3>
        <h3>
          <Link to="/lighting">Lighting</Link>
        </h3>
        <h3>
          <Link to="/chalkBoards">Chalkboards & Signs</Link>
        </h3>
        <h3>
          <Link to="/linen">Linen & Decor</Link>
        </h3>
        <h3>
          <Link to="/floral">Floral</Link>
        </h3>
        <h3 className="altCTA">
          <Link to="/contact">Contact us</Link>
        </h3>
      </nav>
    </header>
  );
}

export default Header;
