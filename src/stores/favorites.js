import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  const addFavorite = (product) => {
    if (!favorites.value.find((item) => item.id === product.id)) {
      favorites.value.push(product);
    }
  };

  const removeFavorite = (productId) => {
    favorites.value = favorites.value.filter((item) => item.id !== productId);
  };

  const isFavorite = (product) => {
    return favorites.value.some((item) => item.id === product.id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
});
