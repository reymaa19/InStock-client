import React from 'react';
import "./AddNewWarehouse.scss";
import arrowBackIcon from "../../assets/images/icons/navigation/arrow_back-24px.svg"
function AddNewWarehouse() {
  return (
    <div className="add-warehouse">
      <div className="add-warehouse__header">
      <img src={arrowBackIcon} alt="Go back" className="add-warehouse__back-icon" />
      <h1 className="add-warehouse__title">Add New Warehouse</h1>

      </div>
    
      <form className="details">
        <div className="details__address">
            <h2 className="details__adress-name">Warehouse Details</h2>
            <label htmlFor="warehouse" className="details__address-label">Warehouse Name</label>
            <input type="text" id="warehouse" name="warehouse" placeholder="Warehouse Name" className="details__address-input"/>
            <label htmlFor="address" className="details__address-name">Street Address</label>
            <input type="text" id="address" name="address" placeholder="Street Address" className="details__address-input"/>
            <label htmlFor="city" className="details__address-label">City</label>
            <input type="text" id="city" name="city" placeholder="City" className="details__address-input"/>
            <label htmlFor="country" className="details__address-label">Country</label>
            <input type="text" id="country" name="country" placeholder="Country" className="details__address-input"/>
        </div>

        <div className="details__contacts">
        <h2 className="details__adress-title">Contacts Details</h2>
            <label htmlFor="contact-name"className="details__contacts-name">Contact Name</label>
            <input type="text" id="contact-name" name="contact-name" placeholder="Contact Name" className="details__contacts-input"/>
            <label htmlFor="position"className="details__contacts-name">Position</label>
            <input type="text" id="position" name="position" placeholder="Position" className="details__contacts-input"/>
            <label htmlFor="phone-number"className="details__contacts-name">Phone Number</label>
            <input type="text" id="phone-number" name="phone-number" placeholder="Phone Number"className="details__contacts-input" />
            <label htmlFor="Email"className="details__contacts-name">Email</label>
            <input type="text" id="Email" name="Email" placeholder="Email" className="details__contacts-input"/>
        </div>

        <button type="submit">Cancel</button>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default AddNewWarehouse;


