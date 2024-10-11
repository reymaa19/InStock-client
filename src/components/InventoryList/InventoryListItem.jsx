import { useState } from "react";
import { Link } from "react-router-dom";
import "./InventoryListItem.scss";
import chevronRight from "../../assets/images/icons/navigation/chevron_right-24px.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";

function InventoryListItem({ item, fetchItems, warehouses }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = (deleted = false) => {
    if (deleted) fetchItems();
    setIsOpen(false);
  };

  const warehouseName = warehouses.find(
    ({ id }) => id === item.warehouse_id,
  ).warehouse_name;

  return (
    <div className="list-item" id={`list-item-${item.id}`}>
      <div className="list-item__wrapper">
        <div className="list-item__container">
          <h4 className="list-item__header">WAREHOUSE</h4>
          <Link
            className="list-item__value list-item__value--link"
            key={item.id}
            to={`/inventory/${item.id}`}
          >
            {item.item_name}
            <img
              className="list-item__chevron"
              src={chevronRight}
              alt="chevron right"
            />
          </Link>
        </div>
        <div className="list-item__container">
          <h4 className="list-item__header">CATEGORY</h4>
          <p className="list-item__value">{`${item.category}`}</p>
        </div>
        <button
          className="list-item__button list-item__button--delete"
          onClick={() => setIsOpen(true)}
        />
        <div className="list-item__container">
          <h4 className="list-item__header">STATUS</h4>
          <p className="list-item__value">{item.status}</p>
        </div>
        <div className="list-item__container">
          <h4 className="list-item__header">QUANTITY</h4>
          <p className="list-item__value">{item.quantity}</p>
        </div>
        <div className="list-item__container">
          <h4 className="list-item__header">WAREHOUSE</h4>
          <p className="list-item__value">{warehouseName}</p>
        </div>
        <div className="list-item__container list-item__container--edit">
          <button
            className="list-item__button list-item__button--delete list-item__button--primary"
            onClick={() => setIsOpen(true)}
          />
          <Link
            className="list-item__button list-item__button--edit"
            to={`/inventory/${item.id}`}
          />
        </div>
      </div>
      {isOpen && (
        <DeleteModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          id={item.id}
          name={item.item_name}
          type="inventory"
        />
      )}
    </div>
  );
}

export default InventoryListItem;
