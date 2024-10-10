import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";
import AddEditInventory from "./components/AddEditInventory/AddEditInventory";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="/warehouse/:id" element={<WarehouseInventoryPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
<<<<<<< HEAD
        <Route path="/warehouse/add" element={<AddNewWarehouse />} />
=======
        <Route path="/addnewwarehouse" element={<AddNewWarehouse />} />
        <Route path="/warehouse/edit/:id" element={<EditWarehouse />} />
        <Route path="/inventory/new" element={<AddEditInventory />} />
        <Route path="/inventory/:id" element={<AddEditInventory />} />
>>>>>>> 7bc4669946d257692d7ea61e6b4894d656e38db6
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
