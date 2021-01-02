<template>
  <li class="package-numbers--list-item" v-on:click="chooseItem" >
    <h5 class="item-title">{{ itemTitle }}</h5>
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
  @import '../../scss/component.scss';

  .package-numbers {
    &--list-item {
      border: 1px solid $grey;
      box-sizing: border-box;
      color: $grey;
      flex: 0 0 32%;
      cursor: pointer;
      line-height: 21px;
      padding: 7px 5px 2px;
      text-align: center;
      margin: 0 2% 10px 0;

      &:nth-child(3n) {
        margin-right: 0;

        @include respond-to('md') {
          margin-right: 10px;
        }
      }

      @include respond-to('md') {
        flex: 1 0 auto;
      }

      &:last-child {
        margin-right: 0;
      }

      &.active {
        background: $primary;
        border-color: $primary;
        color: $white;
      }

      .item-title {
        margin: 0;
        font-weight: normal;
      }

      .item-description {
        font-size: .8rem;
        margin: 0;
      }
    }
  }
</style>
