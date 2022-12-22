<script>

import { store } from '../store.js';

// Importo il componente "FooterCharacter"
import BlogCharacter from './BlogCharacter.vue'

export default {
    name: "AppMainBlog",
    components: {
        BlogCharacter,
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
        <h1>{{ store.titleReviews }}</h1>
        <h3>{{ store.titleMainReviews }}</h3>
        <div class="container">
            <div v-for="element in store.contentBlog" :key="element">
                <BlogCharacter :info="element" />
            </div>
        </div>
        <button>{{ store.buttonTitleBlog }}</button>
    </section>

</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

section {
    @include column;
    width: 100%;
    background-color: $fifth;

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
        width: 70%;
    }

    button {
        margin: 100px;
        width: 200px;
        height: 40px;
        background-color: $fifth;
        border: 1px solid $fourth;
        color: $fourth;
    }
}
</style>