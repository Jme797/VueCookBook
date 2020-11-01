<template>
  <section :class="flex ? 'flex' : ''">
    <slot><h3>This shoukd be working</h3></slot>
  </section>
</template>

<script>
export default {
  props: ['flex'],
};
</script>

<style scoped>
section {
  width: 90%;
  margin: 0px 5%;
  box-sizing: border-box;
  padding: 20px 50px;
  border-radius: 5px;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
