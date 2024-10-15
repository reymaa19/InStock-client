import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleWarehouse } from "../../services/warehouse-api.js";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

function EditWarehousePage() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState([]);

  if (isNaN(id)) {
    return <NotFoundPage />;
  }

  useEffect(() => {
    const fetchWarehouse = async () => {
      const response = await getSingleWarehouse(id);
      setWarehouse(response.data);
    };

    fetchWarehouse();
  }, []);

  return (
    <main className="main">
      <section className="warehouse-edit">
        <EditWarehouse details={warehouse} />
      </section>
    </main>
  );
}

export default EditWarehousePage;
