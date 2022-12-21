<script>

// Importo il componente "SingleCharacter"
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
    @include around;
    background-color: $primary;
    width: 100%;
    min-height: 500px;
}
</style>