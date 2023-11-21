<template>
    <div class="bottom">
        <div class="bottom__left">
            <div>
                <a href="mailto:ortiz@gmail.com" target="_blank" rel="noopener noreferrer nofollow">ortizmetals@gmail.com</a> 
            </div>
            <div>
                <a href="tel:541-510-2182">541-510-2182</a> 
            </div>
        </div>
        <div class="bottom__mid">
            Sculpture | Design
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
    padding-bottom: .4rem;
    font-family: var(--font-antonio);

    @media (max-width: 35em) {
        flex-direction: column;
        gap: 10px;
    }


    &__mid {
        font-size: 1.4rem;
        line-height: 1.8;

         @media (max-width: 35em) {
            order: -1;
        }
    }
}

</style>