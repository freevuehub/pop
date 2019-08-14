<template>
  <v-layout>
    <v-flex
      v-for="l in popList"
      md3
      xs4
      :key="l.no"
      class="pa-3"
    >
    <nuxt-link :to="nuxtLink(l.no)">
      <v-card>
        {{ l.name.kr }}
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