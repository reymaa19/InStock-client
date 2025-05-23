import { useEffect, useState } from "react";
import sort from "../../assets/images/icons/navigation/sort-24px.svg";
import ListItem from "../../components/ListItem/ListItem";
import { getInventory } from "../../services/inventory-api";
import { getWarehouseInventory } from "../../services/warehouse-api";
import { scrollToTop } from "../../utils/utils";
import "./InventoryList.scss";

const InventoryList = ({ headers, warehouse, searchQuery }) => {
  const [inventories, setInventories] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(false);

  const fetchInventories = async () => {
    if (query.length > 0 && searchQuery.length > 0) {
      const response = await getInventory(`${query}&s=${searchQuery}`);
      setInventories(response.data);
    } else if (query && query.length > 0) {
      const response = await getInventory(query);
      setInventories(response.data);
    } else if (searchQuery && searchQuery.length > 0) {
      const response = await getInventory(`s=${searchQuery}`);
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
        querySort = "warehouse_name";
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
    if (warehouse) {
      fetchWarehouseInventories();
    } else {
      fetchInventories();
    }
  }, [warehouse, query, searchQuery]);

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

      {inventories.length === 0 && (
        <div className="inventory-list__not-found">
          <p className="inventory-list__not-found-description">
            No Inventory Found
          </p>
        </div>
      )}

      {inventories?.map((item) => {
        return (
          <ListItem
            key={item.id}
            headers={headers}
            item={item}
            fetchItems={
              warehouse ? fetchWarehouseInventories : fetchInventories
            }
            type={warehouse ? "warehouse-inventory" : "inventory"}
          />
        );
      })}
    </section>
  );
};

export default InventoryList;
