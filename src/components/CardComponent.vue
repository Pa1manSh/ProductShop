<template>
  <div class="card" @click="viewDetails">
    <div class="card-content">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <p>\${{ price }}</p>
    </div>
    <button @click.stop="toggleFavorite">
      {{ isFavorite ? "Удалить из избранного" : "Добавить в избранное" }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from "vue";
import { useFavoritesStore } from "../stores/favorites";

const props = defineProps({
  name: String,
  description: String,
  price: Number,
  id: Number,
});

const emit = defineEmits(["view-details"]);

const favoritesStore = useFavoritesStore();

const isFavorite = computed(() => favoritesStore.isFavorite({ id: props.id }));

const toggleFavorite = () => {
  if (isFavorite.value) {
    favoritesStore.removeFavorite(props.id);
  } else {
    favoritesStore.addFavorite({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
    });
  }
};

const viewDetails = () => {
  emit("view-details");
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  background: #c6dbb7;
}

.card-content h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.card-content p {
  margin: 10px 0;
  color: #666;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}
</style>
