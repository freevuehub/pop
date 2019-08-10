<template>
  <section>
    <MainLogo />  
    <div v-for="l in list" :key="l.no">
      <nuxt-link :to="`/Pop/${l.no}`">
        {{ l.name.kr }}
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';
import { List } from '~/store/Constant';
import { callbackify } from 'util';
import { returnStatement } from '@babel/types';
import { MainLogo } from '~/components';

@Component({
  components: { MainLogo },
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
