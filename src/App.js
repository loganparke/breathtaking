import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Contact,
  Home,
  LargeDetails,
  Linen,
  PoleTents,
  Seating,
  SmallDetails,
  Tables,
  TableTop,
  TermsCons,
} from "./components";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/make-it-breathtaking" element={<Home />} />
          <Route path="/make-it-breathtaking/contact" element={<Contact />} />
          <Route
            path="/make-it-breathtaking/largeDetails"
            element={<LargeDetails />}
          />
          <Route path="/make-it-breathtaking/linen" element={<Linen />} />
          <Route
            path="/make-it-breathtaking/poleTents"
            element={<PoleTents />}
          />
          <Route path="/make-it-breathtaking/seating" element={<Seating />} />
          <Route
            path="/make-it-breathtaking/smallDetails"
            element={<SmallDetails />}
          />
          <Route path="/make-it-breathtaking/tables" element={<Tables />} />
          <Route path="/make-it-breathtaking/tableTop" element={<TableTop />} />
          <Route
            path="/make-it-breathtaking/termsCons"
            element={<TermsCons />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
