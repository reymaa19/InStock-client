import { Link } from "react-router-dom";
import "./ListItem.scss";
function ListItem({ item }) {
  return (
    <div className="list-item">
      <div className="list-item__wrapper">
        <div className="list-item__container">
          <h4 className="list-item__header">WAREHOUSE</h4>
          <Link to="/" className="list-item__value list-item__value--link">
            {item.warehouse_name}
          </Link>
        </div>
        <div className="list-item__container">
          <h4 className="list-item__header">CONTACT NAME</h4>
          <p className="list-item__value">{item.contact_name}</p>
        </div>
      </div>
      <div className="list-item__wrapper">
        <div className="list-item__container">
          <h4 className="list-item__header">ADDRESS</h4>
          <p className="list-item__value">{`${item.address} ${item.city} ${item.country}`}</p>
        </div>
        <div className="list-item__container">
          <h4 className="list-item__header">CONTACT INFORMATION</h4>
          <p className="list-item__value">{item.contact_phone}</p>
          <p className="list-item__value">{item.contact_email}</p>
        </div>
      </div>
      <div className="list-item__wrapper list-item__wrapper--buttons">
        <button className="list-item__button list-item__button--delete" />
        <button className="list-item__button list-item__button--edit" />
      </div>
    </div>
  );
}

export default ListItem;
