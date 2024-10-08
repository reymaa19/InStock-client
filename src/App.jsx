import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import WarehousePage from "./Pages/WarehousePage/WarehousePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<>default</>} />
        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
