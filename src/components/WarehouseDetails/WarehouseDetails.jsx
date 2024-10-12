import { Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import arrow from "../../assets/images/icons/navigation/arrow_back-24px.svg";
import editHeader from "../../assets/images/icons/action/edit-24px.svg";

function WarehouseDetails(details) {
  const warehouse = details.details;
  return (
    <div className="details">
      <div className="nav">
        <Link to="/warehouse" className="nav__link">
          <img className="nav__arrow" src={arrow} alt="Return to Warehouses" />
        </Link>
        <h1 className="nav__name">{warehouse.warehouse_name}</h1>
        <div className="nav__end">
          <Link to={`/warehouse/edit/${warehouse.id}`} className="nav__link">
            <div className="nav__color">
              <img
                className="nav__edit"
                src={editHeader}
                alt="Edit Warehouse"
              />
              <p className="nav__edit-text">Edit</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="details__warehouse">
        <div className="details__wrapper">
          <div className="details__container details__container--left">
            <h4 className="details__header">WAREHOUSE ADDRESS:</h4>
            <p className="details__value">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
          </div>
        </div>

        <div className="details__wrapper details__wrapper--right">
          <div className="details__container">
            <h4 className="details__header">CONTACT NAME: </h4>
            <p className="details__value">{warehouse.contact_name}</p>
            <p className="details__value">{warehouse.contact_position}</p>
          </div>

          <div className="details__container">
            <h4 className="details__header">CONTACT INFORMATION: </h4>
            <p className="details__value">{warehouse.contact_phone}</p>
            <p className="details__value">{warehouse.contact_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
