import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import "./DashboardPage.scss";

const DashboardPage = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const WAREHOUSE_HEADERS = [
    "WAREHOUSE",
    "ADDRESS",
    "CONTACT NAME",
    "CONTACT INFORMATION",
  ];
  const INVENTORY_HEADERS = [
    "INVENTORY ITEM",
    "CATEGORY",
    "STATUS",
    "QTY",
    "WAREHOUSE",
  ];

  const isInventory = location.pathname.startsWith("/inventory");

  return (
    <main className="main">
      <section className="dashboard">
        <div className="dashboard__container dashboard__container--search">
          <h1 className="dashboard__page-header">
            {isInventory ? "Inventory" : "Warehouses"}
          </h1>
          <div className="dashboard__wrapper">
            <input
              id="dashboard-search"
              className="dashboard__search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link
              className="dashboard__cta-button"
              to={`/${isInventory ? "inventory" : "warehouse"}/add`}
            >
              + Add New {isInventory ? "inventory" : "warehouse"}
            </Link>
          </div>
        </div>
        {isInventory ? (
          <InventoryList headers={INVENTORY_HEADERS} />
        ) : (
          <WarehouseList headers={WAREHOUSE_HEADERS} />
        )}
      </section>
    </main>
  );
};

export default DashboardPage;
