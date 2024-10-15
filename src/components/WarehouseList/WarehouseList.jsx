import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem.jsx";
import { getWarehouses } from "../../services/warehouse-api.js";
import { scrollToTop } from "../../utils/utils";
import sort from "../../assets/images/icons/navigation/sort-24px.svg";
import "./WarehouseList.scss";

const WarehouseList = ({ headers, searchQuery }) => {
  const [warehouses, setWarehouses] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(false);

  const fetchWarehouses = async () => {
    if (query.length > 0 && searchQuery.length > 0) {
      const response = await getWarehouses(`${query}&s=${searchQuery}`);
      setWarehouses(response.data);
    } else if (query.length > 0) {
      const response = await getWarehouses(query);
      setWarehouses(response.data);
    } else if (searchQuery.length > 0) {
      const response = await getWarehouses(`s=${searchQuery}`);
      setWarehouses(response.data);
    } else {
      const response = await getWarehouses();
      setWarehouses(response.data);
    }
    scrollToTop();
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
      case "WAREHOUSE_NAME":
        querySort = "warehouse_id";
        break;
    }

    let order_by = "";
    setSortOrder(!sortOrder);
    sortOrder ? (order_by = "asc") : (order_by = "desc");
    const queryText = `sort_by=${querySort}&order_by=${order_by}`;
    setQuery(queryText);
  };

  useEffect(() => {
    fetchWarehouses();
  }, [query, searchQuery]);

  return (
    <section className="warehouse-list">
      <div className="warehouse-list__container">
        {headers.map((header) => (
          <h4 key={header} className="warehouse-list__header">
            {header}
            <img
              className="warehouse-list__sort"
              src={sort}
              alt="sort"
              onClick={() => {
                handleSort(header);
              }}
            />
          </h4>
        ))}
        <h4 className="warehouse-list__header">ACTION</h4>
      </div>
      {warehouses.length === 0 && (
        <div className="warehouse-list__not-found">
          <p className="warehouse-list__not-found-description">
            No Warehouse Found
          </p>
        </div>
      )}
      {warehouses.map((item) => (
        <ListItem
          key={item.id}
          headers={headers}
          item={item}
          fetchItems={fetchWarehouses}
          type="warehouse"
        />
      ))}
    </section>
  );
};

export default WarehouseList;
