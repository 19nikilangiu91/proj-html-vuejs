<script>

// Importo il componente "FooterCharacter"
import AppMainTop from './AppMainTop.vue'

import { store } from '../store.js';

export default {
    name: "AppMainTop",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section>
        <div class="containercontent">
            <h1>{{ store.upMainTitle }}</h1>
            <h3>{{ store.mainTitle }}</h3>
            <button>MEET YOUR NEW BARBER</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

section {
    @include center;
    background-color: $primary;
    width: 100%;
    background-image: url(./public/images/avadabarbers-about-introbackground.jpg);
    background-size: cover;

    .containercontent {
        @include column;
        width: 80%;

        h1 {
            margin-top: 50px;
            color: $third;
            font-size: 15px;
        }

        h3 {
            font-size: 50px;
            margin-top: 30px;
            color: $third;
        }

        button {
            margin: 30px 0 50px;
            padding: 10px 20px;
            background-color: $primary;
            border: 1px solid $fourth;
            color: $fourth;
        }

    }
}
</style>