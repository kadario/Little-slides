<template>
  <form>
    <div class="container packages">
      <div class="row packages-row">
        <div class="col col-xs-12 col-md-6 packages--slides">
          <PackageSlides v-bind:slideItems="slideItems" v-bind:atrboard="artboard" />
        </div>
        <div class="col col-xs-12 col-md-6 col-lg-5 col-lg-offset-1 packages--numbers first-xs">
          <h2 class="packages--title">{{ title }}</h2>
          <p class="packages--subtitle">{{ subtitle }}</p>
          <PackageNumbersList v-bind:numberItems="numberItems" />
        </div>
        <div class="col col-xs-12 col-md-6 col-lg-5 col-lg-offset-1 packages--description">
          <PackageDescription v-bind:descriptionText="descriptionText" v-bind:descriptionList="descriptionList" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
  import PackageNumbersList from './components/PackageNumbersList.vue'
  import PackageSlides from './components/PackageSlides.vue'
  import PackageDescription from './components/PackageDescription.vue'
  import json from '../../assets/data.json';

  export default {
    name: 'Packages',
    components: {
      PackageNumbersList,
      PackageSlides,
      PackageDescription
    },
    data() {
      return {
        title: json.title,
        subtitle: json.subtitle,
        artboard: json.artboard,
        numberItems: json.numberItems,
        slideItems: json.slideItems,
        descriptionText: json.descriptionText,
        descriptionList: JSON.parse(JSON.stringify(json.descriptionList))
      }
    }
  };
</script>

<style lang="scss">
  @import '../scss/component.scss';

  .packages {
    margin: 0 auto;

    .packages-row {
      @include respond-to('md') {
        display: block;
      }
    }

    .col-lg-5 {
      @include respond-to('md') {
        width: 50%;
      }

      @include respond-to('lg') {
        width: 41.66666667%;
      }
    }

    &--title {
      margin: 20px 0;
      font-weight: 500;
    }

    &--subtitle {
      margin: 0 0 15px 0;
      text-transform: uppercase;
    }

    &--slides {
      float: left;
    }

    &--numbers,
    &--description {
      float: right;
    }
  }
</style>
