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
    <section>
        <h1>MENS GROMING</h1>
        <h3>SERVICES</h3>
        <div class="container">
            <div v-for="element in store.contentServices" :key="element">
                <ServicesCharacter :info="element" />
            </div>
        </div>
        <button>SHOP OUR PRODUCT RANGE</button>
    </section>

</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

section {
    @include column;
    width: 100%;

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
        width: 60%;
        height: 500px;
    }

    button {
        margin: 30px;
        width: 200px;
        height: 40px;
        background-color: $third;
        border: 1px solid $fourth;
        color: $fourth;
    }
}
</style>