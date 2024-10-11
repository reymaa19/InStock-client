import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleNav } from "../../utils/utils.js";
import "./ListItem.scss";
import chevronRight from "../../assets/images/icons/navigation/chevron_right-24px.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";

function ListItem({ item, fetchItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = (deleted = false) => {
    if (deleted) fetchItems();
    setIsOpen(false);
  };

  return (
    <div className="list-item" id={`list-item-${item.id}`}>
      <div className="list-item__wrapper">
        <div className="list-item__container">
          <h4 className="list-item__header">WAREHOUSE</h4>
          <Link
            className="list-item__value list-item__value--link"
            key={item.id}
            to={`/warehouse/${item.id}`}
          >
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
          <button
            className="list-item__button list-item__button--delete list-item__button--primary"
            onClick={() => setIsOpen(true)}
          />
          <button
            className="list-item__button list-item__button--edit"
            onClick={() => handleNav(navigate, `/warehouse/edit/${item.id}`)}
          />
        </div>
      </div>
      {isOpen && (
        <DeleteModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          id={item.id}
          name={item.warehouse_name}
          type="warehouse"
        />
      )}
    </div>
  );
}

export default ListItem;
