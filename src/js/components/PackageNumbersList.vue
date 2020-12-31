<template>
  <div class="package-numbers">
    <ul class="package-numbers--list">
      <PackageNumbersListItem
        v-for="(item, index) in items"
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
    data() {
      return {
        items: {
          1: {itemTitle: '1', itemDescription: '(2-5 KG)'},
          2: {itemTitle: '2', itemDescription: '(2-5 KG)'},
          3: {itemTitle: 'Third', itemDescription: '(2-5 KG)'},
          4: {itemTitle: 'Four', itemDescription: '(2-5 KG)'},
          5: {itemTitle: 'Five', itemDescription: '(2-5 KG)'}
        },
        activeChildIndex: '',
      }
    }
  };
</script>

<style lang="scss">
  .package-numbers {
    &--list {
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    &--list-item {
      padding: 5px 10px;
      border: 1px solid whitesmoke;

      &.active {
        background: green;
        color: white;
      }
    }
  }
</style>
