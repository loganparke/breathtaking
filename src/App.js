import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Contact,
  Home,
  ChalkBoards,
  Linen,
  Seating,
  Tables,
  BackDrops,
  Footer,
  Lighting,
  Floral,
} from "./components";

import "./App.css";
import Product from "./components/product/Product";

import farmHouseTable1 from "./assets/IMG_3154.jpg";
import farmHouseTable2 from "./assets/IMG_3138.jpg";
import farmHouseTable3 from "./assets/thumbnail_IMG_3078.jpg";

import rose1 from "./assets/flower9.jpg";
import hydrangeas1 from "./assets/flower13.jpg";

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
          <Route
            path="/floral/roses"
            element={
              <Product
                name="Roses"
                imgs={[rose1]}
                description="Elevate your wedding decor with our beautiful rose collection. These exquisite blooms are more than just flowers; they're a testament to the timeless beauty of love. Each rose exudes a natural grace that effortlessly complements any wedding theme. From classic whites to blush pinks and deep reds, our curated selection offers a palette as diverse as your love story. Whether adorning your tables, accentuating your ceremony, or gracing your bridal bouquet, these roses speak the language of romance. Embrace the everlasting allure of our Rose Collection and let your wedding bloom in unparalleled beauty."
              />
            }
          />
          <Route
            path="/floral/hydrangeas"
            element={
              <Product
                name="Hydrangeas"
                imgs={[hydrangeas1]}
                description="Preserve the essence of your love story with our Timeless Charm Preserved Hydrangeas. These hydrangeas are a testament to enduring love, capturing the moment in a bloom that will last a lifetime. Each petal is carefully preserved to retain its natural beauty, texture, and color, allowing you to treasure it long after your wedding day. Choose from a range of classic and muted tones, creating an everlasting keepsake that resonates with your heart. Whether gracing your bridal bouquet or adorning your venue, these preserved hydrangeas add a touch of timeless romance to your celebration."
              />
            }
          />

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
