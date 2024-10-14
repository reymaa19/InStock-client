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
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(false);

  const fetchInventories = async () => {
    if (query.length > 0) {
      const response = await getInventory(query);
      setInventories(response.data);
    } else {
      const response = await getInventory();
      setInventories(response.data);
      scrollToTop();
    }
  };

  const fetchWarehouseInventories = async () => {
    if (query.length > 0) {
      const response = await getWarehouseInventory(warehouse, query);
      if (response.status === 200) setInventories(response.data);
      else setInventories([]);
    } else {
      const response = await getWarehouseInventory(warehouse);
      if (response.status === 200) setInventories(response.data);
      else setInventories([]);
    }
  };

  const handleSort = (header) => {
    let querySort = "";
    switch (header) {
      case "WAREHOUSE":
        querySort = "warehouse_id";
        break;
      case "ADDRESS":
        querySort = "address";
        break;
      case "CONTACT NAME":
        querySort = "contact_name";
        break;
      case "CONTACT INFORMATION":
        querySort = "contact_email";
        break;
      case "INVENTORY ITEM":
        querySort = "item_name";
        break;
      case "CATEGORY":
        querySort = "category";
        break;
      case "STATUS":
        querySort = "status";
        break;
      case "QTY":
        querySort = "quantity";
        break;
      case "QUANTITY":
        querySort = "quantity";
        break;
    }

    let order_by = "";
    setSortOrder(!sortOrder);
    sortOrder ? (order_by = "asc") : (order_by = "desc");
    const queryText = `sort_by=${querySort}&order_by=${order_by}`;
    setQuery(queryText);
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
  }, [warehouse, query]);

  return (
    <section className="inventory-list">
      <div className="inventory-list__container">
        {headers.map((header) => (
          <h4
            key={header}
            className={`inventory-list__header ${
              warehouse ? "inventory-list__header--warehouse-inventory" : ""
            }`}
          >
            {header}
            <img
              className="inventory-list__sort"
              src={sort}
              alt="sort"
              onClick={() => {
                handleSort(header);
              }}
            />
          </h4>
        ))}
        <h4 className="inventory-list__header">ACTION</h4>
      </div>
      {inventories?.map((item) => {
        const warehouseName = !warehouse
          ? warehouses?.find(({ id }) => id === item.warehouse_id)
              .warehouse_name
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
