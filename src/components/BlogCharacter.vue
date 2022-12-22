<script>

export default {
    name: "BlogCharacter",
    props: ["info"],
}

</script>

<template>
    <!-- Template di Single Card -->
    <div class="container-card">
        <div class="container-image">
            <img :src="info.img" alt="image">
            <h3>{{ info.title }}</h3>
            <p>{{ info.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables' as*;
@use 'src/style/partials/_mixins' as*;

.container-card {
    margin-top: 30px;

    .container-image {
        @include column;
        width: 100%;

        img {
            width: 80%;
        }

        h3 {
            margin: 20px;
            text-align: center;
            font-size: 20px;
            color: $fourth;
        }

        p {
            text-align: center;
            font-size: 18px;
            padding: 0 30px;
        }
    }
}
</style>