<script>

import { store } from '../store.js';

// Importo il componente "ProductsCharacter"
import ProductsCharacter from './ProductsCharacter.vue'

export default {
    name: "AppMainProducts",
    components: {
        ProductsCharacter
    },
    data() {
        return {
            store,
        }
    }

}
</script>

<template>
    <svg></svg>
    <section>
        <h1>{{ store.titleProducts }}</h1>
        <h3>{{ store.titleMainProducts }}</h3>
        <div class="container">
            <div v-for="element in store.contentProducts" :key="element">
                <ProductsCharacter :info="element" />
            </div>
        </div>
        <button>{{ store.buttonTitleProducts }}</button>
    </section>

</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

svg {
    background-image: url(./public/images/triangle.svg);
    background-size: cover;
    position: relative;
    bottom: -6px;
    width: 100%;
    height: 146px;
    transform: scalex(12);
    filter: invert(92%);
}

section {
    @include column;
    width: 100%;
    background-color: $primary;
    background-image: url(./public/images/avadabarbers-reviewsbackground.jpg);
    background-size: cover;

    h1 {
        margin-top: 50px;
        color: $fourth;
        font-size: 15px;
    }

    h3 {
        font-size: 50px;
        margin-top: 30px;
        color: $secondary;
    }

    .container {
        @include between;
        margin: 0 auto;
        width: 90%;
        height: 500px;
    }

    button {
        margin-bottom: 100px;
        width: 200px;
        height: 40px;
        background-color: $primary;
        border: 1px solid $fourth;
        color: $fourth;
    }
}
</style>