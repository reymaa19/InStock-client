import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";
import AddEditInventory from "./components/AddEditInventory/AddEditInventory";

const App = () => {
  const inventoryHeaders = [
    "INVENTORY ITEM",
    "CATEGORY",
    "STATUS",
    "QTY",
    "WAREHOUSE",
  ];

  const warehouseHeaders = [
    "WAREHOUSE",
    "ADDRESS",
    "CONTACT NAME",
    "CONTACT INFORMATION",
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage headers={warehouseHeaders} />} />
        <Route path="/warehouse" element={<HomePage headers={warehouseHeaders} />} />
        <Route path="/warehouse/:id" element={<WarehouseInventoryPage />} />
        <Route path="/warehouse/add" element={<AddNewWarehouse />} />
        <Route path="/warehouse/edit/:id" element={<EditWarehouse />} />
        <Route path="/inventory" element={<HomePage headers={inventoryHeaders} />} />
        <Route path="/inventory/new" element={<AddEditInventory />} />
        <Route path="/inventory/:id" element={<AddEditInventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
