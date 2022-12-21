<script>
import AppHeader from './components/AppHeader.vue'
import AppMainTop from './components/AppMainTop.vue'
import AppMainServices from './components/AppMainServices.vue'
import AppFooter from './components/AppFooter.vue'

// Importo il file "store.js"
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMainTop,
    AppFooter,
    AppMainServices,
  },

  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <!-- Collego l'array "links" che è uguale al "menù" che sarebbe l'array in data (qui sopra) -->
  <AppHeader />
  <main>
    <AppMainTop />
    <AppMainServices />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss' as*;
@use './style/partials/_variables' as*;
</style>
