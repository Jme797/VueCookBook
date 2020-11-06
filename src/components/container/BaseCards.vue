<template>
  <section>
    <slot name="img"></slot>
    <div class="paddBody">
      <slot name="text"></slot>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  width: 350px;
  margin: 20px;
  box-shadow: 2px 2px 8px grey;
  border-radius: 5px;
  padding: 0;
  overflow: hidden;
  height: 560px;
}
section:hover {
  box-shadow: 2px 2px 12px rgb(77, 77, 77);
  cursor: pointer;
}
.paddBody {
  padding: 10px 20px 40px 20px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
}
</style>
