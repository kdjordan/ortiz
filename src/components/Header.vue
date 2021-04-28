<template>
  <div class="header">
    <h1>Randy Ortiz</h1>
   <nav>
      <router-link to="/" class="link">home</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/about" class="link">Contact</router-link>
    </nav>
  </div>
</template>

<script>
// import Logo from '@/components/Logo.vue'
export default {
  name: 'header',
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding: 2rem;
  background-color: var(--light-salmon);
  display: flex;
  flex-direction:  column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--saddle-brown);
}

h1 {
  // font-family: var(--font-antonio);
  letter-spacing: 2px;
  color: var(--safety-orange-blaze-orange);
}

nav {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & .link {
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1rem;
  }

}
</style>
