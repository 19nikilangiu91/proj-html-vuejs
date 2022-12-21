<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "App",
  components: {
    AppHeader,
  },

  data() {
    return {

      menu: [
        {
          text: "Shop Our Range Now",
          url: "#",
          current: "true",
        },
        {
          text: "Book Your Appointment",
          url: "#",
          current: "false",
        }
      ]
    }
  }
}

</script>

<template>
  <!-- Collego l'array "links" che è uguale al "menù" che sarebbe l'array in data (qui sopra) -->
  <AppHeader :links="menu" />
</template>

<style lang="scss">
@use './style/general.scss' as*;
@use './style/partials/_variables' as*;
</style>
