import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import {
  ProtectedRoutes,
  ProtectedRoutesLogin,
} from "./common/components/ProtectedRoutes";
import { Home } from "./pages/dashboard/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutesLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
