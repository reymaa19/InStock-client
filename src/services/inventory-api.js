import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetches all the inventory items.
export async function getInventory() {
  try {
    const url = `${BASE_URL}/inventories`;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    return err.response;
  }
}

// Fetches single inventory item.
export async function getSingleItem(id) {
  try {
    const url = `${BASE_URL}/inventories/${id}`;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    return err.response;
  }
}

// Updates single inventory item
export async function updateInventoryItem(id, data) {
  try {
    const url = `${BASE_URL}/inventories/${id}`;
    await axios.put(url, data);
    return "OK";
  } catch (err) {
    return err.response;
  }
}

// Adds a new inventory item
export async function addInventoryItem(newItem) {
  try {
    const url = `${BASE_URL}/inventories`;
    const response = await axios.post(url, newItem);
    return response;
  } catch (err) {
    return err.response;
  }
}

export default {
  getInventory,
  getSingleItem,
  updateInventoryItem,
  addInventoryItem,
};
