import "./InventoryDetails.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/navigation/arrow_back-24px.svg";
import editHeader from "../../assets/images/icons/action/edit-24px.svg";
import { getWarehouses } from "../../services/warehouse-api";
import { useState, useEffect } from "react";

function InventoryDetails(details) {

  const inventory = details.details;
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await getWarehouses();
      setWarehouses(response.data);
    };
    fetchWarehouses();
  }, []);

  return (
    <div className="details">
      <div className="nav">
        <Link to="/inventory" className="nav__link nav__arrow-link">
          <img className="nav__arrow" src={arrow} alt="Return to Inventory" />
        </Link>
        <h1 className="nav__name">{inventory.item_name}</h1>
        <div className="nav__end">
          <div className="nav__color">
            <Link to={`/inventory/edit/${inventory.id}`} className="nav__link">
              <img
                className="nav__edit"
                src={editHeader}
                alt="Edit Inventory"
              />
              <p className="nav__edit-text">Edit</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="details__inventory">
        <div className="details__wrapper">
          <div className="details__container details__container--left">
            <h4 className="details__header">ITEM DESCRIPTION:</h4>
            <p className="details__value details__value--top-row">{`${inventory.description}`}</p>
            <h4 className="details__header">CATEGORY:</h4>
            <p className="details__value details__value--bottom-row">{`${inventory.category}`}</p>
          </div>
        </div>
        <div className="details__wrapper details__wrapper--right">
          <div className="details__container">
            <h4 className="details__header">STATUS:</h4>
            <p className={`list-item__status details__value--top-row ${inventory.status === "In Stock" ? "list-item__status--in-stock" : "list-item__status--out-of-stock"}`}>
              {inventory.status}
            </p>
            <h4 className="details__header">WAREHOUSE:</h4>
            <p className="details__value details__value--bottom-row">
              {
                warehouses.find(({ id }) => id === inventory.warehouse_id)
                  ?.warehouse_name
              }
            </p>
          </div>
          <div className="details__container">
            <h4 className="details__header">QUANTITY:</h4>
            <p className="details__value details__value--top-row">{inventory.quantity}</p>
        </div>
      </div>
    </div>
    </div>
  )
};

export default InventoryDetails;
