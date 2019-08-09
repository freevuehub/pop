<template>
  <section>
    <div :class="$style.logo">
      <img src="images/icons/icon-384x384.png" alt="Logo">
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';
import { List } from '~/store/Constant';

@Component({
  components: {
    AppLogo: () => import('~/components/AppLogo.vue')
  }
})
export default class App extends Vue {
  name: string = 'App';

  async mounted() {
    const { items } = await this.$store.dispatch(List.$Call.List);
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

