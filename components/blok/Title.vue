<template>
  <div v-editable="blok" class="column outer">
    <div v-html="content" class="inner"></div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    content() {
      return this.blok.content && this.$storyapi.richTextResolver.render(this.blok.content)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.outer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {  
    padding: 40px 160px;
    background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.1) 0,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 90%);
    text-align: center;
    overflow-x: auto;

    @include mobile {
      padding: 20px 40px;
    }
  }
}
</style>