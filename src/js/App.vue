<template>
  <PackageSlides />
  <PackageNumbersList />
</template>

<script lang="ts">
  import PackageNumbersList from './components/PackageNumbersList.vue';
  import PackageSlides from './components/PackageSlides.vue'

  export default {
    name: 'Packages',
    components: {
      PackageNumbersList,
      PackageSlides
    }
  };
</script>
