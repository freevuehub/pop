<template>
  <div :class="[$style.card, { [$style.hover]: hover }]">
    <div :class="$style.imgBox">
      <img :src="img" alt="Pop Logo Image" v-if="!!img">
    </div>
    <div :class="$style.comment">
      <h1>
        <slot name="title"></slot>
      </h1>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component({
    props: {
      img: String,
      hover: Boolean
    }
  })
  export default class Card extends Vue {
    @Prop() img!: string
    @Prop() hover!: boolean
  }
</script>

<style module>
  .card {
    box-shadow: 0 2px 12px 0 #00000010;
    border-radius: 4px;
  }
  .hover {
    transition: all .2s;
  }
  .hover:hover {
    box-shadow: 0 2px 12px 0 #00000054;
  }
  .imgBox>img {
    display: block;
    width: 100%;
  }
  .comment {
    padding: 10px;
  }
</style>