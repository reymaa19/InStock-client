import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import AddEditInventory from "./components/AddEditInventory/AddEditInventory";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/warehouse/:id" element={<WarehouseInventoryPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/addnewwarehouse" element={<AddNewWarehouse />} />
          <Route path="/inventory/new" element={<AddEditInventory />} />
          <Route path="/inventory/:id" element={<AddEditInventory />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
