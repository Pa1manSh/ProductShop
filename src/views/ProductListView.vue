<template>
  <div>
    <h1>Список товаров</h1>
    <div class="product-grid">
      <CardComponent
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :id="product.id"
        :is-favorite="isFavorite(product)"
        @view-details="openDetails(product)"
        @toggle-favorite="toggleFavorite(product)"
      />
    </div>

    <!-- Попап для отображения деталей товара -->
    <CardComponentDetails
      :product="selectedProduct"
      :visible="!!selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardComponent from "../components/CardComponent.vue";
import CardComponentDetails from "../components/CardComponentDetails.vue";
import { useFavoritesStore } from "../stores/favorites";

const products = ref([
  { id: 1, name: "Товар 1", description: "Описание 1", price: 100 },
  { id: 2, name: "Товар 2", description: "Описание 2", price: 200 },
  { id: 3, name: "Товар 3", description: "Описание 3", price: 300 },
  { id: 4, name: "Товар 4", description: "Описание 4", price: 400 },
  { id: 5, name: "Товар 5", description: "Описание 5", price: 500 },
  { id: 6, name: "Товар 6", description: "Описание 6", price: 600 },
  { id: 7, name: "Товар 7", description: "Описание 7", price: 700 },
  { id: 8, name: "Товар 8", description: "Описание 8", price: 800 },
  { id: 9, name: "Товар 9", description: "Описание 9", price: 900 },
]);

const favoritesStore = useFavoritesStore();
const selectedProduct = ref(null);

const openDetails = (product) => {
  selectedProduct.value = product;
};

const isFavorite = (product) => {
  return favoritesStore.isFavorite(product);
};

const toggleFavorite = (product) => {
  if (isFavorite(product)) {
    favoritesStore.removeFavorite(product.id);
  } else {
    favoritesStore.addFavorite(product);
  }
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-grid > * {
  margin-bottom: 20px;
}
</style>
