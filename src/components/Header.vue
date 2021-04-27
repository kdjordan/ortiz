<template>
  <div class="header">
    <h2>Randolph Scott Ortiz</h2>
   <div class="nav">
      <router-link to="/">home</router-link>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10rem;
}

h2 {
  font-family: var(--font-antonio);
  letter-spacing: 2px;
  color: var(--safety-orange-blaze-orange);
}

.nav {
  // display: flex;
  // align-items: center;
  // justify-content: flex-end;

  & a {
    text-decoration: none;
    text-transform: uppercase;
  }

}
</style>
