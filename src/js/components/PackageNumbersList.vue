<template>
  <div class="package-numbers">
    <ul class="package-numbers--list">
      <PackageNumbersListItem
        v-for="(item, index) in numberItems"
        v-bind:key="index"
        v-bind:itemTitle="item.itemTitle"
        v-bind:itemDescription="item.itemDescription"
        v-bind:itemIndex="index"
      />
    </ul>
  </div>
</template>

<script lang="ts">
  import PackageNumbersListItem from './PackageNumbersListItem.vue';

  export default {
    name: 'PackageNumbersList',
    components: {
      PackageNumbersListItem
    },
    props: {
      numberItems: Array
    }
  };
</script>

<style lang="scss">
  @import '../../scss/component.scss';

  .package-numbers {
    &--list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0 0 10px 0;
      list-style: none;
    }
  }
</style>
