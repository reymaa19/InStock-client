import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";
import chevronRight from "../../assets/images/icons/navigation/chevron_right-24px.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";

function ListItem({
  headers,
  item,
  fetchItems,
  inventories = [],
  warehouses = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const type = inventories.length === 0 ? "inventory" : "warehouse";
  const isInventory = type === "inventory";

  const handleCloseModal = (deleted = false) => {
    if (deleted) fetchItems();
    setIsOpen(false);
  };

  return (
    <div className="list-item">
      <div
        className={`list-item__wrapper${isInventory ? " list-item__wrapper--inventory" : ""}`}
      >
        <div className="list-item__wrapper list-item__wrapper--group-first">
          <div
            className={`list-item__container ${isInventory ? "list-item__container--inventory" : ""}`}
          >
            <h4 className="list-item__header">{headers[0]}</h4>
            <Link
              className="list-item__value list-item__value--link"
              key={item.id}
              to={`/${type}/${item.id}`}
            >
              {isInventory ? item.item_name : item.warehouse_name}
              <img
                className="list-item__chevron"
                src={chevronRight}
                alt="chevron right"
              />
            </Link>
          </div>

          <div
            className={`list-item__container ${isInventory ? "list-item__container--inventory" : ""}`}
          >
            <h4 className="list-item__header">{headers[1]}</h4>
            <p className="list-item__value">
              {isInventory
                ? item.category
                : `${item.address} ${item.city}, ${item.country}`}
            </p>
          </div>

          <button
            className={`list-item__button list-item__button--delete ${isInventory ? "list-item__button--inventory" : ""}`}
            onClick={() => setIsOpen(true)}
          />

          <div
            className={`list-item__container ${isInventory ? "list-item__container--inventory" : ""}`}
          >
            <h4 className="list-item__header">{headers[2]}</h4>
            {isInventory ? (
              <p
                className={`list-item__status ${item.status === "In Stock" ? "list-item__status--in-stock" : ""}`}
              >
                {item.status}
              </p>
            ) : (
              <p className="list-item__value">{item.contact_name}</p>
            )}
          </div>
        </div>

        <div className="list-item__wrapper list-item__wrapper--group-second">
          <div
            className={`list-item__container ${isInventory ? "list-item__container--inventory" : ""}`}
          >
            <h4 className="list-item__header">{headers[3]}</h4>
            <p className="list-item__value">
              {isInventory
                ? item.quantity
                : `${item.contact_phone} ${item.contact_email}`}
            </p>
          </div>

          {isInventory && (
            <div
              className={`list-item__container ${isInventory ? "list-item__container--inventory" : ""}`}
            >
              <h4 className="list-item__header">{headers[4]}</h4>
              <p className="list-item__value">
                {
                  warehouses.find(({ id }) => id === item.warehouse_id)
                    .warehouse_name
                }
              </p>
            </div>
          )}
        </div>

        <div className="list-item__container list-item__container--actions">
          <button
            className="list-item__button list-item__button--delete list-item__button--primary"
            onClick={() => setIsOpen(true)}
          />
          <Link
            className="list-item__button list-item__button--edit"
            to={`/warehouse/edit/${item.id}`}
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
