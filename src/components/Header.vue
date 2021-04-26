<template>
  <div class="header">
    <p>lkajbf;kaj</p>
   <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding: 2rem;
  background-color: var(--light-salmon);

}
</style>
