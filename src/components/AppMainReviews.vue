<script>

import { store } from '../store.js';

// Importo il componente "ReviewsCharacter"
import ReviewsCharacter from './ReviewsCharacter.vue'

export default {
    name: "AppMainReview",
    components: {
        ReviewsCharacter
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
        <div class="container">
            <div class="image">
                <img :src="store.imageShawing" alt="image">
            </div>
            <div class="content">
                <h6>{{ store.titleShawing }}</h6>
                <h1>{{ store.titleMainShawing }}</h1>
                <p>{{ store.textShawing }}</p>
                <button>{{ store.buttonTitleShawing }}</button>
            </div>
        </div>
        <div class="container-reviews">
            <h6 class="title-reviews">{{ store.titleReviews }}</h6>
            <h1 class="main-reviews">{{ store.titleMainReviews }}</h1>
            <div class="cards-container">
                <div v-for="element in store.contentReviews" :key="element">
                    <ReviewsCharacter :info="element" />
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

section {
    @include column;
    position: relative;
    width: 100%;
    // background-color: red;

    .container {
        @include flex;
        position: absolute;
        top: -50px;
        width: 60%;
        height: 300px;
        border-top: 2px solid $fourth;

        .image {
            @include flex;
            width: 40%;
            height: 100%;
            padding-left: 30px;
            background-image: url(./public/images/avadabarbers-contact-ptb-retina.jpg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .content {
            @include column-center;
            padding: 30px 0 0 30px;
            width: 60%;
            height: 100%;
            background-color: $primary;

            h6 {
                color: $fourth;
                padding-bottom: 20px;
            }

            h1 {
                font-size: 40px;
                color: $secondary;
                padding-bottom: 20px;
            }

            p {
                color: $secondary;

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

    .container-reviews {
        @include column;
        margin-top: 300px;
        width: 60%;

        .title-reviews {
            font-size: 15px;
            padding-top: 50px;
            color: $fourth;
        }

        .main-reviews {
            font-size: 50px;
            padding: 25px;
            color: $secondary;
        }

        .cards-container {
            @include around;
            width: 100%;
            height: 100%;
        }
    }
}
</style>