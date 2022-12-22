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
        <ul class="specialUl">
            <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
        </ul>
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
        position: relative;
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

.specialUl {
    @include center;
    position: absolute;
    list-style-type: none;

    li {
        margin: 10px;
        color: $third;
    }
}
</style>