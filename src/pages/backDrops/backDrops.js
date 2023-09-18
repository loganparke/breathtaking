import { Link } from "react-router-dom";
import "./backDrops.css";

function BackDrops() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/backDrops/floralBackdrop">
        <h3 className="productLink" id="backdrop1">
          <p>
            Floral <br></br> Backdrop
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/backDrops/drapedBackdrop">
        <h3 className="productLink" id="backdrop2">
          <p>
            Draped <br></br> Backdrop
          </p>
        </h3>
      </Link>
    </div>
  );
}

export default BackDrops;
