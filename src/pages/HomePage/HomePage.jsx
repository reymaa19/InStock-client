import { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem.jsx";
import { getWarehouses } from "../../services/warehouse-api.js";
import { getInventory } from "../../services/inventory-api.js";
import { scrollToTop } from "../../utils/utils";
import unfoldMore from "../../assets/images/icons/navigation/sort-24px.svg";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = ({ type }) => {
  const [search, setSearch] = useState("");
  const [inventories, setInventories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  const fetchInventory = async () => {
    const response = await getInventory();
    scrollToTop();
    setInventories(response.data);
  };

  const fetchWarehouses = async () => {
    const response = await getWarehouses();
    setWarehouses(response.data);
    scrollToTop();
  };

  useEffect(() => {
    fetchWarehouses();
    fetchInventory();
  }, []);

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

  const homeHeader = (header) => (
    <h4 key={header} className="home__header">
      {header}
      <img className="home__sort" src={unfoldMore} alt="sort" />
    </h4>
  );

  return (
    <main className="main">
      <section className="home">
        <div className="home__container home__container--search">
          <h1 className="home__page-header">
            {type === "warehouse" ? "Warehouses" : "Inventory"}
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
              to={`/${type === "warehouse" ? "warehouse" : "inventory"}/add`}
            >
              + Add New {type === "warehouse" ? "Warehouse" : "Inventory"}
            </Link>
          </div>
        </div>
        <div className="home__container--headers">
          {(type === "warehouse" ? warehouseHeaders : inventoryHeaders).map(
            (header) => homeHeader(header),
          )}
          <h4 className="home__header">ACTION</h4>
        </div>
        {type === "warehouse" &&
          warehouses.map((item) => (
            <ListItem
              key={item.id}
              headers={warehouseHeaders}
              item={item}
              fetchItems={fetchWarehouses}
              inventories={inventories}
            />
          ))}
        {type === "inventory" &&
          inventories.map((item) => (
            <ListItem
              key={item.id}
              headers={inventoryHeaders}
              item={item}
              fetchItems={fetchInventory}
              warehouses={warehouses}
            />
          ))}
      </section>
    </main>
  );
};

export default HomePage;
