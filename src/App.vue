<template>
  <div id="app">
    <Loading v-if="getIsLoading"/>
    <div v-else class="main-wrapper">
      <Logo />
      <Header />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters} from 'vuex'

export default {
  data() {
    return {
      loading: true
    }
  },
  components: { 
    Header,
    Loading,
    Logo,
    Footer  
  },
  computed: {
    ...mapGetters(['getIsLoading'])
  }
}
</script>

<style lang="scss">

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}

@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Zen+Dots&display=swap');


:root {

  --white: hsla(0, 0%, 100%, 1);
  --unbleached-silk: hsla(20, 97%, 88%, 1);
  --light-salmon: hsla(21, 97%, 76%, 1);
  --mango-tango: hsla(21, 97%, 64%, 1);
  --safety-orange-blaze-orange: hsla(21, 97%, 52%, 1);
  --sinopia: hsla(21, 97%, 40%, 1);
  --saddle-brown: hsla(21, 97%, 28%, 1);
  --seal-brown: hsla(21, 98%, 16%, 1);
  --smoky-black: hsla(21, 100%, 4%, 1);
  --font-antonio: 'Antonio', sans-serif;
  --font-zen: 'Zen Dots', cursive;

}
html, body  {
  background-color: var(--mango-tango);
}

body {
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

a {
  font-family: var(--font-antonio);
  letter-spacing: 2px;
  color: var(--safety-orange-blaze-orange);
  margin-right: 2rem;
  border-bottom: 1px solid transparent;
  transition: all .4s ease;

  &:hover {
    filter: opacity(50%);
    border-bottom: 1px solid var(--safety-orange-blaze-orange);
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  height: 90vh;
}

</style>
