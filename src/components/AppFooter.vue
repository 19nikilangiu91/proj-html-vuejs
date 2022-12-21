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
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

.container {
    @include center;
    background-color: $primary;
    width: 100%;
}
</style>