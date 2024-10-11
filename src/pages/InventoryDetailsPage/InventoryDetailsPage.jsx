import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "InventoryDetailsPage.scss";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails.jsx";
import {
    getInventory,
    getOneInventory
} from "../../services/inventory-api.js";

function InventoryDetailsPage(details) {
    const params = useParams();
    const [search, setSearch] = useState("");
    const [inventory, setInventory] = useState([]);
    const [selectedInventory, setSelectedInventory] = useState([])
    const [id, setId] = useState("");

    useState(() => {
      setId(params.id);
      const fetchSingleInventory = async () => {
        const response = await getOneInventory(params.id);
        setSelectedInventory(response.data);
        console.log("my inventory item is ", response.data);
        setId(params.id);
      };
      fetchSingleInventory();
    }, [params.id]);

    useEffect(() => {
      const fetchInventory = async () => {
        const response = await getInventory();
        setInventory(response.data);
      };
      fetchInventory();
    }, []);
    
    return (
        <main className="main">
            <section className="warehouse-inventory">
                <InventoryDetails
                details={selectedInventory}
                />
            </section>
        </main>
    )
};
export default InventoryDetailsPage;