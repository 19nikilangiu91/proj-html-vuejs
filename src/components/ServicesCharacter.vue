<script>

export default {
    name: "ServicesCharacter",
    props: ["info"],
}

</script>

<template>
    <!-- Template di Single Card -->
    <div>
        <img :src="info.img" alt="image">
        <h3>{{ info.title }}</h3>
        <p>{{ info.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

div {
    width: 100%;

    img {
        height: 100px;
        margin-left: 120px;
    }

    h3 {
        margin: 10px 0;
        text-align: center;
        font-size: 25px;
        color: $fourth;
    }

    p {
        text-align: center;
        font-size: 18px;
        padding: 0 20px;
    }
}
</style>