import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import PageContainer from './components/container/PageContainer.vue';
import BaseCards from './components/container/BaseCards.vue';

import RecipeList from './components/RecipeList.vue';
import AddRecipeForm from './components/AddRecipeForm.vue';
import ViewFullRecipe from './components/ViewFullRecipe.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/Recipes', component: RecipeList },
    { path: '/addRecipe', component: AddRecipeForm },
    { path: '/Recipes/:recipeId', component: ViewFullRecipe },
    { path: '/:pathMatch(.*)*', component: RecipeList, redirect: '/Recipes' },
  ],
});

app.use(router);

app.component('page-container', PageContainer);
app.component('base-cards', BaseCards);

app.component('recipe-list', RecipeList);
app.component('add-recipe-form', AddRecipeForm);

app.mount('#app');
