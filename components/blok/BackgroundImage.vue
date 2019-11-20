<template>
  <div v-editable="blok" :style="image" class="outer">
    <img :src="blok.image" ref="image" class="image">
    <div class="inner">
      <component :key="blok._uid" v-for="blok in blok.content" :blok="blok" :is="blok.component | dashify" />
    </div>
    <img src="~/assets/arrow-down-sign-to-navigate.svg" class="arrow" @click="scrollToNextPage" v-if="blok.arrow">
  </div>
</template>

<script>
export default {
  props: ['blok'],

  computed: {
    image() {
      return {
        'background-image': `url(${this.blok.image})`
      }
    }
  },

  methods: {
    scrollToNextPage() {
      const imageTop = this.$refs.image.offsetTop
      const imageHeight = this.$refs.image.offsetHeight
      window.scrollTo({
        top: imageTop + imageHeight,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  display: block;
  width: 100%;
  height: auto;
  max-height: 100vh;
  visibility: hidden;
}
.outer {
  position: relative;
  background-size: cover;
  background-position: center center;
  .inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .arrow {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%);
    width: 2vw;
    cursor: pointer;
  }
}
</style>