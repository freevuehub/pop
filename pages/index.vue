<template>
  <section>
    <div :class="$style.logo">
      <img src="images/icons/icon-384x384.png" alt="Logo">
    </div>
    <div v-for="l in list" :key="l.no">
      {{ l.name.kr }}
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';
import { List } from '~/store/Constant';
import { callbackify } from 'util';
import { returnStatement } from '@babel/types';

@Component({
  components: {
    AppLogo: () => import('~/components/AppLogo.vue')
  },
  computed: {
    ...mapGetters({
      list: List.$Get.List
    })
  }
})
export default class App extends Vue {
  name: string = 'App';
  async created() {
    try {
      await this.$store.dispatch(List.$Call.List);
    } catch (e) {
      console.error(e);
    }
  }
  mounted() {
    console.log(this);
  }
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

