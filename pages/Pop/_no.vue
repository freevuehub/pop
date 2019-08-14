<template>
  <div>
    <app-bar />
    {{ $route.params.no }}
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';

  @Component
  export default class PopId extends Vue {
    
  }
</script>