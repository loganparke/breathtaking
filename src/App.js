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

import woodTable1 from "./assets/IMG_20230916_154047.jpg";
import woodTable2 from "./assets/IMG_20230916_154042.jpg";

import rose1 from "./assets/flower9.jpg";
import rose2 from "./assets/flower4.jpg";
import rose3 from "./assets/flower5.jpg";
import rose4 from "./assets/flower6.jpg";
import rose5 from "./assets/flower7.jpg";
import rose6 from "./assets/IMG_20230917_205459.jpg";
import hydrangeas1 from "./assets/flower13.jpg";
import pampas1 from "./assets/IMG_3171.jpg";
import pampas2 from "./assets/pixelcut_.jpg";
import pampas3 from "./assets/IMG_3183.jpg";
import garland1 from "./assets/IMG_2594.jpg";
import garland2 from "./assets/IMG_2590.jpg";
import garland3 from "./assets/IMG_2592.jpg";
import garland4 from "./assets/IMG_2587.jpg";
import garland5 from "./assets/thumbnail_IMG_3521.jpg";
import garland6 from "./assets/thumbnail_IMG_3527.jpg";
import headCrown1 from "./assets/thumbnail_IMG_3364.jpg";
import headCrown2 from "./assets/thumbnail_IMG_3371.jpg";
import headCrown3 from "./assets/IMG_3046.jpg";
import babys1 from "./assets/flower12.jpg";
import babys2 from "./assets/IMG_20230917_191553.jpg";
import babys3 from "./assets/IMG_20230917_191544.jpg";
import spray1 from "./assets/flower11.jpg";
import spray2 from "./assets/IMG_20230917_202814.jpg";

import sofa1 from "./assets/IMG_2562.jpg";
import sofa2 from "./assets/IMG_2564.jpg";
import sofa3 from "./assets/IMG_2565.jpg";
import sofa4 from "./assets/IMG_2612.jpg";

import modernSofa1 from "./assets/thumbnail_IMG_3513.jpg";
import modernSofa2 from "./assets/IMG_20230917_174723.jpg";

import chair1 from "./assets/headerImage.jpg";
import chair2 from "./assets/IMG_2523.jpg";
import chair3 from "./assets/IMG_2515.jpg";
import chair4 from "./assets/IMG_2506.jpg";

import glassSign1 from "./assets/IMG_3262.jpg";
import glassSign2 from "./assets/IMG_3270.jpg";
// import glassSign3 from "./assets/IMG_3274.jpg";
import meshSign1 from "./assets/IMG_3352.jpg";
import meshSign2 from "./assets/IMG_3349.jpg";
import meshSign3 from "./assets/IMG_3344.jpg";
import woodSign1 from "./assets/IMG_3334.jpg";
import woodSign2 from "./assets/IMG_3337.jpg";
import chalkSign1 from "./assets/IMG_3409.jpg";
import chalkSign2 from "./assets/thumbnail_IMG_3416.jpg";
import easel1 from "./assets/IMG_3306.jpg";
import easel2 from "./assets/IMG_3302.jpg";

