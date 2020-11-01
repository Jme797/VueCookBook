import { createApp } from 'vue';
/* import { createRouter, createWebHistory } from 'vue-router'; */
import App from './App.vue';

import PageContainer from './components/container/PageContainer.vue';
import BaseCards from './components/container/BaseCards.vue';

import RecipeList from './components/RecipeList.vue';
import AddRecipeForm from './components/AddRecipeForm.vue';

const app = createApp(App);
/* const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/Recipes', component: RecipeList },
    { path: '/addRecipe', component: AddRecipeForm },
  ],
}); */

/* app.use(router); */

app.component('page-container', PageContainer);
app.component('base-cards', BaseCards);

app.component('recipe-list', RecipeList);
app.component('add-recipe-form', AddRecipeForm);

app.mount('#app');
