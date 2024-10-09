import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";
import chevronRight from "../../assets/images/icons/navigation/chevron_right-24px.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";

function ListItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="list-item">
      <div className="list-item__wrapper">
        <div className="list-item__container">
          <h4 className="list-item__header">WAREHOUSE</h4>
          <Link to="/" className="list-item__value list-item__value--link">
            {item.warehouse_name}
            <img
              className="list-item__chevron"
              src={chevronRight}
              alt="chevron right"
            />
          </Link>
        </div>

        <div className="list-item__container">
          <h4 className="list-item__header">ADDRESS</h4>
          <p className="list-item__value">{`${item.address} ${item.city}, ${item.country}`}</p>
        </div>

        <button
          className="list-item__button list-item__button--delete"
          onClick={() => setIsOpen(true)}
        />

        <div className="list-item__container">
          <h4 className="list-item__header">CONTACT NAME</h4>
          <p className="list-item__value">{item.contact_name}</p>
        </div>

        <div className="list-item__container">
          <h4 className="list-item__header">CONTACT INFORMATION</h4>
          <p className="list-item__value">
            {item.contact_phone} {item.contact_email}
          </p>
        </div>

        <div className="list-item__container list-item__container--edit">
          <button className="list-item__button list-item__button--edit" />
        </div>
      </div>
      <DeleteModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        id={item.id}
        name={item.warehouse_name}
        type="warehouse"
      />
    </div>
  );
}

export default ListItem;
