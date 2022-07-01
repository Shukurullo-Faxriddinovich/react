import Home from "./pages/home/home";

import "./assets/scss/main.scss";
import { Route, Routes} from "react-router-dom";
import AddTodo from "./pages/add-todo/add-todo"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-todo" element={<AddTodo />} />
    </Routes>
  );
}

export default App;