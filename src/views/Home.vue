<template>
  <div class="home">
    <!-- <div class="home__left">
    </div>  -->
    <div class="home__center">  
      <div class="control" @click="move(0)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" style="fill:var(--cream);fill-rule:evenodd">
          <path d="M14,1A13,13,0,1,1,1,14,13,13,0,0,1,14,1m0-1A14,14,0,1,0,28,14,14,14,0,0,0,14,0Z"/>
          <rect x="6.5" y="13" width="15" height="2"/>
        </svg>
      </div>
      <figure>
        <div class="img-wrap">
          <transition name="fade" mode="out-in">
            <img :src="`${getCurrentImage.link}`" :key="getCurrentImage.link" alt="" class="full-image">
          </transition>
        </div>
        <figcaption class="home__center--desc">
          {{getCurrentImage.desc}}
        </figcaption>
      </figure>
      <div class="control" @click="move(1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" style="fill:var(--cream);fill-rule:evenodd">
          <path d="M14,1A13,13,0,1,1,1,14,13,13,0,0,1,14,1m0-1A14,14,0,1,0,28,14,14,14,0,0,0,14,0Z"/>
          <polygon points="21.5 12.35 15.4 12.35 15.4 6.35 13.4 6.35 13.4 12.35 6.5 12.35 6.5 14.35 13.4 14.35 13.4 21.35 15.4 21.35 15.4 14.35 21.5 14.35 21.5 12.35"/>
      </svg>
      </div>
    </div>
    <div class="home__right">
      <div v-for="image in getAllImages" :key="image.index" :class="{active: image.index == getCurrentImage.index}">
        {{image.holder}}
      </div>
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
    ...mapGetters(['getCurrentImage', 'getAllImages'])
  },
  methods: {
    move(dir) {
      if (dir == 1) {
        this.$store.commit('moveIndex', 1)
      } else if(dir ==0) {
        this.$store.commit('moveIndex', 0)
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/animations.scss';

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-antonio);
  letter-spacing: 1px;
  flex: 1;
  margin-bottom: 2rem;
  z-index: 2;

  &__left { 
    flex: 1;
    max-width: 150px;
    min-width: 100px;
    padding: 1rem;

    & .svg { 
      margin-top: 3rem;
    }
  }

  &__center {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
  }

  figure {
    flex: 3;

    & .img-wrap  {
      padding: 0 2rem 2rem 2rem;
      width: 100%;
      height: auto;
    }

    & .full-image {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: calc(100vh - 15rem);
        min-height: 20rem;
        // object-fit: cover;
        line-height: 0;
        border-radius: 5px;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    } 

  }

  &__right {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }
}

.control {
  cursor: pointer;
  width: 30px;
  transition: all .4s ease;
  &:hover {
    filter: opacity(50%);
  }

}

.active {
  color: var(--blue);
}

</style>
