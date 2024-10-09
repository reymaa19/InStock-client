import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListItem from "../../components/ListItem/ListItem.jsx";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails.jsx";
import {
  getWarehouses,
  getSingleWarehouse,
} from "../../services/warehouse-api.js";
import "./WarehouseInventoryPage.scss";

function WarehousePage() {
  const params = useParams();

  const [search, setSearch] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState([]);
  const [id, setId] = useState("");

  useState(() => {
    setId(params.id);
    const fetchWarehouse = async () => {
      const response = await getSingleWarehouse(params.id);
      setSelectedWarehouse(response.data);
      console.log("my warehouse is ", response.data);
      setId(params.id);
    };
    fetchWarehouse();
  }, [params.id]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await getWarehouses();
      setWarehouses(response.data);
    };
    fetchWarehouses();
  }, []);

  return (
    <main className="main">
      <section className="warehouse-inventory">
        <WarehouseDetails details={selectedWarehouse} />
      </section>
    </main>
  );
}

export default WarehousePage;
