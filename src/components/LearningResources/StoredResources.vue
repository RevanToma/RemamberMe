<template>
  <ul>
    <LearningResources
      v-for="stored in resources"
      :key="stored.id"
      :id="stored.id"
      :title="stored.title"
      :description="stored.description"
      :link="stored.link"
    >
    </LearningResources>
  </ul>
</template>

<script>
import LearningResources from './LearningResources.vue'
export default {
  inject: ['resources'],
  components: {
    LearningResources
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
