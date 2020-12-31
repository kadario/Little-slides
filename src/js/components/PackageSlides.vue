<template>
  <div class="package-slides">
    <div class="package-slides--list">
      <div
        class="package-slides--list-item"
        v-for="(item, index) in slideItems"
        v-bind:class="{active: index == isActive}"
        v-bind:key="index"
        >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PackageSlides',
  data() {
    return {
      slideItems: {
        1: 'oneslide',
        2: 'two slide',
        3: '3 slide',
        4: '4 slide',
        5: '5 slide'
      }
    }
  },

  computed: {
    isActive() {
      return this.$store.getters.activeIndex;
    }
  }
}
</script>

<style lang="scss">
  .package-slides {
    &--list {
      border: 1px solid red;
    }

    &--list-item {
      display: none;

      &.active {
        display: block;
      }
    }
  }
</style>
