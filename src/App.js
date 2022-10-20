import Home from "./Main-Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*"/>
      </Routes>
    </div>
  );
}

export default App;
