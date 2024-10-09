import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage.jsx";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";

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
          <Route path="/editwarehouse" element={<EditWarehouse />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
