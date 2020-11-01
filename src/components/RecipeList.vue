<template>
  <div>
    <base-cards>
      <template #img>
        <img :src="require('@/assets/images/' + imageURL + '')" />
      </template>
      <template #text>
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <button @click="this.$emit('show-full-recipe-for', id)">See full recipe</button>
      </template>
    </base-cards>
  </div>
</template>

<script>
export default {
  props: ['id', 'imageURL', 'name', 'description', 'linkURL'],
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
</style>
