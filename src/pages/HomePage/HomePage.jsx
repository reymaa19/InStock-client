import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { Link } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

const HomePage = () => {
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
      <section className="home">
        <div className="home__container home__container--search">
          <h1 className="home__page-header">
            {isInventory ? "Inventory" : "Warehouses"}
          </h1>
          <div className="home__wrapper">
            <input
              className="home__search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link
              className="home__cta-button"
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

export default HomePage;

//  <div className="home__container--headers">
//    {(type === "warehouse" ? warehouseHeaders : inventoryHeaders).map(
//      (header) => (
//        <h4
//          key={header}
//          className={`home__header ${type === "inventory" ? "home__header--secondary" : ""}`}
//        >
//          {header}
//          <img className="home__sort" src={unfoldMore} alt="sort" />
//        </h4>
//      ),
//    )}
//    <h4 className="home__header home__header--action">ACTION</h4>
//  </div>
//  {type === "warehouse" &&
//    warehouses.map((item) => (
//      <ListItem
//        key={item.id}
//        headers={warehouseHeaders}
//        item={item}
//        fetchItems={fetchWarehouses}
//        inventories={inventories}
//      />
//    ))}
//  {type === "inventory" &&
//    inventories.map((item) => (
//      <ListItem
//        key={item.id}
//        headers={inventoryHeaders}
//        item={item}
//        fetchItems={fetchInventory}
//        warehouses={warehouses}
//      />
//    ))}
//</section>
