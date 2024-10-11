import React, { useState, useEffect } from "react";
import "./AddNewWarehouse.scss";
import arrowBackIcon from "../../assets/images/icons/navigation/arrow_back-24px.svg";
import errorIcon from "../../assets/images/icons/notification/error-24px.svg";
import { useNavigate } from "react-router-dom";
import {
  handleNav,
  validatePhoneNumber,
  validateEmail,
} from "../../utils/utils";
import { addWarehouse } from "../../services/warehouse-api.js";

const AddNewWarehouse = () => {
  const navigate = useNavigate();

  // State for form data and errors
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_phone: "",
    contact_position: "",
    contact_email: "",
  });

  const [errors, setErrors] = useState({});

  // Reset form data on mount
  useEffect(() => {
    setFormData({
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_phone: "",
      contact_position: "",
      contact_email: "",
    });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    // Required Field Warning flag
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    // Validate phone number
    if (
      formData.contact_phone &&
      !validatePhoneNumber(formData.contact_phone, "any", { strict: false })
    ) {
      newErrors.contact_phone =
        "Phone number is invalid. Please enter a valid one (e.g., +1 (123) 456-7890)";
    }
    // Validate email
    if (formData.contact_email && !validateEmail(formData.contact_email)) {
      newErrors.contact_email =
        "Email is invalid. Please enter a valid one(e.g., example@example.com)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await addWarehouse(formData);
        if (response.error) {
          setErrors(response.error.errors || {});
        } else {
          setFormData({
            warehouse_name: "",
            address: "",
            city: "",
            country: "",
            contact_name: "",
            contact_phone: "",
            contact_position: "",
            contact_email: "",
          });

          navigate("/warehouse");
        }
      } catch (error) {
        setErrors({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    }
  };

  return (
    <main className="main">
      <div className="add-warehouse">
        <div className="add-warehouse__header">
          <img
            src={arrowBackIcon}
            alt="Go back"
            className="edit-warehouse__back-icon"
            onClick={() => handleNav(navigate, "/warehouse")}
          />
          <h1 className="add-warehouse__title">Add New Warehouse</h1>
        </div>

        <form className="details" onSubmit={handleSubmit}>
          <div className="details__container">
            <div className="details__address">
              <h2 className="details__address-name">Warehouse Details</h2>

              <label
                htmlFor="warehouse_name"
                className="details__address-label"
              >
                Warehouse Name
              </label>
              <input
                type="text"
                id="warehouse_name"
                name="warehouse_name"
                placeholder="Warehouse Name"
                className={`details__address-input ${
                  errors.warehouse_name ? "error" : ""
                }`}
                value={formData.warehouse_name}
                onChange={handleChange}
              />
              {errors.warehouse_name && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.warehouse_name}
                </span>
              )}

              <label htmlFor="address" className="details__address-label">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                className={`details__address-input ${
                  errors.address ? "error" : ""
                }`}
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.address}
                </span>
              )}

              <label htmlFor="city" className="details__address-label">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className={`details__address-input ${
                  errors.city ? "error" : ""
                }`}
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.city}
                </span>
              )}

              <label htmlFor="country" className="details__address-label">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                className={`details__address-input ${
                  errors.country ? "error" : ""
                }`}
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.country}
                </span>
              )}
            </div>
            <div className="details__contacts">
              <h2 className="details__contacts-title">Contacts Details</h2>

              <label htmlFor="contact_name" className="details__contacts-label">
                Contact Name
              </label>
              <input
                type="text"
                id="contact_name"
                name="contact_name"
                placeholder="Contact Name"
                className={`details__contacts-input ${
                  errors.contact_name ? "error" : ""
                }`}
                value={formData.contact_name}
                onChange={handleChange}
              />
              {errors.contact_name && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.contact_name}
                </span>
              )}
              <label
                htmlFor="contact_position"
                className="details__contacts-label"
              >
                Position
              </label>
              <input
                type="text"
                id="contact_position"
                name="contact_position"
                placeholder="Position"
                className={`details__contacts-input ${
                  errors.contact_position ? "error" : ""
                }`}
                value={formData.contact_position}
                onChange={handleChange}
              />
              {errors.contact_position && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.contact_position}
                </span>
              )}

              <label
                htmlFor="contact_phone"
                className="details__contacts-label"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="contact_phone"
                name="contact_phone"
                placeholder="Phone Number"
                className={`details__contacts-input ${
                  errors.contact_phone ? "error" : ""
                }`}
                value={formData.contact_phone}
                onChange={handleChange}
              />
              {errors.contact_phone && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.contact_phone}
                </span>
              )}

              <label
                htmlFor="contact_email"
                className="details__contacts-label"
              >
                Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                placeholder="Email"
                className={`details__contacts-input ${
                  errors.contact_email ? "error" : ""
                }`}
                value={formData.contact_email}
                onChange={handleChange}
              />
              {errors.contact_email && (
                <span className="details__error">
                  <img
                    src={errorIcon}
                    alt="Warning Icon"
                    className="details__error-icon"
                  />
                  {errors.contact_email}
                </span>
              )}
            </div>
          </div>

          <div className="details__button-container">
            <button
              type="button"
              className="details__button details__button--cancel"
              onClick={() => handleNav(navigate, "/warehouse")}
            >
              Cancel
            </button>
            <button type="submit" className="details__button">
              + Add Warehouse
            </button>
          </div>

          {errors.general && (
            <span className="details__error details__error--general">
              <img
                src={errorIcon}
                alt="Warning Icon"
                className="details__error-icon"
              />
              {errors.general}
            </span>
          )}
        </form>
      </div>
    </main>
  );
};

export default AddNewWarehouse;
