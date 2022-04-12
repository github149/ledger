
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Charts from "./views/Charts"
import Money from "./views/Money"
import Tags from "./views/Tags"
import NoMatch  from "views/Nomatch";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/charts" element={<Charts />} />
        <Route path="/money" element={<Money />} />
        <Route path="/" element={<Tags />} />
        <Route path="*" element={<NoMatch></NoMatch>} />
      </Routes>
    </Router>
  );
}


