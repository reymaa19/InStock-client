import { useState } from "react";
import "./WarehousePage.scss";

function WarehousePage() {
  const [search, setSearch] = useState("");

  const mockData = [
    {
      warehouse: "Manhattan",
      address: "503 Broadway New York, USA",
      contact: "Parmin Aujla",
      contactInfo: ["+1 (629) 555-0129", "paujla@instock.com"],
    },
    {
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

        <div className="warehouse__container warehouse__container-bottom"></div>
      </section>
    </main>
  );
}

export default WarehousePage;