import floralDrop from "./assets/thumbnail_IMG_3482.jpg";
import drapedDrop from "./assets/IMG_3487.jpg";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chalkBoards" element={<ChalkBoards />} />
          <Route
            path="/chalkBoards/glassSigns"
            element={
              <Product
                name="Glass Signs"
                imgs={[glassSign1, glassSign2]}
                description=" This sign features a sleek, clear glass cabinet door that provides a clean and minimalist backdrop for your chosen message. The simplicity of the design allows it to seamlessly complement any wedding theme, while the modern font and layout add a touch of contemporary elegance. Whether used for directional signs or love notes, this sign brings a sense of modern sophistication to your celebration."
              />
            }
          />
          <Route
            path="/chalkBoards/meshSigns"
            element={
              <Product
                name="Mesh Signs"
                imgs={[meshSign1, meshSign3, meshSign2]}
                description=" These unique signs give a rustic and homey feeling to any wedding. The slightly worn look serves as a perfect canvas for your message, evoking a sense of free-spirited beauty. Whether used to frame your vows or to provide a backdrop for cherished photos, this creation invites guests to step into a world of artistic expression and natural elegance."
              />
            }
          />
          <Route
            path="/chalkBoards/woodSigns"
            element={
              <Product
                name="Wooden Signs"
                imgs={[woodSign1, woodSign2]}
                description=" These unique signs give a rustic and home feeling to any wedding. The slightly worn look serves as a perfect canvas for your message, evoking a sense of free-spirited beauty. Whether used to frame your vows or to provide a backdrop for cherished photos, this creation invites guests to step into a world of artistic expression and natural elegance."
              />
            }
          />
          <Route
            path="/chalkBoards/chalkboardSigns"
            element={
              <Product
                name="chalkboards"
                imgs={[chalkSign1, chalkSign2]}
                description="Add a touch of rustic charm to your wedding with our rustic Wooden frame chalkboards. The generous writing surface of our chalkboards allows for creative displays, from welcome messages to seating charts and love notes. Whether placed at the entrance of your venue or as a charming addition to your reception area, these chalkboards invite guests to engage and interact with your wedding celebration."
              />
            }
          />
          <Route
            path="/chalkBoards/easels"
            element={
              <Product
                name="Easel Sign Stands"
                imgs={[easel1, easel2]}
                description="Add a touch of natural charm to your wedding with our wooden easels. Crafted from sturdy wood, these easels exude warmth and character. The natural finish allows for a seamless blend with a variety of wedding themes, from countryside rustic to boho chic. Whether used to display seating charts, welcome signs, or custom messages, these easels provide a versatile and stylish solution for showcasing important details at your event."
              />
            }
          />

          <Route path="/floral" element={<Floral />} />
          <Route
            path="/floral/roses"
            element={
              <Product
                name="Roses"
                imgs={[rose1, rose2, rose3, rose4, rose5, rose6]}
                description="Elevate your wedding decor with our beautiful rose collection. These exquisite blooms are more than just flowers; they're a testament to the timeless beauty of love. Each rose exudes a natural grace that effortlessly complements any wedding theme. From classic whites to blush pinks and deep reds, our curated selection offers a palette as diverse as your love story. Whether adorning your tables, accentuating your ceremony, or gracing your bridal bouquet, these roses speak the language of romance. Embrace the everlasting allure of our Rose Collection and let your wedding bloom in unparalleled beauty."
              />
            }
          />
          <Route
            path="/floral/headCrowns"
            element={
              <Product
                name="Floral Head Crowns"
                imgs={[headCrown1, headCrown2, headCrown3]}
                description="These crowns are intricately crafted with a selection of blooms, including roses, baby's breath, and greenery. The soft color palette and natural texture create a dreamy and romantic accessory for the bride or bridesmaids. Whether worn with loose waves or an elegant updo, these crowns invite you to step into a world of timeless beauty and whimsical romance."
              />
            }
          />
          <Route
            path="/floral/garlands"
            element={
              <Product
                name="Garlands"
                imgs={[
                  garland1,
                  garland2,
                  garland3,
                  garland4,
                  garland5,
                  garland6,
                ]}
                description="This collection features an assortment of garlands crafted from a beautiful selection of greenery. The combination of textures and shades creates a dynamic and visually striking display, perfect for adding a little pop to your wedding. Whether used individually for a touch of refinement or grouped together for a dramatic effect, this ensemble invites guests to experience the timeless beauty and natural elegance of your event."
              />
            }
          />
          <Route
            path="/floral/babysBreath"
            element={
              <Product
                name="Baby's-Breath"
                imgs={[babys1, babys2, babys3]}
                description="Capture the charm of a countryside celebration with our Rustic Baby's Breath Cluster. This cluster features a gathering of baby's breath stems, creating a warm and inviting display. The beautiful tones and organic composition make it a perfect fit for rustic or barn weddings. Whether used in mason jar centerpieces, as part of a bouquet, or to adorn ceremony spaces, this cluster invites guests to experience the cozy and welcoming atmosphere of a rustic celebration."
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
          <Route
            path="/floral/sprays"
            element={
              <Product
                name="Sprays"
                imgs={[spray1, spray2]}
                description="Our two sprays consist of a beautiful Eucalyptus Branch and Italian Ruscus vine. Capture the essence of enduring beauty with our spray selection."
              />
            }
          />
          <Route
            path="/floral/pampasGrass"
            element={
              <Product
                name="Pampas Grass"
                imgs={[pampas1, pampas3, pampas2]}
                description="Infuse your wedding with a touch of charm with our pampas grass centerpiece. This arrangement features a lush bundle of pampas grass plumes, creating a stunning and textural focal point. The soft, neutral tones and feathery texture add a sense of relaxed elegance to your event. Whether placed in a vintage-inspired setting or as a statement piece in a modern venue, this centerpiece invites guests to experience the natural beauty and free-spirited vibe of celebration."
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
                name="Modern Sofas"
                imgs={[modernSofa1, modernSofa2]}
                description=" These sofas are a statement piece that exudes opulence and modern charm. The rich and bright colors create a striking focal point for your event, making it a perfect choice for couples seeking to create a stylish and vibrant atmosphere. Whether placed in a chic urban venue or a modern industrial space, these sofas invite guests to experience the height of metropolitan sophistication."
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
          <Route
            path="/tables/woodTable"
            element={
              <Product
                name="Wood Side Table"
                imgs={[woodTable1, woodTable2]}
                description="Elevate the charm of your wedding with our Rustic Elegance Farmhouse Table, a true centerpiece that seamlessly blends comfort and sophistication. Crafted from aged oak, this table captures the essence of a quaint countryside farmhouse while adding a touch of refinement to your event. Its sturdy construction ensures a seamless gathering point for your guests, whether for dining or simply enjoying each other's company. The natural wood grain and weathered finish create an inviting atmosphere that complements any wedding theme, from rustic barn weddings to vintage-inspired celebrations. Embrace the beauty of simplicity and create lasting memories around this timeless piece."
              />
            }
          />
          <Route path="/backDrops" element={<BackDrops />} />
          <Route
            path="/backDrops/floralBackdrop"
            element={
              <Product
                name="Floral Backdrop"
                imgs={[floralDrop]}
                description="This ethereal creation features a cascade of delicate blooms, evoking the grace and beauty of a fairytale garden. The soft color palette and flowing arrangement create a sense of movement and enchantment that will transport your guests to a world of romance and magic. Whether used as a backdrop for your vows or as a stunning feature for your reception, this cascading backdrop invites guests to immerse themselves in the enchanting atmosphere of your wedding day."
              />
            }
          />
          <Route
            path="/backDrops/DrapedBackdrop"
            element={
              <Product
                name="Draped Backdrop"
                imgs={[drapedDrop]}
                description="This exquisite creation features layers of flowing fabric that cascade gracefully, creating a dreamy and romantic atmosphere. The soft, billowing texture provides a stunning backdrop for your ceremony, sweetheart table, or photo booth. Whether in an intimate garden setting or an opulent ballroom, this draped backdrop invites guests to step into a world of timeless elegance and enchantment."
              />
            }
          />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/linen" element={<Linen />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
