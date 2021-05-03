<template>
  <div class="header">
    <h1>Randy Ortiz</h1>
   <nav>
      <router-link to="/" class="link">home</router-link>
      <router-link to="/about" class="link">About</router-link>
    </nav>
    <div class="contact"> 
      <div>
        CONTACT
      </div>
       <div>
            &#9993;&nbsp;<a href="mailto:ortiz@gmail.com">ortiz@gmail.com</a> 
        </div>
        <div>
            &#9742;&nbsp;<a href="tel:541-510-2182">541-510-2182</a> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style scoped lang="scss">
.header {
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

  & .link {
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1rem;
  }
}

.contact {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem 1rem 0 0;
  font-family: var(--font-antonio);
  

  &  div:first-child {
    border-bottom: 2px solid var(--cream);
    margin: .5rem 0;
    font-size: 1.5rem;
    letter-spacing: 4px;
    padding-bottom:  .3rem;
  }

  & div:not(:first-child) {
    text-align: left;
  }
}
</style>
