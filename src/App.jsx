import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage.jsx";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="/warehouse/:id" element={<WarehouseInventoryPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/warehouse/add" element={<AddNewWarehouse />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
