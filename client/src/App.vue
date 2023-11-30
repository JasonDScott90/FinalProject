<template>
    <div id="cart-app">
    <header>
      <the-header/>
      <the-navigation/>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <the-footer/>
    </footer>
    </div>
</template>
<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components:{
    TheHeader,
    TheNavigation,
    TheFooter,
  }
    
}
</script>
<style scoped>
#cart-app{
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
main{
  background-color: #F0F8FF;
  padding: 10px;
  overflow-y: auto;
}
</style>