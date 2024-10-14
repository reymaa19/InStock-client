import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/inventory-api.js";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import "./InventoryDetailsPage.scss";

function InventoryDetailsPage() {
  const { id } = useParams();
  const [selectedInventory, setSelectedInventory] = useState([]);

  if (isNaN(id)) {
    return <NotFoundPage />;
  }

  useEffect(() => {
    const fetchSingleInventoryItem = async () => {
      const response = await getSingleItem(id);
      setSelectedInventory(response.data);
    };

    fetchSingleInventoryItem();
  }, []);

  return (
    <main className="main">
      <section className="warehouse-inventory">
        <InventoryDetails details={selectedInventory} />
      </section>
    </main>
  );
}
export default InventoryDetailsPage;
