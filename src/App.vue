<template>
  <NavBar />
  <page-container>
    <router-view></router-view>
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
      recipes: [],
    };
  },
  provide() {
    return {
      recipes: this.recipes,
      imageURL: 'http://localhost/php-cook-book/imageUploads/',
    };
  },
  methods: {
    async updateData() {
      fetch('http://localhost/php-cook-book/getRecipes.php', {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.recipes.push({
              id: data[i]['id'],
              name: data[i]['name'],
              desc: data[i]['description'],
              imageName: data[i]['imageName'],
              steps: JSON.parse(data[i]['steps']),
              ingredients: JSON.parse(data[i]['ingredients']),
            });
          }
        })
        .catch((/* error */) => {
          console.log('error loading data');
        });
    },
  },
  created: function() {
    this.updateData();
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
