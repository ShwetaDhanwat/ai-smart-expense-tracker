const API_URL =
  "https://ai-smart-expense-tracker-t058.onrender.com/api/expenses";

export const authService = {

  async register(userData) {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    return await response.json();
  },

  async login(userData) {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    return await response.json();
  },

};