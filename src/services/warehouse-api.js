import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetches all the warehouses.
export async function getWarehouses(query) {
  try {
    const url = `${BASE_URL}/warehouses${query ? "?" + query.join(",") : ""}`;
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

// edit single warehouse
export async function editSingleWarehouse(id, data) {
  try {
    const url = `${BASE_URL}/warehouses/${id}`;
    const response = await axios.put(url, data);

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
    return err.response
      ? err.response.data
      : { error: "An error occurred while adding the warehouse." };
  }
}

export async function getWarehouseInventory(id) {
  try {
    const url = `${BASE_URL}/warehouses/${id}/inventories`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    return error.response;
  }
}

export default {
  getWarehouses,
  deleteWarehouse,
  getSingleWarehouse,
  editSingleWarehouse,
  addWarehouse,
  getWarehouseInventory,
};
