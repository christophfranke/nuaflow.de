<template>
  <div v-editable="blok" class="grid">
    <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component | dashify"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
@import '../../styles/main';

.grid {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  @include mobile {
    flex-wrap: wrap;
  }
}

</style>