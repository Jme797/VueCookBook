<template>
  <NavBar />
  <page-container>
    <router-view @save-recipe="saveRecipe"></router-view>
  </page-container>
</template>

<script>
import NavBar from './components/nav/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
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
  provide() {
    return {
      recipes: this.recipes,
    };
  },
  methods: {
    saveRecipe(n, i, s, d) {
      const newId = new Date().toISOString();
      this.recipes.push({
        id: newId,
        name: n,
        desc: d,
        imageName: 'lasange.png',
        steps: s,
        ingredients: i,
      });
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
  text-decoration: none !important;
}
button:hover,
.buttonColor:hover {
  color: rgb(124, 124, 124);
}
.buttonRight {
  width: 100%;
  text-align: right;
}
</style>
