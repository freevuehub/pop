<template>
  <div :class="[$style.appbar, { [$style.fixed]: fixed }]">
    AppBar
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component({
    props: {
      fixed: Boolean
    }
  })
  export default class AppBar extends Vue {
    @Prop() fixed!: boolean
  }
</script>

<style module>
  .appbar {
    width: 100%;
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>