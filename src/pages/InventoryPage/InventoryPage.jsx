import React from "react";
import "./InventoryPage.scss";
import InventoryListItem from "../../components/InventoryList/InventoryListItem.jsx";
import { useState, useEffect } from "react";
import { getInventory } from "../../services/inventory-api.js";
import { getWarehouses } from "../../services/warehouse-api.js";
import { scrollToTop } from "../../utils/utils.js";
import unfoldMore from "../../assets/images/icons/navigation/sort-24px.svg";

function InventoryPage() {
  const [search, setSearch] = useState("");
  const [inventory, setInventory] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  const fetchInventory = async () => {
    const response = await getInventory();
    scrollToTop();
    setInventory(response.data);
  };

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await getWarehouses(["id", "warehouse_name"]);
      setWarehouses(response.data);
    };

    fetchWarehouses();
    fetchInventory();
  }, []);

  return (
    <div>
      <main className="main">
        <section className="warehouse">
          <div className="warehouse__container warehouse__container--search">
            <h1 className="warehouse__page-header">Inventory</h1>
            <div className="warehouse__wrapper">
              <input
                className="warehouse__search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="warehouse__cta-button">+ Add New Item</button>
            </div>
          </div>
          <div className="warehouse__container--headers">
            <h4 className="warehouse__header">
              INVENTORY ITEM{" "}
              <img className="warehouse__sort" src={unfoldMore} alt="sort" />
            </h4>
            <h4 className="warehouse__header">
              CATEGORY{" "}
              <img className="warehouse__sort" src={unfoldMore} alt="sort" />
            </h4>
            <h4 className="warehouse__header warehouse__header--contact-name">
              STATUS{" "}
              <img className="warehouse__sort" src={unfoldMore} alt="sort" />
            </h4>
            <h4 className="warehouse__header">
              QTY{" "}
              <img className="warehouse__sort" src={unfoldMore} alt="sort" />
            </h4>
            <h4 className="warehouse__header">
              WAREHOUSE{" "}
              <img className="warehouse__sort" src={unfoldMore} alt="sort" />
            </h4>
            <h4 className="warehouse__header">ACTIONS</h4>
          </div>
          {inventory.map((invItem) => (
            <InventoryListItem
              key={invItem.id}
              item={invItem}
              fetchItems={fetchInventory}
              warehouses={warehouses}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default InventoryPage;
