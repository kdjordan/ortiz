<template>
  <div class="bottom">
      <div class="bottom__left">
          &#169; 2021 Oritiz Metals 
      </div>
      <div class="bottom__right">
          BUILT BY
      </div>
  </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style scoped lang="scss">
.bottom {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: var(--light-salmon);
    border-top: 2px solid var(--saddle-brown);
    z-index: 3;
    border-top: 1px solid var(--saddle-brown);  
    margin-top: auto;
}

</style>