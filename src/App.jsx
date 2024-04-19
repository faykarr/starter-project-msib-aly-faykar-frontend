import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="grid lg:grid-cols-2 h-[100vh] overflow-x-hidden md:grid-cols-1">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
      <div className="h-full bg-cover bg-center auth-right md:hidden lg:block"></div>
    </div>
  );
}

export default App;