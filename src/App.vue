<template>
  <div id="app">
    <Loading v-if="getIsLoading"/>
    <div v-else>
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'
import { mapGetters} from 'vuex'

export default {
  data() {
    return {
      loading: true
    }
  },
  components: { 
    Header,
    Loading  
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

:root {
  // --orange1: hsl(21, 97%, 64%);
  // --orange-lite: #fdb086;
  // --orange2: #fb610e;
  // --black: #140700;

  --white: hsla(0, 0%, 100%, 1);
  --unbleached-silk: hsla(20, 97%, 88%, 1);
  --light-salmon: hsla(21, 97%, 76%, 1);
  --mango-tango: hsla(21, 97%, 64%, 1);
  --safety-orange-blaze-orange: hsla(21, 97%, 52%, 1);
  --sinopia: hsla(21, 97%, 40%, 1);
  --saddle-brown: hsla(21, 97%, 28%, 1);
  --seal-brown: hsla(21, 98%, 16%, 1);
  --smoky-black: hsla(21, 100%, 4%, 1);

}
html  {
  // background-color: var(--mango-tango);
  background-color: var(--white);
}

body{
  background-color: var(--mango-tango);
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
