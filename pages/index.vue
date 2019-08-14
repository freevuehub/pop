<template>
  <v-container fluid>
    <main-logo class="my-3" />
    <main-pop-list />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { SystemConst, MainConst } from '~/Constant';
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
  mounted() {
    console.log(this);
  }
}
</script>
