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
        <button>{{ info.text }}</button>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

div {
    @include column;
    margin-top: 50px;
    width: 100%;

    ul,
    h2 {
        margin-top: 10px;
        text-align: center;
        list-style-type: none;
    }

    button {
        margin: 30px;
        padding: 10px 20px;
        background-color: $primary;
        border: 1px solid $fourth;
        color: $fourth;
    }
}
</style>