import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetches all the warehouses.
export async function getWarehouses() {
  try {
    const url = `${BASE_URL}/warehouses`;
    const response = await axios.get(url);

    return response;
  } catch (err) {
    return err.response;
  }
}

// Fetches single warehouses.
export async function getSingleWarehouse(id) {
  try {
    const url = `${BASE_URL}/warehouses/${id}`;
    const response = await axios.get(url);

    return response;
  } catch (err) {
    return err.response;
  }
}

export default {
  getWarehouses,
  getSingleWarehouse,
};
