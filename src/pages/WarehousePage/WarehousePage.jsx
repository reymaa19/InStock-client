import { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem.jsx";
import { getWarehouses } from "../../services/warehouse-api.js";
import unfoldMore from "../../assets/images/icons/navigation/sort-24px.svg";
import "./WarehousePage.scss";
import {useNavigate} from 'react-router-dom';
import { handleNav } from "../../utils/utils";



function WarehousePage() {
  const navigate = useNavigate();
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
        <div className="warehouse__container warehouse__container--search">
          <h1 className="warehouse__page-header">Warehouses</h1>
          <div className="warehouse__wrapper">
            <input
              className="warehouse__search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="warehouse__cta-button"  onClick={() => handleNav(navigate, "/warehouse/add")}>
              + Add New Warehouse
              
            </button>
           
          </div>
        </div>
        <div className="warehouse__container--headers">
          <h4 className="warehouse__header">
            WAREHOUSE{" "}
            <img className="warehouse__sort" src={unfoldMore} alt="sort" />
          </h4>
          <h4 className="warehouse__header">
            ADDRESS{" "}
            <img className="warehouse__sort" src={unfoldMore} alt="sort" />
          </h4>
          <h4 className="warehouse__header warehouse__header--contact-name">
            CONTACT NAME{" "}
            <img className="warehouse__sort" src={unfoldMore} alt="sort" />
          </h4>
          <h4 className="warehouse__header">
            CONTACT INFORMATION{" "}
            <img className="warehouse__sort" src={unfoldMore} alt="sort" />
          </h4>
          <h4 className="warehouse__header">ACTIONS</h4>
        </div>
        {warehouses.map((warehouse) => (
          <ListItem key={warehouse.id} item={warehouse} />
        ))}
      </section>
    </main>
  );
}

export default WarehousePage;

