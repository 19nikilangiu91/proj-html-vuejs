<script>

export default {
    name: "ReviewsCharacter",
    props: ["info"],
}

</script>

<template>
    <!-- Template di Single Card -->
    <div>
        <p>{{ info.text }}</p>
        <img :src="info.img" alt="image">
        <h6>{{ info.name }}</h6>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

div {
    @include column;
    width: 100%;
    margin: 20px 0 50px 0;

    img {
        height: 100px;
        margin-top: 30px;
        border-radius: 50%;
    }

    h6 {
        margin: 10px 0;
        text-align: center;
        font-size: 15px;
        color: $fourth;
    }

    p {
        text-align: center;
        font-size: 18px;
        padding: 0 20px;
    }
}
</style>