<template>
  <nav>
    <h1>My Recipe Book</h1>
    <ul>
      <li v-for="i in links" :key="i.name">
        <router-link :to="i.link">{{ i.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'View Recipes',
          link: '/Recipes',
        },
        {
          name: 'Add Recipe',
          link: '/addRecipe',
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgb(252, 215, 244);
}
h1 {
  display: inline-block;
  font-size: 34px;
  letter-spacing: 5px;
  color: rgb(105, 90, 103);
  text-shadow: 2px 1px 2px rgb(182, 179, 179);
}
ul {
  padding: 0;
  float: right;
  box-sizing: border-box;
  position: relative;
  top: -15px;
}
li {
  list-style: none;
  display: inline-block;
  padding: 20px;
}
a {
  text-decoration: none;
  color: rgb(133, 113, 113);
}
a:hover {
  color: rgb(61, 22, 22);
}
button {
  background: none;
  outline: none;
  border: none;
  color: rgb(133, 113, 113);
}
button:hover {
  color: rgb(61, 22, 22);
}
.router-link-active {
  color: rgb(0, 0, 0);
}
</style>
