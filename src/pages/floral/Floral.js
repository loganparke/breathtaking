import { Link } from "react-router-dom";
import "./floral.css";

function Floral() {
  return (
    <div>
      <Link className="noUnderline" to="/floral/roses">
        <h3 className="productLink" id="roses">
          <p>Roses</p>
        </h3>
      </Link>
      <Link className="noUnderline" to="/floral/hydrangeas">
        <h3 className="productLink" id="hydrangeas">
          <p>Hydrangeas</p>
        </h3>
      </Link>
    </div>
  );
}

export default Floral;
