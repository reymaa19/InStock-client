import "./EditWarehouse.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { handleNav } from "../../utils/utils";
import arrowBackIcon from "../../assets/images/icons/navigation/arrow_back-24px.svg";
import errorIcon from "../../assets/images/icons/notification/error-24px.svg";
import {
  getSingleWarehouse,
  editSingleWarehouse,
} from "../../services/warehouse-api";

function EditWarehouse() {
  const navigate = useNavigate();
  const { id } = useParams();

  //state to store the form values
  const [values, setValues] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  //fetch warehouse data when component mounts or when "id" changes
  useEffect(() => {
    const fetchWarehouse = async () => {
      const response = await getSingleWarehouse(id);
      setValues(response.data);
    };

    //fetch data if id is available
    id && fetchWarehouse();
  }, [id]);

  const handleChange = (e) => {
    setValues({
      ...values, //copy the existing value
      [e.target.name]: e.target.value, //update the fields that changed
    });
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    /* add validation here */

    if (id) {
      try {
        //call editSingleWarehouse function, pass the warehouse id and updated data
        await editSingleWarehouse(id, values);
        // navigate("/warehouse");
      } catch (err) {
        console.error("Error updating warehouse: ", err);
      }
    }
  };

  return (
    <main className="main">
      <div className="edit-warehouse">
        <div className="edit-warehouse__header">
          <img
            src={arrowBackIcon}
            alt="Go back"
            className="edit-warehouse__back-icon"
            onClick={() => handleNav(navigate, "/warehouse")}
          />
          <h1 className="edit-warehouse__title">Edit Warehouse</h1>
        </div>

        <form className="details" onSubmit={handleSubmit}>
          <div className="details__tablet-container">
            <div className="details__address">
              <h2 className="details__adress-name">Warehouse Details</h2>
              <label htmlFor="warehouse" className="details__address-label">
                Warehouse Name
              </label>
              <input
                type="text"
                id="warehouse"
                name="warehouse_name"
                value={values.warehouse_name}
                onChange={handleChange}
                placeholder="Warehouse Name"
                className="details__address-input"
              />
              <label htmlFor="address" className="details__address-name">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                placeholder="Street Address"
                className="details__address-input"
              />
              <label htmlFor="city" className="details__address-label">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                placeholder="City"
                className="details__address-input"
              />
              <label htmlFor="country" className="details__address-label">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={values.country}
                onChange={handleChange}
                placeholder="Country"
                className="details__address-input"
              />
            </div>

            <div className="details__contacts">
              <h2 className="details__contacts-title">Contacts Details</h2>
              <label htmlFor="contact-name" className="details__contacts-name">
                Contact Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="contact_name"
                value={values.contact_name}
                onChange={handleChange}
                placeholder="Contact Name"
                className="details__contacts-input"
              />
              <label htmlFor="position" className="details__contacts-name">
                Position
              </label>
              <input
                type="text"
                id="position"
                name="contact_position"
                value={values.contact_position}
                onChange={handleChange}
                placeholder="Position"
                className="details__contacts-input"
              />
              <label htmlFor="phone-number" className="details__contacts-name">
                Phone Number
              </label>
              <input
                type="text"
                id="phone-number"
                name="contact_phone"
                value={values.contact_phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="details__contacts-input"
              />
              <label htmlFor="Email" className="details__contacts-name">
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="contact_email"
                value={values.contact_email}
                onChange={handleChange}
                placeholder="Email"
                className="details__contacts-input"
              />
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
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditWarehouse;
