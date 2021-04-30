<template>
  <div class="home">
    <!-- <Logo class="home__left"/> -->
    <div class="home__left">
      <Logo />
    </div>
    <figure>
      <div class="img-wrap">
        <img :src="`${getCurrentImage.link}`" alt="" class="full-image">
      </div>
      <figcaption class="home__center--desc">
        {{getCurrentImage.desc}}
        {{getCurrentImage.link}}
        
      </figcaption>
    </figure>
    <div class="home__right">
      <ul>
        <li>Image XX</li>
        <li>Image XX</li>
        <li>Image XX</li>
        <li>Image XX</li>
        <li>Image XX</li>
      </ul>
    </div>
    
    
  </div>
<!-- </div> -->
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['getCurrentImage'])
  }
}
</script>

<style lang="scss">
.home {
  // background: url('../assets/img/circle-back.svg') bottom 110% right 400%;
  // background-repeat: no-repeat;
  // background-size: 90%;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  &__left { 
    flex: 1;
    height: 100%;
    max-width: 150px;
    min-width: 100px;
    background: var(--saddle-brown);
    padding: 1rem;

    & .svg { 
      margin-top: 3rem;
      background: var(--saddle-brown);
    }
  }

  figure {
    flex: 2;

    & .img-wrap  {
      padding: 2rem;
      // border: 1px solid red;
      width: 100%;
      height: auto;
      // overflow: hidden;
    }

    & .full-image {
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: calc(100vh - 20rem);
          min-height: 20rem;
          object-fit: cover;
          // display: block;
      // max-width: 100%;
      // height: 100%;
      // max-height: 500px;
      line-height: 0;
      border-radius: 5px;
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    } 

  }

  &__right {
    background: var(--saddle-brown);
    flex: 1;
    height: 100%;
    max-width: 150px;
    min-width: 100px;

    & ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--white);
    }
  }

}
</style>
