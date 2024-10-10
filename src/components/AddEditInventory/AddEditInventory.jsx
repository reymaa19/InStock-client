import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getSingleItem,
  updateInventoryItem,
  addInventoryItem,
} from "../../services/inventory-api.js";
import errorIcon from "../../assets/images/icons/notification/error-24px.svg";
import "./AddEditInventory.scss";

const AddEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchInventoryItem = async () => {
      const response = await getSingleItem(id);
      setValues(response.data);
    };

    id && fetchInventoryItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "status" && value === "Out of Stock")
      setValues({ ...values, warehouse_id: "", quantity: 0, [name]: value });
    else setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const updatedData = values;
      delete updatedData.id;
      delete updatedData.created_at;
      delete updatedData.updated_at;
      delete updatedData.warehouse_name;
      const response = await updateInventoryItem(id, updatedData);
      return response;
    } else {
      const result = await addInventoryItem(values);
      if (result.status === 201) return navigate("/");
      else
        setError(
          result.data.message.reduce((errors, message) => {
            const [key, value] = Object.entries(message)[0];
            errors[key] = value;
            return errors;
          }, {}),
        );
    }
  };

  const options = ["Health", "Gear", "Electronics", "Apparel", "Accessories"]; // QUERY DATABASE LATER
  const HARD_CODED_WAREHOUSE_OPTIONS = [
    "Manhattan",
    "Washington",
    "Jersey",
    "SF",
    "Santa Moncica",
    "Seatle",
    "Miami",
    "Boston",
    "Chicago",
  ]; // QUERY DATABASE LATER Manhattan id is 1 (warehouse_id is incorrect still)

  const errorNotification = (errorMessage) => {
    if (!errorMessage) return;
    return (
      <>
        <p className="inventory-form__label inventory-form__label--error">
          <img src={errorIcon} alt="error" className="inventory-form__icon" />
          {errorMessage}
        </p>
      </>
    );
  };

  return (
    <form className="inventory-form" onSubmit={handleFormSubmit}>
      <div className="inventory-form__wrapper inventory-form__wrapper--header">
        <Link className="inventory-form__back-button" to="/inventory" />
        <h1 className="inventory-form__header">
          {id ? "Edit Inventory Item" : "Add New Inventory Item"}
        </h1>
      </div>
      <div className="inventory-form__wrapper inventory-form__wrapper--body">
        <div className="inventory-form__wrapper--section inventory-form__wrapper--left">
          <h2 className="inventory-form__section-header">Item Details</h2>
          <label htmlFor="item_name" className="inventory-form__label">
            Item Name
            <input
              className={`inventory-form__input ${error.item_name && "inventory-form__input--error"}`}
              id="item_name"
              name="item_name"
              value={values.item_name}
              onChange={handleChange}
              type="text"
              placeholder="Item Name"
            />
            {errorNotification(error.item_name)}
          </label>
          <label htmlFor="description" className="inventory-form__label">
            Description
            <textarea
              className={`inventory-form__input inventory-form__input--text-area ${error.description && "inventory-form__input--error"}`}
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Please enter a brief item description..."
            />
            {errorNotification(error.description)}
          </label>
          <label htmlFor="category" className="inventory-form__label">
            Category
            <select
              className={`inventory-form__input inventory-form__input--select ${error.category && "inventory-form__input--error"}`}
              id="category"
              name="category"
              value={values.category}
              onChange={handleChange}
            >
              <option value="" disabled hidden default>
                Please select
              </option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errorNotification(error.category)}
          </label>
        </div>
        <div className="inventory-form__wrapper--section inventory-form__wrapper--right">
          <h2 className="inventory-form__section-header">Item Availability</h2>
          <label htmlFor="status" className="inventory-form__label">
            Status
            <div className="inventory-form__wrapper--radio">
              <div className="inventory-form__container">
                <input
                  className="inventory-form__input inventory-form__input--radio"
                  id="instock"
                  name="status"
                  value="In Stock"
                  onChange={handleChange}
                  type="radio"
                  checked={values.status == "In Stock"}
                />
                <label
                  htmlFor="instock"
                  className={`inventory-form__label inventory-form__label--radio ${
                    values.status === "In Stock"
                      ? "inventory-form__label--selected"
                      : ""
                  }`}
                >
                  In Stock
                </label>
              </div>
              <div className="inventory-form__container inventory-form__container--right">
                <input
                  className="inventory-form__input inventory-form__input--radio"
                  id="out_of_stock"
                  name="status"
                  value="Out of Stock"
                  onChange={handleChange}
                  type="radio"
                  checked={values.status == "Out of Stock"}
                />
                <label
                  htmlFor="out_of_stock"
                  className={`inventory-form__label inventory-form__label--radio ${
                    values.status === "Out of Stock"
                      ? "inventory-form__label--selected"
                      : ""
                  }`}
                >
                  Out of Stock
                </label>
              </div>
            </div>
            {errorNotification(error.status)}
          </label>
          {values.status === "In Stock" && (
            <>
              <label htmlFor="quantity" className="inventory-form__label">
                Quantity
                <input
                  className={`inventory-form__input ${error.quantity && "inventory-form__input--error"}`}
                  id="quantity"
                  name="quantity"
                  value={values.quantity}
                  onChange={handleChange}
                  type="number"
                />
                {errorNotification(error.quantity)}
              </label>
              <label htmlFor="warehouse" className="inventory-form__label">
                Warehouse
                <select
                  className={`inventory-form__input inventory-form__input--select ${error.warehouse_id && "inventory-form__input--error"}`}
                  id="warehouse"
                  name="warehouse_id"
                  value={values.warehouse_id}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden default>
                    Please select
                  </option>
                  {HARD_CODED_WAREHOUSE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errorNotification(error.warehouse_id)}
              </label>
            </>
          )}
        </div>
      </div>
      <div className="inventory-form__wrapper inventory-form__wrapper--options">
        <button
          type="button"
          className="inventory-form__button inventory-form__button--secondary"
          onClick={() => navigate("/inventory")}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inventory-form__button inventory-form__button--primary"
        >
          {id ? "Save" : "+ Add Item"}
        </button>
      </div>
    </form>
  );
};

export default AddEditForm;
