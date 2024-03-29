import { Link } from "react-router-dom";
import "./floral.css";

function Floral() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline" to="/floral/roses">
        <h3 className="productLink" id="roses">
          <p>Roses</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/floral/hydrangeas">
        <h3 className="productLink" id="hydrangeas">
          <p>Hydrangeas</p>
        </h3>
      </Link>

      <Link className="noUnderline tableLink" to="/floral/pampasGrass">
        <h3 className="productLink" id="pampas">
          <p>
            Pampas <br></br>Grass
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/floral/garlands">
        <h3 className="productLink" id="garlands">
          <p>
            Floral <br></br> Garlands
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/floral/babysBreath">
        <h3 className="productLink" id="babysBreath">
          <p>Baby's-breath</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/floral/sprays">
        <h3 className="productLink" id="sprays">
          <p>Sprays</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/floral/headCrowns">
        <h3 className="productLink" id="headCrowns">
          <p>
            Floral<br></br> Head Crowns
          </p>
        </h3>
      </Link>
    </div>
  );
}

export default Floral;
