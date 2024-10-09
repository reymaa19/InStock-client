import React from "react";
import "./InventoryPage.scss";
import Header from "../../components/Header/Header.jsx";
import InventoryList from "../../components/InventoryList/InventoryList.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function InventoryPage() {


  return (
    <div>
      <Header />
      <InventoryList />
      <Footer />
    </div>
  );
}

export default InventoryPage;
