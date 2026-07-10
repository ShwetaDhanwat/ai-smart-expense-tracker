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
 useEffect(() => {
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

  fetchExpenses();
}, []);

  const addExpense = (expense) => {
    setExpenses((prev) => [
      {
        id: Date.now(),
        ...expense,
      },
      ...prev,
    ]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  return useContext(ExpenseContext);
}