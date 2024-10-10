import React, { useState } from 'react';
import './AddNewWarehouse.scss';
import arrowBackIcon from '../../assets/images/icons/navigation/arrow_back-24px.svg';
import validator from 'validator';
import { Link,useNavigate } from 'react-router-dom';
import { handleNav } from "../../utils/utils";


function AddNewWarehouse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouse: '',
    address: '',
    city: '',
    country: '',
    contactName: '',
    position: '',
    phoneNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = "This field is required"; 
      }
    });

    // Validate phone number
    if (formData.phoneNumber && !validator.isMobilePhone(formData.phoneNumber, 'any', { strict: false })) {
      newErrors.phoneNumber = 'Phone number is invalid';
    }

    // Validate email
    if (formData.email && !validator.isEmail(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/warehouses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setErrors(errorData.errors);
        } else {
          console.log('Warehouse added successfully:', await response.json());
          setFormData({
            warehouse: '',
            address: '',
            city: '',
            country: '',
            contactName: '',
            position: '',
            phoneNumber: '',
            email: ''
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <main className="main">
    <div className="add-warehouse">
      <div className="add-warehouse__header">
        {/* <Link to ="/"> */}
        <img
            src={arrowBackIcon}
            alt="Go back"
            className="edit-warehouse__back-icon"
            onClick={() => handleNav(navigate, "/warehouse")}
          />
       
        {/* </Link> */}
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>

      {/* <div className="edit-warehouse__header">
          <img
            src={arrowBackIcon}
            alt="Go back"
            className="edit-warehouse__back-icon"
            onClick={() => handleNav(navigate, "/warehouse")}
          />
          <h1 className="edit-warehouse__title">Edit Warehouse</h1>
        </div> */}
      
        <form className="details" onSubmit={handleSubmit}>
        <div className="details__container">
          <div className="details__address">
            <h2 className="details__address-name">Warehouse Details</h2>
            <label htmlFor="warehouse" className="details__address-label">Warehouse Name</label>
            <input
              type="text"
              id="warehouse"
              name="warehouse"
              placeholder="Warehouse Name"
              className="details__address-input"
              value={formData.warehouse}
              onChange={handleChange}
            />
            {errors.warehouse && <span className="error">{errors.warehouse}</span>}

            <label htmlFor="address" className="details__address-label">Street Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Street Address"
              className="details__address-input"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}

            <label htmlFor="city" className="details__address-label">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="details__address-input"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span className="error">{errors.city}</span>}

            <label htmlFor="country" className="details__address-label">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              className="details__address-input"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && <span className="error">{errors.country}</span>}
          </div>

          <div className="details__contacts">
            <h2 className="details__contacts-title">Contacts Details</h2>
            <label htmlFor="contactName" className="details__contacts-name">Contact Name</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              placeholder="Contact Name"
              className="details__contacts-input"
              value={formData.contactName}
              onChange={handleChange}
            />
            {errors.contactName && <span className="error">{errors.contactName}</span>}

            <label htmlFor="position" className="details__contacts-name">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Position"
              className="details__contacts-input"
              value={formData.position}
              onChange={handleChange}
            />
            {errors.position && <span className="error">{errors.position}</span>}

            <label htmlFor="phoneNumber" className="details__contacts-name">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              className="details__contacts-input"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

            <label htmlFor="email" className="details__contacts-name">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="details__contacts-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        <div className="details__button-container">
        
            <button
              type="button"
              className="details__button details__button-cancel"
              onClick={() => handleNav(navigate, "/warehouse")}
            >
              Cancel
            </button>
         
            <button
              type="submit"
              className="details__button details__button-save"
            >
              + Add Warehouse
            </button>
          
          </div>
      </form>
    </div>
    </main>
  );
}

export default AddNewWarehouse;

