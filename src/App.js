import { Routes, Route } from "react-router-dom";
import routes from "./Routes.js";
import Menu from "./ui/Menu/Menu.jsx";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route path={route.path} element={route.element} key={index} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
