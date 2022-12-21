<script>

export default {
    name: "FooterCharacter",
    props: ["info"],
}

</script>

<template>
    <!-- Template di Single Card -->
    <div>
        <img :src="info.img" alt="image">
        <ul>
            <li>{{ info.textOne }}</li>
            <li>{{ info.textTwo }}</li>
            <li>{{ info.textThree }}</li>
            <li>{{ info.textFour }}</li>
            <li>{{ info.textFive }}</li>
            <h2>{{ info.textSix }}</h2>
        </ul>
        <!-- <ul class="specialUl">
            <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
        </ul> -->
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

div {
    @include column;
    margin-top: 50px;
    width: 100%;
    // background-color: red;

    ul,
    h2 {
        margin-top: 10px;
        text-align: center;
        list-style-type: none;
        color: $secondary;
    }

    button {
        margin: 30px;
        width: 200px;
        height: 40px;
        background-color: $primary;
        border: 1px solid $fourth;
        color: $fourth;
    }

    .specialUl {
        @include flex;

        li {
            margin: 10px
        }
    }

    .square {
        width: 200px;
        height: 100px;
        background-color: red;
    }
}
</style>