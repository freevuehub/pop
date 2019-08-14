<template>
  <v-layout>
    <v-flex
      v-for="l in popList"
      md3
      xs4
      :key="l.no"
      class="pa-2"
    >
    <nuxt-link :to="nuxtLink(l.no)">
      <v-card
        mx-auto
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{ l.name.kr }}</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar
            tile
            size="80"
            color="grey lighten-2"
          >
            <v-img :src="`./images/pop/${l.name.en}/logo.png`"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </nuxt-link>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import { mapGetters } from 'vuex';
  import { MainConst } from '~/Constant';
  import { Card } from '~/components';

  @Component({
    components: {
      Card
    },
    computed: {
      ...mapGetters({
        popList: MainConst.$Get.List
      })
    }
  })
  export default class PopList extends Vue {
    get nuxtLink() {
      return (id: number) => `/pop/${id}`;
    }
    get popLogoUrl() {
      return (name: string) => `images/pop/${name}/logo.png`;
    }
  }
</script>

<style module>
  .flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1080px;
    margin: 0 auto;
  }
  .flexItem {
    transition: all .2s;
    flex-basis: 25%;
    padding: 10px;
  }

  @media screen and (max-width: 640px) {
    .flexItem {
      flex-basis: 33.333%;
    }
  }
</style>