<template>
  <div v-editable="blok" class="column feature">
    {{ blok.name }}
    <div v-html="content"></div>
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
