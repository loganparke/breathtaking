import { Link } from "react-router-dom";
import "./ChalkBoards.css";

function ChalkBoards() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/chalkBoards/glassSigns">
        <h3 className="productLink" id="chalk1">
          <p>
            Glass <br></br> Signs
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/chalkBoards/meshSigns">
        <h3 className="productLink" id="chalk2">
          <p>
            Mesh <br></br> Signs
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/chalkBoards/woodSigns">
        <h3 className="productLink" id="chalk3">
          <p>
            Wooden <br></br> Signs
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/chalkBoards/chalkboardSigns">
        <h3 className="productLink" id="chalk4">
          <p>
            chalkboards <br></br>
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/chalkBoards/easels">
        <h3 className="productLink" id="chalk5">
          <p>
            Easel Sign<br></br> Stands
          </p>
        </h3>
      </Link>
    </div>
  );
}

export default ChalkBoards;
