<template>
  <p class="packages--description-text">{{ descriptionText }}</p>

  <ul class="packages--description-list">
    <li v-for="(item, index) in descriptionList" v-bind:class="{primary:index == 1}">
      {{item}}
    </li>
  </ul>
  <button class="btn btn--primary btn--descr">In den Warenkorb legen</button>
</template>

<script lang="ts">
  export default {
    name: 'PackageDescription',
    props: {
      descriptionText: String,
      descriptionList: Array
    }
  }
</script>

<style lang="scss" scoped>
  .packages {
    &--description-list {
      padding-left: 1rem;
      margin: 20px 0 3rem;
    }
  }

  .btn {
    &--descr {
      text-transform: uppercase;
      width: 100%;
    }
  }
</style>
