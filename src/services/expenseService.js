const API_URL = "http://localhost:5000/api/expenses";
const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const expenseService = {

  async getSummary() {
    const response = await fetch(`${API_URL}/summary`, {
  headers: getAuthHeaders(),
});
    return await response.json();
  },
  async getMonthlyChart() {
 const response = await fetch(`${API_URL}/monthly-chart`, {
  headers: getAuthHeaders(),
});
  return await response.json();
},
async getAIInsights() {
  const response = await fetch(`${API_URL}/ai-insights`, {
    headers: getAuthHeaders(),
  });

  return await response.json();
},

  async getExpenses() {
   const response = await fetch(API_URL, {
  headers: getAuthHeaders(),
});
    return await response.json();
  },

  async addExpense(expense) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(expense),
    });

    return await response.json();
  },

  async updateExpense(id, expense) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
     headers: getAuthHeaders(),
      body: JSON.stringify(expense),
    });

    return await response.json();
  },

  async deleteExpense(id) {
   const response = await fetch(`${API_URL}/${id}`, {
  method: "DELETE",
  headers: getAuthHeaders(),
});

    return await response.json();
  },

};