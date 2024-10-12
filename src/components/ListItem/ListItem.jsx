import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";
import chevronRight from "../../assets/images/icons/navigation/chevron_right-24px.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";

function ListItem({ headers, item, fetchItems, type, warehouseName }) {
  const [isOpen, setIsOpen] = useState(false);
  const isInventory = type === "inventory" || type === "warehouse-inventory";

  const handleCloseModal = (isDeleted = false) => {
    if (isDeleted) fetchItems();
    setIsOpen(false);
  };

  return (
    <div className="list-item">
      <div className={`list-item__wrapper list-item__wrapper--${type}`}>
        <div className={`list-item__container list-item__container--${type}`}>
          <h4 className="list-item__header">{headers[0]}</h4>
          <Link
            className="list-item__value list-item__value--link"
            key={item.id}
            to={`/${isInventory ? "inventory" : "warehouse"}/${item.id}`}
          >
            {isInventory ? item.item_name : item.warehouse_name}
            <img
              className="list-item__chevron"
              src={chevronRight}
              alt="chevron right"
            />
          </Link>
        </div>

        <div className={`list-item__container list-item__container--${type}`}>
          <h4 className="list-item__header">{headers[1]}</h4>
          <p className="list-item__value">
            {isInventory
              ? item.category
              : `${item.address} ${item.city}, ${item.country}`}
          </p>
        </div>

        <div className="list-item__container list-item__container--hidden">
          <button
            className={`list-item__button list-item__button--delete`}
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className={`list-item__container list-item__container--${type}`}>
          <h4 className="list-item__header">{headers[2]}</h4>
          {isInventory ? (
            <p
              className={`list-item__status ${item.status === "In Stock" ? "list-item__status--in-stock" : "list-item__status--out-of-stock"}`}
            >
              {item.status}
            </p>
          ) : (
            <p className="list-item__value">{item.contact_name}</p>
          )}
        </div>

        <div className={`list-item__container list-item__container--${type}`}>
          <h4 className="list-item__header">{headers[3]}</h4>
          <p className="list-item__value">
            {isInventory
              ? item.quantity
              : `${item.contact_phone} ${item.contact_email}`}
          </p>
        </div>

        {headers[4] && (
          <div className={`list-item__container list-item__container--${type}`}>
            <h4 className="list-item__header">{headers[4]}</h4>
            <p className="list-item__value">{warehouseName}</p>
          </div>
        )}

        <div className="list-item__container list-item__container--action">
          <button
            className="list-item__button list-item__button--delete list-item__button--primary"
            onClick={() => setIsOpen(true)}
          />
          <Link
            className="list-item__button list-item__button--edit"
            to={`/${isInventory ? "inventory" : "warehouse"}/edit/${item.id}`}
          />
        </div>
      </div>
      {isOpen && (
        <DeleteModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          id={item.id}
          name={isInventory ? item.item_name : item.warehouse_name}
          type={isInventory ? "inventory" : "warehouse"}
        />
      )}
    </div>
  );
}

export default ListItem;
