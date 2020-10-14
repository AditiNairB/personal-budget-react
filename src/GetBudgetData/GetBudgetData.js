import axios from "axios";

export const getBudgetData = () => {
  return axios.get('http://localhost:3000/budget');
};