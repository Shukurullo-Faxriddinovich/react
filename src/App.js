import Home from "./pages/home/home";
import Data from "./data"
import "./assets/scss/main.scss";
import { Route, Routes} from "react-router-dom";
import { useState } from "react";
import NewFeadback from "./pages/new-feadback/new-feadback";

function App() {
  const [data, setArray] = useState(Data);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home data={data} setArray={setArray}/>} />
      <Route path="/new-feadback" element={<NewFeadback />} />
    </Routes>
  );
}

export default App;