import { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem.jsx";
import { getWarehouses } from "../../services/warehouse-api.js";
import "./WarehousePage.scss";

function WarehousePage() {
  const [search, setSearch] = useState("");
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await getWarehouses();
      setWarehouses(response.data);
    };

    fetchWarehouses();
  }, []);

  return (
    <main className="main">
      <section className="warehouse">
        <div className="warehouse__container warehouse__container--top">
          <h1 className="warehouse__page-header">Warehouses</h1>
          <div className="warehouse__wrapper">
            <input
              className="warehouse__search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="warehouse__cta-button">
              + Add New Warehouse
            </button>
          </div>
        </div>
        <div className="warehouse__container warehouse__container--bottom">
          <div className="warehouse__headers-container">
            <h4 className="warehouse__header">WAREHOUSE</h4>
            <h4 className="warehouse__header">ADDRESS</h4>
            <h4 className="warehouse__header">CONTACT NAME</h4>
            <h4 className="warehouse__header">CONTACT INFORMATION</h4>
            <h4 className="warehouse__header">ACTION</h4>
          </div>
          {warehouses.map((warehouse) => (
            <ListItem key={warehouse.id} item={warehouse} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default WarehousePage;
