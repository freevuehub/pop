<template>
  <div :class="$style.logo">
    <img src="images/icons/icon-384x384.png" alt="Logo">
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';

  @Component
  export default class MainLogo extends Vue {
    name: string = 'MainLogo';
  }
</script>

<style module>
  .logo {
    max-width: 300px;
    margin: 0 auto;
  }
  .logo>img {
    display: block;
    width: 100%;
  }
</style>
