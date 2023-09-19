import { Link } from "react-router-dom";
import "./linen.css";

function Linen() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/linen/candleStand">
        <h3 className="productLink" id="linen1">
          <p>
            Candle <br></br> Stand
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/linen/linens">
        <h3 className="productLink" id="linen2">
          <p>Linens</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/linen/vases">
        <h3 className="productLink" id="linen3">
          <p>
            Vases <br></br>
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/linen/poufs">
        <h3 className="productLink" id="linen4">
          <p>
            Poufs <br></br>
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/linen/cardBox">
        <h3 className="productLink" id="linen5">
          <p>
            Card <br></br> Box
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/linen/largeLanterns">
        <h3 className="productLink" id="linen6">
          <p>
            Large <br></br> Lanterns
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/linen/servingPlaters">
        <h3 className="productLink" id="linen7">
          <p>
            Serving <br></br> Platers
          </p>
        </h3>
      </Link>
    </div>
  );
}

export default Linen;
