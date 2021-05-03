<template>
  <div class="head">
    <h1>Randy Ortiz</h1>
   <nav>
      <router-link to="/" class="link">home</router-link>
      <router-link to="/about" class="link">About</router-link>
    </nav>
    <!-- <div class="contact"> 
        <div>
            <a href="mailto:ortiz@gmail.com">ortiz@gmail.com</a> 
        </div>
        <div>
            <a href="tel:541-510-2182">541-510-2182</a> 
        </div>
    </div> -->
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

.contact {
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0 0;
  padding-bottom: .3rem;
  text-align: left;
  font-family: var(--font-antonio);
  border-bottom: double var(--cream);
  line-height: 1.5;

  & a {
    letter-spacing: 1px;
  }

  @media (max-width: 43em) {
    display: none;
  }
}

.router-link-exact-active{
  border-bottom: 1px solid var(--cream);
  filter: opacity(50%);
}
</style>
