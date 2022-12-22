<script>

import { store } from '../store.js';

// Importo il componente "FooterCharacter"
import ServicesCharacter from './ServicesCharacter.vue'

export default {
    name: "AppMainServices",
    components: {
        ServicesCharacter
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
        <h1>{{ store.titleServices }}</h1>
        <h3>{{ store.titleMainServices }}</h3>
        <div class="container">
            <div v-for="element in store.contentServices" :key="element">
                <ServicesCharacter :info="element" />
            </div>
        </div>
        <button>{{ store.buttonTitleServices }}</button>
    </section>

</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

svg {
    background-image: url(./public/images/triangle.svg);
    background-size: cover;
    position: relative;
    bottom: 146px;
    width: 100%;
    height: 146px;
    transform: scalex(12);
}

section {
    @include column;
    width: 100%;

    h1 {
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
        width: 60%;
        height: 500px;
    }

    button {
        margin: 30px 0 100px 0px;
        width: 200px;
        height: 40px;
        background-color: $third;
        border: 1px solid $fourth;
        color: $fourth;
    }
}
</style>