<template>
  <div class="head">
    <h1>Randy Ortiz</h1>
   <nav>
      <router-link to="/" class="link">home</router-link>
      <router-link to="/about" class="link">About</router-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.head {
  padding: 1rem 0;
  background-color: var(--orange);
  display: flex;
  flex-direction:  column;
  align-items: center;
  justify-content: center;
}

h1 {
  letter-spacing: 2px;
}

nav {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.router-link-exact-active{
  border-bottom: 1px solid var(--cream);
  filter: opacity(50%);
}
</style>
