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
.text {
  padding: 20px;
}
</style>