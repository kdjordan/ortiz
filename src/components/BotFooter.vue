<template>
  <div class="bottom">
        <div class="large">
            Sculpture | Design
        </div>
        <div>
            &#169; 2021 Ortiz Metals 
        </div>
        <div>
          BUILT BY : Kevin Jordan
      </div>
  </div>
</template>

<style scoped lang="scss">
.bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    font-family: var(--font-antonio);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 3;
    margin-top: auto;
    padding: 1rem;
    line-height: 1.5;
}

.large {
    border-bottom:  double var(--cream);
    font-size: 1.3rem;
    margin-bottom: .5rem;
    padding-bottom: .2rem;
}

</style>