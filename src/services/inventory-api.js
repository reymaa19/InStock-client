import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetches all the inventory items.
export async function getInventory() {
  try {
    const url = `${BASE_URL}/inventory`;
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
export default {
  getInventory,
};
