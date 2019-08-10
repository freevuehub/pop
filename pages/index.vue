<template>
  <section v-resize="_Resize">
    <main-logo />
    <main-pop-list />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { SystemConst, MainConst } from '~/store/Constant';
import { MainLogo } from '~/components';
import { MainPopList } from '~/containers';

@Component({
  components: {
    MainLogo,
    MainPopList
  },
})
export default class App extends Vue {
  name: string = 'App';
  async _Resize($e) {
    await this.$store.dispatch(SystemConst.$Call.Resize, {
      width: $e.innerWidth,
      height: $e.innerHeight
    });
  }
  async created() {
    try {
      await this.$store.dispatch(`main/${MainConst.$Call.List}`);
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
