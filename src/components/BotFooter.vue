<template>
  <div class="bottom">
      <div class="bottom__left">
          <div class="large">
            Sculpture | Design
          </div>
        <!-- <div>
            &#9993;&nbsp;<a href="mailto:ortiz@gmail.com">ortiz@gmail.com</a> 
        </div>
        <div>
            &#9742;&nbsp;<a href="tel:541-510-2182">541-510-2182</a> 
        </div> -->
        <div>
            &#169; 2021 Ortiz Metals 
        </div>
        <div class="bottom__right">
          BUILT BY : Kevin Jordan
      </div>
      </div>
      <div class="bottom__mid">
          <!-- <div>
            Sculpture | Design
          </div> -->
          <!-- <div class="small">
            &#169; 2021 Ortiz Metals 
          </div> -->
      </div>
      <!-- <div class="bottom__right">
          BUILT BY : Kevin Jordan
      </div> -->
  </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style scoped lang="scss">
.bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    font-family: var(--font-antonio);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    margin-top: auto;
    // border-top: 1px solid var(--hot-orange);

    &__mid {
        font-size: 1.5rem;
        display:  flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .small {
            font-size: 1rem;
            margin-top: .2rem;
        }
    }

    &__left {
        
        display:  flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        // padding: .3rem;
        padding: 1rem;

        & div {
            // margin-top: .3rem;
            line-height: 1.5;
        }
    }
}

.large {
    border-bottom: 2px solid var(--cream);
    font-size: 1.3rem;
    margin-bottom: .5rem;
    padding-bottom: .2rem;
}


</style>