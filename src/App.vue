<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div>

      <div id="nav">
        <router-link to="/">Vue</router-link> |
        <router-link to="/home">Home</router-link> |
        <router-link to="/perusalen">Peru</router-link> |
        <router-link to="/hell">You're going to Brazil</router-link>|
        <router-link to="/bolivia">Bolivia</router-link>
        <router-link to="/destino/:id">Destino</router-link>
      </div>

      <RouterView/>

    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
