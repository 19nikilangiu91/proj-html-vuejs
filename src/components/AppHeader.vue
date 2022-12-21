<script>

export default {
    name: "AppHeader",
    props: {
        // Creo una "props" richiamando "links" che collegherò nel template <AppHeader/>.
        links: Array,
    }
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
                    <li v-for="(link, index) in links" :key="index">
                        <a :class="{ active: links.current }" :href="link.url">
                            {{ link.text }}
                        </a>
                    </li>
                    <!-- <li><a class="menu__item" href="#">Home</a></li>
                    <li><a class="menu__item" href="#">About</a></li>
                    <li><a class="menu__item" href="#">Team</a></li>
                    <li><a class="menu__item" href="#">Contact</a></li>
                    <li><a class="menu__item" href="#">Twitter</a></li> -->
                </ul>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

.container {
    background-color: red;
    background-image: url(./public/images/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 500px;

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
}
</style>