import axios from 'axios';
import type { Pizza } from '../types/pizza';

const API_URL = 'http://localhost:5157/api/pizzas';

export async function getPizzas(): Promise<Pizza[]> {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function getPizza(id: number): Promise<Pizza> {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
}

export async function createPizza(pizza: Omit<Pizza, 'id'>): Promise<Pizza> {
  const res = await axios.post(API_URL, pizza);
  return res.data;
}

export async function updatePizza(pizza: Pizza): Promise<void> {
  await axios.put(`${API_URL}/${pizza.id}`, pizza);
}

export async function deletePizza(id: number): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}
