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
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

div {
    @include column;
    margin-top: 50px;
    width: 100%;

    ul {
        margin-top: 10px;
        text-align: center;
        list-style-type: none;
        color: $secondary;
    }

    h2 {
        color: $fourth;
        margin-top: 20px;
    }
}
</style>