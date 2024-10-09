import { Link } from "react-router-dom";
import "./WarehouseDetails.scss";

function WarehouseDetails(details) {
  const warehouse = details.details;
  return (
    <div className="details">
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
  );
}

export default WarehouseDetails;
