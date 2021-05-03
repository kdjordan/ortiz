<template>
    <div class="bottom">
        <div class="bottom__left">
            <div>
                Sculpture | Design
            </div>
            <div>
                <a href="mailto:ortiz@gmail.com">ortiz@gmail.com</a> 
            </div>
            <div>
                <a href="tel:541-510-2182">541-510-2182</a> 
            </div>
        </div>
        <div class="bottom__right">
            <div>
                &#169; 2021 Ortiz Metals 
            </div>
            <div>
                BUILT BY : Kevin Jordan
            </div>
        </div>    
    </div>
</template>

<style scoped lang="scss">
.bottom {
   border-top: 1px solid var(--hot-orange);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    padding-top: .4rem;
    font-family: var(--font-antonio);

    @media (max-width: 43em) {
    display: none;
    }
}

.large {
    border-bottom:  double var(--cream);
    font-size: 1.3rem;
    margin-bottom: .5rem;
    padding-bottom: .2rem;
}

.mobile-bottom {
    

    @media (min-width: 43em) {
        display: none;
    }
}

</style>