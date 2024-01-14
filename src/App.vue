<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/nav/NavBar.vue'
import Footer from '@/components/footer/FooterSection.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <RouterView />

  <Footer></Footer>
</template>

<style>
html{
  background-color: white ;
  color: #42444B;
}

</style>