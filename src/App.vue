<template>
  <the-header title="RemamberMe"></the-header>
  <the-resource></the-resource>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheResource from './components/LearningResources/TheResource.vue'
export default {
  components: { TheHeader, TheResource }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
