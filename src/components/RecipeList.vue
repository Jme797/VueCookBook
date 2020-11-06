<template>
  <div class="flex">
    <router-link v-for="i in recipes" :key="i.id" :to="'/Recipes/' + i.id">
      <base-cards>
        <template #img>
          <img :src="imageURL + i.imageName" />
        </template>
        <template #text>
          <h3>{{ i.name }}</h3>
          <p>{{ i.desc }}</p>
          <router-link class="a" :to="'/Recipes/' + i.id">See full recipe</router-link>
        </template>
      </base-cards>
    </router-link>
  </div>
</template>
<script>
export default {
  inject: ['recipes', 'imageURL'],
};
</script>

<style scoped>
.a {
  color: rgb(118, 118, 143);
  text-decoration: underline;
  margin-top: 5px;
}
a {
  text-decoration: none;
}
.a:hover {
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
img {
  width: 375px;
  height: 341px;
  overflow: hidden;
  object-fit: cover;
}
</style>
