import { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem.jsx";
import { getWarehouses } from "../../services/warehouse-api.js";
import { getInventory } from "../../services/inventory-api.js";
import { scrollToTop } from "../../utils/utils";
import unfoldMore from "../../assets/images/icons/navigation/sort-24px.svg";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage({ headers }) {
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

  const homeHeader = (header) => (
    <h4
      key={header}
      className={`home__header${header === "CONTACT NAME" ? " home__header--contact-name" : ""}`}
    >
      {header}
      <img className="home__sort" src={unfoldMore} alt="sort" />
    </h4>
  );
  return (
    <main className="main">
      <section className="home">
        <div className="home__container home__container--search">
          <h1 className="home__page-header">Warehouses</h1>
          <div className="home__wrapper">
            <input
              className="home__search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link className="home__cta-button" to="/warehouse/add">
              + Add New Warehouse
            </Link>
          </div>
        </div>
        <div className="home__container--headers">
          {headers.map((header, i) => homeHeader(header, i))}
          <h4 className="home__header">ACTION</h4>
        </div>
        {headers.length === 4 &&
          warehouses.map((item) => (
            <ListItem
              key={item.id}
              headers={headers}
              item={item}
              fetchItems={fetchWarehouses}
              inventories={inventories}
            />
          ))}
        {headers.length === 5 &&
          inventories.map((item) => (
            <ListItem
              key={item.id}
              headers={headers}
              item={item}
              fetchItems={fetchInventory}
              warehouses={warehouses}
            />
          ))}
      </section>
    </main>
  );
}

export default HomePage;
