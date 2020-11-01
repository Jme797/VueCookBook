<template>
  <NavBar @changePage="changeActivePage" />
  <page-container flex="true" v-if="this.activePage == 'View Recipes' && !fullRecipe">
    <RecipeList
      v-for="i in recipes"
      :key="i.id"
      :id="i.id"
      :name="i.name"
      :description="i.desc"
      :imageURL="i.imageName"
      linkURL="#"
      @showFullRecipeFor="showFullRecipe"
    />
  </page-container>
  <page-container v-if="fullRecipe">
    <ViewFullRecipe
      :id="selectedRecipe.id"
      :name="selectedRecipe.name"
      :desc="selectedRecipe.desc"
      :imageName="selectedRecipe.imageName"
      :steps="selectedRecipe.steps"
      :ingredients="selectedRecipe.ingredients"
      @backToAllRecipes="showAllRecipes"
    />
  </page-container>
  <page-container v-if="this.activePage == 'Add Recipe'">
    <AddRecipeForm @SaveRecipe="saveRecipe" />
  </page-container>
</template>

<script>
import NavBar from './components/nav/NavBar.vue';
import RecipeList from './components/RecipeList.vue';
import AddRecipeForm from './components/AddRecipeForm.vue';
import ViewFullRecipe from './components/ViewFullRecipe.vue';

export default {
  components: {
    NavBar,
    RecipeList,
    AddRecipeForm,
    ViewFullRecipe,
  },
  data() {
    return {
      activePage: 'View Recipes',
      fullRecipe: false,
      selectedRecipe: {},
      recipes: [
        {
          id: 1,
          name: 'lasange',
          desc: 'An amazing food item, highly recommended',
          imageName: 'lasange.png',
          steps: ['prepare', 'cook', 'eat'],
          ingredients: ['sauce', 'cheese', 'beef'],
        },
        {
          id: 2,
          name: 'Pasta',
          desc: 'An amazing food item, highly recommended',
          imageName: 'lasange.png',
          steps: ['prepare', 'cook', 'eat'],
          ingredients: ['sauce', 'cheese', 'beef'],
        },
        {
          id: 3,
          name: 'Fajitas',
          desc: 'An amazing food item, highly recommended',
          imageName: 'lasange.png',
          steps: ['prepare', 'cook', 'eat'],
          ingredients: ['sauce', 'cheese', 'beef'],
        },
        {
          id: 4,
          name: 'Pie',
          desc: 'An amazing food item, highly recommended',
          imageName: 'lasange.png',
          steps: ['prepare', 'cook', 'eat'],
          ingredients: ['sauce', 'cheese', 'beef'],
        },
      ],
    };
  },
  methods: {
    changeActivePage(page) {
      this.activePage = page;
      this.fullRecipe = false;
    },
    saveRecipe(n, i, s, d) {
      const newId = new Date().toISOString();
      this.activePage = 'View Recipes';
      this.recipes.push({
        id: newId,
        name: n,
        desc: d,
        imageName: 'lasange.png',
        steps: s,
        ingredients: i,
      });
    },
    showFullRecipe(id) {
      const index = this.recipes.findIndex(element => element.id == id);
      this.selectedRecipe = this.recipes[index];
      this.fullRecipe = true;
    },
    showAllRecipes() {
      this.fullRecipe = false;
    },
  },
};
</script>

<style>
* {
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
}
h1 {
  font-family: 'Grandstander', cursive;
}
h3,
p,
h2 {
  margin: 10px 0;
}
button,
a {
  cursor: pointer;
}
button {
  padding: 8px 36px;
  margin: 4px;
  background-color: rgba(0, 255, 255, 0);
  border: none;
  outline: none;
}
.buttonColor {
  padding: 8px 36px;
  margin: 4px;
  background-color: rgb(252, 206, 206);
}
button:hover {
  color: rgb(124, 124, 124);
}
.buttonRight {
  width: 100%;
  text-align: right;
}
</style>
