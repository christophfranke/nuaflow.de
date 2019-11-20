<template>
  <div v-editable="blok" class="column">
    <div v-html="content" class="text"></div>
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

<style lang="scss">
@import '../../styles/mixins';

.text {
  padding: 30px;
  background: radial-gradient(circle at center,
    rgba(255, 255, 255, 0.5) 0,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0) 90%);

  @include mobile {
    padding: 15px;
  }
}
</style>