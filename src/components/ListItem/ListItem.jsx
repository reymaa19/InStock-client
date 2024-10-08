import "./ListItem.scss";
function ListItem({ item }) {
  return (
    <div className="list-item">
      <div className="list-item__wrapper">
        <div className="list-item__container">
          <h4 className="list-item__header">WAREHOUSE</h4>
          <p className="list-item__value">{item.warehouse}</p>
        </div>
        <div className="list-item__container">
          <h4 className="list-item__header">CONTACT NAME</h4>
          <p className="list-item__value">{item.contact}</p>
        </div>
      </div>
      <div className="list-item__wrapper">
        <div className="list-item__container">
          <h4 className="list-item__header">ADDRESS</h4>
          <p className="list-item__value">{item.address}</p>
        </div>
        <div className="list-item__container">
          <h4 className="list-item__header">CONTACT NAME</h4>
          <p className="list-item__value">{item.contactInfo[0]}</p>
        </div>
      </div>
      <div className="list-item__wrapper list-item__wrapper--buttons">
        <button className="list-item__button list-item__button--edit" />
        <button className="list-item__button list-item__button--delete" />
      </div>
    </div>
  );
}

export default ListItem;
