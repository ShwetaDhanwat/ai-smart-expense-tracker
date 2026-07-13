import { expenseService } from "../services/expenseService";
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
 const [expenses, setExpenses] = useState([]);
 const fetchExpenses = async () => {
  try {
    const data = await expenseService.getExpenses();

    if (data.success) {
      setExpenses(data.expenses);
    }
  } catch (error) {
    console.error(error);
  }
};
 useEffect(() => {
  fetchExpenses();
}, []);

 const addExpense = async () => {
  await fetchExpenses();
};
  const deleteExpense = async (id) => {
  try {
    const response = await expenseService.deleteExpense(id);

    if (response.success) {
      fetchExpenses();
    }

    return response;
  } catch (error) {
    console.error(error);
  }
};

  return (
    <ExpenseContext.Provider
  value={{
    expenses,
    addExpense,
    deleteExpense,
  }}
>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  return useContext(ExpenseContext);
}