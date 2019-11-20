<template>
  <div v-editable="blok" :style="image" class="outer" ref="outer">
    <div class="inner">
      <component :key="blok._uid" v-for="blok in blok.content" :blok="blok" :is="blok.component | dashify" />
    </div>
    <img src="~/assets/arrow-down-sign-to-navigate.svg" class="arrow" @click="scrollToNextPage">
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
      const imageTop = this.$refs.outer.offsetTop
      const imageHeight = this.$refs.outer.offsetHeight
      window.scrollTo({
        top: imageTop + imageHeight,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.outer {
  position: relative;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  .inner {
    width: 100%;
    background: radial-gradient(circle at center, transparent, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0.7));
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