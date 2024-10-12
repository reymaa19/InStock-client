import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleWarehouse } from "../../services/warehouse-api.js";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails.jsx";
import "./WarehouseInventoryPage.scss";

function WarehousePage() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    const fetchWarehouse = async () => {
      const response = await getSingleWarehouse(id);
      setWarehouse(response.data);
    };

    fetchWarehouse();
  }, []);

  return (
    <main className="main">
      <section className="warehouse-inventory">
        <WarehouseDetails details={warehouse} />
      </section>
    </main>
  );
}

export default WarehousePage;
