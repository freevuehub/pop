<template>
  <div :class="$style.flex">
    <div
      v-for="l in popList"
      :key="l.no"
      :class="$style.flexItem"
    >
      <nuxt-link :to="nuxtLink(l.no)">
        <Card
          :hover="true"
          :img="popLogoUrl(l.name.en)"
        >
          {{ l.name.kr }}
          {{ l.name.en }}
        </Card>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import { mapGetters } from 'vuex';
  import { MainConst } from '~/store/Constant';
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
    flex-basis: 33.333%;
    padding: 10px;
  }

  @media screen and (max-width: 640px) {
    .flexItem {
      flex-basis: 25%;
    }
  }
</style>