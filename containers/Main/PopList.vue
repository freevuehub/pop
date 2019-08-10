<template>
  <div>
    <div v-for="l in popList" :key="l.no">
      <nuxt-link :to="`/Pop/${l.no}`">
        {{ l.name.kr }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import { mapGetters } from 'vuex';
  import { MainConst } from '~/store/Constant';

  @Component({
    computed: {
      ...mapGetters({
        popList: MainConst.$Get.List
      })
    }
  })
  export default class PopList extends Vue {
    
  }
</script>