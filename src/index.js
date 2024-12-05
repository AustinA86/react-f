import 'bootstrap/dist/css/bootstrap.min.css'; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Static from "./pages/Static";
import Functionalpage from "./pages/Functionalpage";
import Contactus from "./pages/Contactus";
import Nopage from "./pages/Nopage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="static" element={<Static />} />
          <Route path="functional" element={<Functionalpage/>}/>
          <Route path="contactus" element={<Contactus />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
