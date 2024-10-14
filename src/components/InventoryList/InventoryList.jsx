import { useEffect, useState } from "react";
import sort from "../../assets/images/icons/navigation/sort-24px.svg";
import ListItem from "../../components/ListItem/ListItem";
import { getInventory } from "../../services/inventory-api";
import {
  getWarehouses,
  getWarehouseInventory,
} from "../../services/warehouse-api";
import { scrollToTop } from "../../utils/utils";
import "./InventoryList.scss";

const InventoryList = ({ headers, warehouse }) => {
  const [inventories, setInventories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  const fetchInventories = async () => {
    const response = await getInventory();
    setInventories(response.data);
    scrollToTop();
  };

  const fetchWarehouseInventories = async () => {
    const response = await getWarehouseInventory(warehouse);
    if (response.status === 200) setInventories(response.data);
    else setInventories([]);
  };

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await getWarehouses(["id", "warehouse_name"]);
      setWarehouses(response.data);
    };

    if (warehouse) {
      fetchWarehouseInventories();
    } else {
      fetchWarehouses();
      fetchInventories();
    }
  }, [warehouse]);

  if (inventories.length === 0)
    return (
      <div className="inventory-list__not-found">
        <p className="inventory-list__not-found-description">
          No Inventory Found
        </p>
      </div>
    );

  return (
    <section className="inventory-list">
      <div className="inventory-list__container">
        {headers.map((header) => (
          <h4
            key={header}
            className={`inventory-list__header ${warehouse ? "inventory-list__header--warehouse-inventory" : ""}`}
          >
            {header}
            <img className="inventory-list__sort" src={sort} alt="sort" />
          </h4>
        ))}
        <h4 className="inventory-list__header">ACTION</h4>
      </div>
      {inventories?.map((item) => {
        const warehouseName =
          !warehouse && warehouses.length > 0
            ? warehouses.find(({ id }) => id === item.warehouse_id)
                ?.warehouse_name || ""
            : "";

        return (
          <ListItem
            key={item.id}
            headers={headers}
            item={item}
            fetchItems={
              warehouse ? fetchWarehouseInventories : fetchInventories
            }
            type={warehouse ? "warehouse-inventory" : "inventory"}
            warehouseName={warehouseName}
          />
        );
      })}
    </section>
  );
};

export default InventoryList;
