import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage";
import AddNewWarehousePage from "./pages/AddNewWarehousePage/AddNewWarehousePage.jsx";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage.jsx";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage.jsx";
import AddNewInventoryPage from "./pages/AddNewInventoryPage/AddNewInventoryPage.jsx";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/warehouse" element={<DashboardPage />} />
        <Route path="/warehouse/:id" element={<WarehouseInventoryPage />} />
        <Route path="/warehouse/add" element={<AddNewWarehousePage />} />
        <Route path="/warehouse/edit/:id" element={<EditWarehousePage />} />

        <Route path="/inventory" element={<DashboardPage />} />
        <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
        <Route path="/inventory/add" element={<AddNewInventoryPage />} />
        <Route path="/inventory/edit/:id" element={<EditInventoryPage />} />

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/NFP" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
