import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RoleSelect from "./pages/RoleSelect";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <header className="bg-blue-900 text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">Virtual Sabana</h1>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-gray-300">Inicio</Link>
            <Link to="/roles" className="hover:text-gray-300">Acceder</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roles" element={<RoleSelect />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
