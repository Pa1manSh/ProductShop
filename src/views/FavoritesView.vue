<template>
  <div>
    <h1>Избранное</h1>
    <div class="favorites-grid">
      <CardComponent
        v-for="product in favoritesStore.favorites"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :id="product.id"
        @remove-from-favorites="removeFromFavorites(product.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "../stores/favorites";
import CardComponent from "../components/CardComponent.vue";

const favoritesStore = useFavoritesStore();

const removeFromFavorites = (productId) => {
  favoritesStore.removeFavorite(productId);
};
</script>

<style scoped>
.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
