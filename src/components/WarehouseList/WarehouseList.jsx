import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem.jsx";
import { getWarehouses } from "../../services/warehouse-api.js";
import { scrollToTop } from "../../utils/utils";
import sort from "../../assets/images/icons/navigation/sort-24px.svg";
import "./WarehouseList.scss";

const WarehouseList = ({ headers, searchQuery }) => {
  const [warehouses, setWarehouses] = useState([]);

  async function fetchWarehousesFiltered() {
    const response = await getWarehouses(`s=${searchQuery}`);
    setWarehouses(response.data);
    scrollToTop();
  }

  const fetchWarehouses = async () => {
    const response = await getWarehouses();
    setWarehouses(response.data);
    scrollToTop();
  };

  useEffect(() => {
    searchQuery.length > 0 ? fetchWarehousesFiltered() : fetchWarehouses();
  }, [searchQuery]);

  return (
    <section className="warehouse-list">
      <div className="warehouse-list__container">
        {headers.map((header) => (
          <h4 key={header} className="warehouse-list__header">
            {header}
            <img className="warehouse-list__sort" src={sort} alt="sort" />
          </h4>
        ))}
        <h4 className="warehouse-list__header">ACTION</h4>
      </div>
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
