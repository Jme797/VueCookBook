<template>
  <div class="flex">
    <base-cards v-for="i in recipes" :key="i.id">
      <template #img>
        <img :src="require('@/assets/images/' + i.imageName + '')" />
      </template>
      <template #text>
        <h3>{{ i.name }}</h3>
        <p>{{ i.desc }}</p>
        <router-link :to="'/Recipes/' + i.id">See full recipe</router-link>
      </template>
    </base-cards>
  </div>
</template>
<script>
export default {
  inject: ['recipes'],
};
</script>

<style scoped>
a {
  color: rgb(118, 118, 143);
  text-decoration: underline;
  margin-top: 5px;
}
a:hover {
  color: rgb(158, 158, 201);
}
h3 {
  text-transform: uppercase;
  letter-spacing: 3px;
}
p {
  padding-left: 2px;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}
</style>
