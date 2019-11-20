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
.outer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>