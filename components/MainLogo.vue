<template>
  <v-layout>
    <v-flex>
      <v-avatar
        color="grey lighten-3"
        size="256"
      >
        <img src="icons/icon-384x384.png" alt="Logo">
      </v-avatar>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';

  @Component
  export default class MainLogo extends Vue {}
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
