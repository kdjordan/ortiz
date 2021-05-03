<template>
  <div class="about">
    <div>
      Randy Ortiz is a Eugene based, Southern California native, who received his Fine and Applied Arts degree from the University of Oregon in 2003.
    </div>
    <div>
      Trained in the classical drawing and sculptural methods passed down over millennia, Randy has amassed extensive knowledge of long-established design principals and techniques trusted throughout humanities’ imaginative evolution. Working apace with contemporary building trends in wide ranging mediums has allowed Randy to successfully envision a channel between modern design esthetics and those of antiquity.
    </div>
    <div>
      His work can be found in both private and public collections throughout the Willamette valley and beyond
    </div>
    <div>
      <img src="@/assets/img/r-profile.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">

.about {
  font-family: var(--font-antonio);
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  height: auto;
  margin: 0 auto;
  line-height: 1.5;

  & div {
    text-align: left;
    margin: 1rem 0;

    & img {
      display: block;
      width: 50%;
      line-height: 0;
      margin: 0 auto;
      border-radius: 50%;
    }
  }

}
</style>