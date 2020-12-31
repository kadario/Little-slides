<template>
  <li class="package-numbers--list-item" v-on:click="chooseItem" >
    <h4 class="item-title">{{ itemTitle }}</h4>
    <p class="item-description">{{ itemDescription }}</p>
  </li>
</template>

<script lang="ts">
  export default {
    name: 'PackageNumbersListItem',
    methods: {
      chooseItem: function() {
        let getExistedActive = this.$el.parentElement.querySelector('.active');

        if (getExistedActive !== null && !this.$el.classList.contains('active')) {
          getExistedActive.classList.remove('active');
        }

        if (!this.$el.classList.contains('active')) {
          this.$el.classList.add('active');
          this.$store.commit("changeActive", this.$props.itemIndex);
        }
      }
    },
    props: {
      itemTitle: String,
      itemDescription: String,
      itemIndex: Number,
    },
    mounted() {
      if (this.$store.state.activeIndex == this.$props.itemIndex) {
        this.$el.classList.add('active');
      }
    }
  };
</script>

<style lang="scss">
  .package-numbers {
    &--list-item {
      padding: 5px 10px;
      border: 1px solid whitesmoke;
      text-align: center;
      cursor: pointer;

      &.active {
        background: green;
        color: white;
      }
    }
  }
</style>
