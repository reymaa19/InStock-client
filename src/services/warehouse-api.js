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

// Deletes a single warehouse.
export async function deleteWarehouse(id) {
  try {
    const url = `${BASE_URL}/warehouses/${id}`;
    const response = await axios.delete(url);
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

export async function addWarehouse(warehouseData) {
  try {
    const url = `${BASE_URL}/warehouses`;
    const response = await axios.post(url, warehouseData);
    
    return response.data;
  } catch (err) {
    // Log the error response if available, otherwise log the error message
    console.error('Error adding warehouse:', err.response || err.message);
    return err.response ? err.response.data : { error: 'An error occurred while adding the warehouse.' };
  }
}
export default {
  getWarehouses,

  deleteWarehouse,

  getSingleWarehouse,
  
  addWarehouse,
};
