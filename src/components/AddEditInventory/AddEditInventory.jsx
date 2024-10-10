import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddEditInventory.scss";

const AddEditForm = () => {
  const [values, setValues] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id); // DO SOMETHING WITH EDIT INVENTORY

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
  ]; // QUERY DATABASE LATER

  // Clear values for quantity and warehouse when Out of Stock radio button is selected

  return (
    <form className="inventory-form">
      <div className="inventory-form__wrapper inventory-form__wrapper--header">
        <button
          type="button"
          className="inventory-form__back-button"
          onClick={() => navigate(-1)}
        />
        <h1 className="inventory-form__header">
          {id ? "Edit Inventory Item" : "Add New Inventory Item"}
        </h1>
      </div>
      <div className="inventory-form__wrapper inventory-form__wrapper--body">
        <div className="inventory-form__wrapper--section">
          <h2 className="inventory-form__section-header">Item Details</h2>
          <label htmlFor="item_name" className="inventory-form__label">
            Item Name
            <input
              className="inventory-form__input"
              id="item_name"
              name="item_name"
              value={values.item_name}
              onChange={handleChange}
              type="text"
              placeholder="Item Name"
            />
          </label>
          <label htmlFor="description" className="inventory-form__label">
            Description
            <textarea
              className="inventory-form__input inventory-form__input--text-area"
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Please enter a brief item description..."
            />
          </label>
          <label htmlFor="category" className="inventory-form__label">
            Category
            <select
              className="inventory-form__input inventory-form__input--select"
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
          </label>
        </div>
        <div className="inventory-form__wrapper--section">
          <h2 className="inventory-form__section-header">Item Availability</h2>
          <label htmlFor="status" className="inventory-form__label">
            Status
            <div className="inventory-form__wrapper--radio">
              <div className="inventory-form__container">
                <input
                  className="inventory-form__input"
                  id="instock"
                  name="status"
                  value="In Stock"
                  onChange={handleChange}
                  type="radio"
                />
                <label
                  htmlFor="instock"
                  className={`inventory-form__label inventory-form__label--radio ${values.status === "In Stock" ? "inventory-form__label--selected" : ""}`}
                >
                  In Stock
                </label>
              </div>
              <div className="inventory-form__container">
                <input
                  className="inventory-form__input"
                  id="out_of_stock"
                  name="status"
                  value="Out of Stock"
                  onChange={handleChange}
                  type="radio"
                />
                <label
                  htmlFor="out_of_stock"
                  className={`inventory-form__label inventory-form__label--radio ${values.status === "Out of Stock" ? "inventory-form__label--selected" : ""}`}
                >
                  Out of Stock
                </label>
              </div>
            </div>
          </label>
          {values.status === "In Stock" && (
            <>
              <label htmlFor="quantity" className="inventory-form__label">
                Quantity
                <input
                  className="inventory-form__input"
                  id="quantity"
                  name="quantity"
                  value={values.quantity}
                  onChange={handleChange}
                  type="number"
                />
              </label>
              <label htmlFor="warehouse" className="inventory-form__label">
                Warehouse
                <select
                  className="inventory-form__input inventory-form__input--select"
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
              </label>
            </>
          )}
        </div>
      </div>
      <div className="inventory-form__wrapper inventory-form__wrapper--options">
        <button
          type="button"
          className="inventory-form__button inventory-form__button--secondary"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inventory-form__button inventory-form__button--primary"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddEditForm;
