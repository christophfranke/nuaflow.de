<template>
  <div v-editable="blok" class="column" :style="style"></div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    style() {
      const width = `${this.blok.width}${this.blok.mode}`
      const height = `${this.blok.height}${this.blok.mode}`
      return {
        width,
        height
      }
    }
  }
}
</script>
