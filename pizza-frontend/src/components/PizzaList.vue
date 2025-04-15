<template>
  <div>
    <h2>Pizza Menu</h2>
    <ul v-if="pizzas.length">
      <li v-for="pizza in pizzas" :key="pizza.id">
        <strong>{{ pizza.name }}</strong> - {{ pizza.description }}<br />
        <span>Price: ${{ pizza.price.toFixed(2) }}</span>
      </li>
    </ul>
    <div v-else>
      No pizzas found.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Pizza } from '../types/pizza';
import { getPizzas } from '../api/pizzaApi';

const pizzas = ref<Pizza[]>([]);

onMounted(async () => {
  pizzas.value = await getPizzas();
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}
</style>
