<script>

// Importo il componente "FooterCharacter"
import FooterCharacter from './FooterCharacter.vue'

import { store } from '../store.js';

export default {
    name: "AppFooter",
    components: {
        FooterCharacter,
    },
    data() {
        return {
            store,
        }
    }

}
</script>

<template>
    <div class="container">
        <div v-for="element in store.contentFooter" :key="element">
            <FooterCharacter :info="element" />
        </div>
    </div>
    <div class="buttons">
        <button v-for="(link, index) in store.menuNav" @click.prevent :key="index">
            <a :href="link.url">
                {{ link.text }}
            </a>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

.container {
    @include center;
    background-color: $primary;
    width: 100%;
}

.buttons {
    width: 100%;
    height: 100px;
    background-color: $primary;
    @include center;

    button {
        margin: 20px 140px;
        width: 200px;
        height: 40px;
        background-color: $primary;
        border: 1px solid $fourth;
        color: $fourth;
    }

    a {
        text-decoration: none;
    }
}
</style>