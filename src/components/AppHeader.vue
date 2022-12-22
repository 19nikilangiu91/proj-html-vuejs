<script>

import { store } from '../store.js';

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="navbar">
            <div class="image">
                <img src="/public/images/avadabarbers-logo-x1.png" alt="Logo">
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </a>
            </div>
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <!-- Creo un v-for per la nav richiamando l'array "links" -->
                    <li v-for="(link, index) in store.menuNav" @click.prevent :key="index">
                        <a :href="link.url">
                            {{ link.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <section>
            <div class="containercontent">
                <h1>{{ store.titleUpHeader }}</h1>
                <hr>
                <h3>{{ store.titleDownHeader }}</h3>
                <button>{{ store.titleButtonHeader }}</button>
            </div>
            <div class="containerimage">
                <img src="/public/images/avadabarbers_hero_focalmirror-400x550.png" alt="Image Header">
            </div>
            <!-- Da completare le immagini piccole al lato destro -->
            <!-- <div class="">
                <h1>{{ store.headerTitle }}</h1>
                <hr>
                <h3>{{ store.underTitle }}</h3>
            </div> -->
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

.container {
    background-image: url(./public/images/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;

    .image {
        @include around;
        padding: 10px 0;
    }

    .navbar {
        position: relative;

        #menu__toggle {
            opacity: 0;
        }

        #menu__toggle:checked+.menu__btn>span {
            transform: rotate(45deg);
        }

        #menu__toggle:checked+.menu__btn>span::before {
            top: 0;
            transform: rotate(0deg);
        }

        #menu__toggle:checked+.menu__btn>span::after {
            top: 0;
            transform: rotate(90deg);
        }

        #menu__toggle:checked~.menu__box {
            right: 0 !important;
        }

        .menu__btn {
            position: absolute;
            top: 35px;
            right: 250px;
            width: 26px;
            height: 26px;
            cursor: pointer;
            z-index: 1;
        }

        .menu__btn>span,
        .menu__btn>span::before,
        .menu__btn>span::after {
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: $third;
            transition-duration: .25s;
        }

        .menu__btn>span::before {
            content: '';
            top: -8px;
        }

        .menu__btn>span::after {
            content: '';
            top: 8px;
        }

        .menu__box {
            display: block;
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100%;
            margin: 0;
            padding: 80px 0;
            list-style: none;
            background-color: $secondary;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
            transition-duration: .25s;
        }

        // .menu__item {
        //     display: block;
        //     padding: 12px 24px;
        //     color: #333;
        //     font-family: 'Roboto', sans-serif;
        //     font-size: 20px;
        //     font-weight: 600;
        //     text-decoration: none;
        //     transition-duration: .25s;
        // }

        // .menu__item:hover {
        //     background-color: #CFD8DC;
        // }

    }

    section {
        width: 80%;
        margin: 0 auto;
        @include flex;

        .containercontent {
            width: 50%;
            height: 500px;

            h1 {
                padding: 100px 0 0 150px;
                color: $third;
                font-size: 50px;
            }

            hr {
                width: 15%;
                height: 5px;
                margin: 20px 0 0 150px;
                background-color: $fourth;
            }

            h3 {
                margin: 30px 0 0 150px;
                color: $secondary;
            }

            button {
                margin: 20px 0 0 150px;
                padding: 10px 20px;
                background-color: $primary;
                border: 1px solid $fourth;
                color: $fourth;
            }
        }

        // .containerimage {
        //     padding-left: 120px;
        //     width: 50%;
        //     height: 500px;
        // }

    }
}
</style>