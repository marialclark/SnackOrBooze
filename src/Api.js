import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/**
 * SnackOrBoozeApi:
 * 
 * Provides methods for interacting with the Snack or Booze JSON server.
 */

class SnackOrBoozeApi {
	/**
	 * getSnacks()
	 * - Sends a GET request to /snacks
	 * - Returns an array of snack objects
	 */
	static async getSnacks() {
		const result = await axios.get(`${BASE_API_URL}/snacks`);
		return result.data;
	}

	/**
	 * getDrinks()
	 * - Sends a GET request to /drinks
	 * - Returns an array of drink objects
	 */
	static async getDrinks() {
		const result = await axios.get(`${BASE_API_URL}/drinks`);
		return result.data;
	}

	/**
	 * addItem(category, itemData)
	 * - Sends a POST request to /{category}
	 * - Returns newly created item data
	 */
	static async addItem(category, itemData) {
		const res = await axios.post(`${BASE_API_URL}/${category}`, itemData);
		return res.data;
	}
}

export default SnackOrBoozeApi;
