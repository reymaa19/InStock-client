import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";
import AddEditInventory from "./components/AddEditInventory/AddEditInventory";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage type={"warehouse"} />} />
        <Route path="/warehouse" element={<HomePage type="warehouse" />} />
        <Route path="/warehouse/:id" element={<WarehouseInventoryPage />} />
        <Route path="/warehouse/add" element={<AddNewWarehouse />} />
        <Route path="/warehouse/edit/:id" element={<EditWarehouse />} />
        <Route path="/inventory" element={<HomePage type="inventory" />} />
        <Route path="/inventory/add" element={<AddEditInventory />} />
        <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
        <Route path="/inventory/edit/:id" element={<AddEditInventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
