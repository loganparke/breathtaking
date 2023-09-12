import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Contact,
  Home,
  ChalkBoards,
  Linen,
  PoleTents,
  Seating,
  Tables,
  BackDrops,
  Footer,
  Lighting,
  Floral,
} from "./components";

import farmHouseTable1 from "./assets/IMG_3154.jpg";
import farmHouseTable2 from "./assets/IMG_3138.jpg";
import farmHouseTable3 from "./assets/thumbnail_IMG_3078.jpg";

import "./App.css";
import Product from "./components/product/Product";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chalkBoards" element={<ChalkBoards />} />
          <Route path="/linen" element={<Linen />} />
          <Route path="/floral" element={<Floral />} />
          <Route path="/seating" element={<Seating />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/tables" element={<Tables />} />
          <Route
            path="/tables/farmHouse"
            element={
              <Product
                name="Farm House Table"
                imgs={[farmHouseTable1, farmHouseTable2, farmHouseTable3]}
                description="Elevate the charm of your wedding with our Rustic Elegance Farmhouse Table, a true centerpiece that seamlessly blends comfort and sophistication. Crafted from aged oak, this table captures the essence of a quaint countryside farmhouse while adding a touch of refinement to your event. Its sturdy construction ensures a seamless gathering point for your guests, whether for dining or simply enjoying each other's company. The natural wood grain and weathered finish create an inviting atmosphere that complements any wedding theme, from rustic barn weddings to vintage-inspired celebrations. Embrace the beauty of simplicity and create lasting memories around this timeless piece."
              />
            }
          />
          <Route path="/backDrops" element={<BackDrops />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
