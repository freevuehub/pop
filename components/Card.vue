<template>
  <div :class=$style.card>
    <img :src="img" alt="Pop Logo Image" v-if="!!img">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';

  @Component({
    props: {
      img: String
    }
  })
  export default class Card extends Vue {}
</script>

<style module>
  .card {
    box-shadow: 0 2px 12px 0 #00000010;
  }
</style>