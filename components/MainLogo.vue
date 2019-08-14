<template>
<v-card
    class="mx-auto"
    max-width="434"
    outlined
  >
    <v-avatar
      class="profile"
      color="grey lighten-3"
      size="164"
    >
      <v-img src="icons/icon-384x384.png"></v-img>
    </v-avatar>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Freevue Poject!</v-list-item-title>
        <v-list-item-subtitle>Rotate Pop List</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
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
