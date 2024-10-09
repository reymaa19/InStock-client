import React from 'react';
import "./AddNewWarehouse.scss"
function AddNewWarehouse() {
  return (
    <div className="add-warehouse">
      <h1 className="add-warehouse__title">Add New Warehouse</h1>
      <form className="details">
        <div className="details__address">
            <h2 className="details__adress-title">Warehouse Details</h2>
            <label htmlFor="warehouse">Warehouse Name</label>
            <input type="text" id="warehouse" name="warehouse" placeholder="Warehouse Name" />
            <label htmlFor="address">Street Address</label>
            <input type="text" id="address" name="address" placeholder="Street Address" />
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" placeholder="City" />
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" placeholder="Country" />
        </div>

        <div className="details__contacts">
        <h2 className="details__adress-title">Contacts Details</h2>
            <label htmlFor="contact-name">Contact Name</label>
            <input type="text" id="contact-name" name="contact-name" placeholder="Contact Name" />
            <label htmlFor="position">Position</label>
            <input type="text" id="position" name="position" placeholder="Position" />
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" id="phone-number" name="phone-number" placeholder="Phone Number" />
            <label htmlFor="Email">Email</label>
            <input type="text" id="Email" name="Email" placeholder="Email" />
        </div>

        <button type="submit">Cancel</button>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default AddNewWarehouse;


