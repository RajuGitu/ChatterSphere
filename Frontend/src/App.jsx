import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Whatsapp from "./Components/Whatsapp";
import { useAuth } from "./context/AuthContext";

function App() {
  const { authUser } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={authUser ? <Navigate to="/Whatsapp" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/Whatsapp" /> : <SignUp />} />
        <Route path="/Whatsapp" element={authUser ? <Whatsapp /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
