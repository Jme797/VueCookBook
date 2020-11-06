<template>
  <translation>
    <div class="spinnerContainer">
      <img v-if="loading" class="spinner" src="../assets/images/spinner.png" />
    </div>
  </translation>
  <page-container class="background" v-if="!loading">
    <h1>{{ selectedRecipe.name }}</h1>
    <p>{{ selectedRecipe.description }}</p>
    <h2>Ingredients</h2>
    <div>
      <ul>
        <li
          v-for="i in selectedRecipe.ingredients"
          :key="selectedRecipe.ingredients.findIndex(element => (element = i))"
        >
          {{ i }}
        </li>
      </ul>
    </div>
    <h2>Method</h2>
    <div>
      <ul>
        <li
          class="method"
          v-for="step in selectedRecipe.steps"
          :key="selectedRecipe.ingredients.findIndex(element => (element = step))"
        >
          {{ step }}
        </li>
      </ul>
    </div>
    <div class="buttonRight">
      <router-link to="/" class="buttonColor">
        Back to All recipes
      </router-link>
    </div>
  </page-container>
</template>

<script>
export default {
  inject: ['recipes'],
  data() {
    return {
      selectedRecipe: {},
      loading: true,
    };
  },
  created: function() {
    const recipeId = this.$route.params.recipeId;
    let recipe = this.recipes.find(recipe => recipe.id == recipeId);
    this.selectedRecipe = recipe;
    if (recipe == undefined) {
      setTimeout(() => {
        recipe = this.recipes.find(recipe => recipe.id == recipeId);
        this.selectedRecipe = recipe;
        this.loading = false;
      }, 1000);
    } else {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 4px;
}
h1,
h2,
li {
  text-transform: capitalize;
}
li {
  list-style: none;
}
ul,
p {
  padding-left: 20px;
}
.method {
  list-style: disc;
}
.background {
  background-color: rgb(224, 255, 242);
  border-radius: 9px;
  box-shadow: 2px 4px 10px slategray;
  padding-bottom: 50px;
}
.buttonRight {
  padding-top: 30px;
}
.spinnerContainer {
  text-align: center;
  width: 100%;
}
.spinner {
  margin: 0 auto;
  width: 300px;
  animation: spin 8s ease-out;
  margin-top: 50px;
  opacity: 0.8;
}
@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.8;
  }

  50% {
    transform: rotate(360deg) scale(0.5);
  }
  100% {
    transform: rotate(720deg) scale(1);
  }
}
</style>
