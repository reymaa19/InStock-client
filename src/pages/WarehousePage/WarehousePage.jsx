import { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem.jsx";
import { getWarehouses } from "../../services/warehouse-api.js";
import "./WarehousePage.scss";

function WarehousePage() {
  const [search, setSearch] = useState("");
  //const [warehouses, setWarehouses] = useState([]);
  //
  //useEffect(() => {
  //  const fetchWarehouses = async () => {
  //    const response = await getWarehouses();
  //    setWarehouses(response.data);
  //  };
  //
  //  fetchWarehouses();
  //}, []);
  //
  //console.log(warehouses);

  const mockData = [
    {
      id: "abcd",
      warehouse: "Manhattan",
      address: "503 Broadway New York, USA",
      contact: "Parmin Aujla",
      contactInfo: ["+1 (629) 555-0129", "paujla@instock.com"],
    },
    {
      id: "1234",
      warehouse: "Manhattan",
      address: "503 Broadway New York, USA",
      contact: "Parmin Aujla",
      contactInfo: ["+1 (629) 555-0129", "paujla@instock.com"],
    },
  ];

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

        <div className="warehouse__container warehouse__container-bottom">
          {mockData.map((data) => (
            <ListItem key={data.id} item={data} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default WarehousePage;
