import { useState } from "react";
import { Link } from "react-router-dom";
import "./InventoryListItem.scss";
import chevronRight from "../../assets/images/icons/navigation/chevron_right-24px.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";

/// import hooks, assets, components...

function InventoryListItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    
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
              <p className="list-item__value">
                {item.quantity}
              </p>
            </div>
            <div className="list-item__container">
                <h4 className="list-item__header">WAREHOUSE</h4>
                <p className="list-item__value">
                    {item.warehouse_id} {/* get the warehouse name */}
                </p>
            </div>
            <div className="list-item__container list-item__container--edit">
              <button
                className="list-item__button list-item__button--delete list-item__button--primary"
                onClick={() => setIsOpen(true)}
              />
              <button className="list-item__button list-item__button--edit" />
            </div>
          </div>
          {isOpen && (
            <DeleteModal
              isOpen={isOpen}
              closeModal={() => setIsOpen(false)}
              id={item.id}
              name={item.warehouse_name}
              type="warehouse"
            />
          )}
        </div>
    );
}

export default InventoryListItem;