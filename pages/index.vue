<template>
  <section>
    <MainLogo />
    <MainPopList />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MainConst } from '~/store/Constant';
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
  async created() {
    try {
      await this.$store.dispatch(MainConst.$Call.List);
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
