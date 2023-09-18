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

import decorTable1 from "./assets/IMG_3015.jpg";
import decorTable2 from "./assets/IMG_3013.jpg";
import decorTable3 from "./assets/IMG_3010.jpg";

import rusticTable1 from "./assets/thumbnail_IMG_2998.jpg";

import rose1 from "./assets/flower9.jpg";
import hydrangeas1 from "./assets/flower13.jpg";

import sofa1 from "./assets/IMG_2562.jpg";
import sofa2 from "./assets/IMG_2564.jpg";
import sofa3 from "./assets/IMG_2565.jpg";
import sofa4 from "./assets/IMG_2612.jpg";

import modernSofa1 from "./assets/thumbnail_IMG_3513.jpg";

import chair1 from "./assets/headerImage.jpg";
import chair2 from "./assets/IMG_2523.jpg";

import chair3 from "./assets/IMG_2515.jpg";
import chair4 from "./assets/IMG_2506.jpg";

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
          <Route
            path="/seating/crossBackChair"
            element={
              <Product
                name="Cross Back Chair"
                imgs={[chair1, chair2]}
                description="This chair effortlessly marries the simplicity of farmhouse aesthetics with a touch of modern elegance. The natural wood grain and graceful curves of the cross back lend an air of authenticity to your wedding setting. Whether adorning a barn venue or enhancing an outdoor ceremony, this chair invites guests to experience the comfort and charm of a countryside gathering, creating an atmosphere of relaxed sophistication."
              />
            }
          />
          <Route
            path="/seating/chiavariChair"
            element={
              <Product
                name="Chiavari Chair"
                imgs={[chair3, chair4]}
                description="This chair exudes a sense of understated beauty, making it a versatile addition to any wedding theme. The neutral ivory hue complements a range of color palettes, allowing you to create a look that's uniquely yours. The delicately carved details and slender lines of the Chiavari style offer an exquisite backdrop for your celebration. Whether adorning a vintage-inspired affair or a modern, minimalist event, this chair provides a timeless canvas for your wedding vision."
              />
            }
          />
          <Route
            path="/seating/modernSofas"
            element={
              <Product
                name="modern Sofas"
                imgs={[modernSofa1]}
                description=" This sofa is a statement piece that exudes opulence and modern charm. The rich, plush velvet upholstery in deep jewel tone adds a pop of color and texture, creating a striking focal point for your event. Its sleek metal legs and clean lines offer a contemporary edge, making it a perfect choice for couples seeking to create a stylish and vibrant atmosphere. Whether placed in a chic urban venue or a modern industrial space, this sofa invites guests to experience the height of metropolitan sophistication."
              />
            }
          />
          <Route
            path="/seating/vintageSofas"
            element={
              <Product
                name="Vintage Sofas"
                imgs={[sofa1, sofa2, sofa3, sofa4]}
                description="This ensemble of vintage sofas embodies the opulence and refinement of a bygone era. Each piece features intricately carved wooden frames, adorned with delicate motifs that tell a story of artistry and craftsmanship. The sumptuous upholstery, reminiscent of lush damask fabrics, invites guests to experience the luxury of a royal affair. Whether arranged in an intimate lounge area or as focal points in grand event spaces, this set evokes an atmosphere of regal splendor, creating an unforgettable backdrop for your wedding."
              />
            }
          />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/tables" element={<Tables />} />
          <Route
            path="/tables/decorTable"
            element={
              <Product
                name="Decor Table"
                imgs={[decorTable1, decorTable2, decorTable3]}
                description="Elevate the charm of your wedding with our Rustic Elegance Farmhouse Table, a true centerpiece that seamlessly blends comfort and sophistication. Crafted from aged oak, this table captures the essence of a quaint countryside farmhouse while adding a touch of refinement to your event. Its sturdy construction ensures a seamless gathering point for your guests, whether for dining or simply enjoying each other's company. The natural wood grain and weathered finish create an inviting atmosphere that complements any wedding theme, from rustic barn weddings to vintage-inspired celebrations. Embrace the beauty of simplicity and create lasting memories around this timeless piece."
              />
            }
          />
          <Route
            path="/tables/rusticTable"
            element={
              <Product
                name="Rustic Table"
                imgs={[rusticTable1]}
                description="This table effortlessly blends the simplicity of rustic design with a touch of vintage allure. The distressed white finish and turned legs evoke a sense of history and authenticity, inviting guests to step back in time. Whether set amidst a field of wildflowers or adorned with delicate lace runners, this table offers a versatile foundation for crafting a wedding that speaks to the heart."
              />
            }
          />
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
