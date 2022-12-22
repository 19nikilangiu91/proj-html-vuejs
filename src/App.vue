<script>
import AppHeader from './components/AppHeader.vue'
import AppMainTop from './components/AppMainTop.vue'
import AppMainServices from './components/AppMainServices.vue'
import AppMainProducts from './components/AppMainProducts.vue'
import AppFooter from './components/AppFooter.vue'

// Importo il file "store.js"
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMainTop,
    AppMainServices,
    AppMainProducts,
    AppFooter,
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
    <AppMainProducts />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss' as*;
@use './style/partials/_variables' as*;
</style>
