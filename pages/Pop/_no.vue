<template>
  <v-container class="overflow-hidden">
    <v-app-bar
      fixed
      app
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          align-with-title
          background-color="transparent"
        >
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
      <v-card outlined>
        {{ $route.params.no }}
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';

  @Component
  export default class PopId extends Vue {
    
  }
</script>