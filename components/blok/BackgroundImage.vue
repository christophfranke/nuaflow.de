<template>
  <div v-editable="blok" :style="image" class="outer">
    <img :src="blok.image">
    <div class="inner">
      <component :key="blok._uid" v-for="blok in blok.content" :blok="blok" :is="blok.component | dashify" />
    </div>
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
  }
}
</script>

<style lang="scss">
img {
  width: 100%;
  height: auto;
}
.outer {
  position: relative;
}
.inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>