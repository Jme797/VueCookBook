<template>
  <page-container class="background">
    <h1>{{ name }}</h1>
    <p>{{ desc }}</p>
    <h2>Ingredients</h2>
    <div>
      <ul>
        <li v-for="i in ingredients" :key="ingredients.findIndex(element => (element = i))">
          {{ i }}
        </li>
      </ul>
    </div>
    <h2>Method</h2>
    <div>
      <ul>
        <li
          class="method"
          v-for="step in steps"
          :key="ingredients.findIndex(element => (element = step))"
        >
          {{ step }}
        </li>
      </ul>
    </div>
    <div class="buttonRight">
      <button class="buttonColor" @click="this.$emit('back-to-all-recipes')">
        Back to All recipes
      </button>
    </div>
  </page-container>
</template>

<script>
export default {
  props: ['id', 'name', 'desc', 'imageName', 'steps', 'ingredients'],
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
}
</style>
