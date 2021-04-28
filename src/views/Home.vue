<template>
  <div class="home">
    <!-- <Logo class="home__left"/> -->
    <div class="home__left">
      <Logo />
    </div>
    <div class="home__center">
      <img src="@/assets/img/firepit.jpg" alt="" class="full-image">
      <div class="home__center--desc">
        Lord of the rings themed firepit
      </div>
    </div>
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

export default {
  name: 'home',
  components: {
    Logo
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

    & .svg{ 
      margin-top: 3rem;
      background: var(--saddle-brown);
    }
  }

  &__center {
    flex: 2;
    display: flex;
    justify-content: center;
    
    & .full-image {
      height: auto;
      max-height: 500px;
      line-height: 1;
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
