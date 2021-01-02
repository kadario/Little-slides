<template>
  <div class="package-slides">
    <img v-bind:src="artboard" class="artboard" />
    <div class="package-slides--list">
      <div
        class="package-slides--list-item"
        v-for="(item, index) in slideItems"
        v-bind:class="{active: index == isActive}"
        v-bind:key="index"
        >
        <img v-bind:src="item"  class="package-slides--img"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'PackageSlides',
    props: {
      artboard: String,
      slideItems: Array
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
    position: relative;

    &--list {
      position: relative;
    }

    &--list-item {
      opacity: 0;
      transition: all ease-in-out .3s;

      &:not(.active) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }

      &.active {
        opacity: 1;
      }
    }

    &--img {
      width: 100%;
    }

    .artboard {
      box-shadow: -2px 2px 6px -3px rgba(0,0,0,.4);
      position: absolute;
      width: 24%;
      top: 13%;
      left: 9%;
      z-index: 2;
    }
  }
</style>
