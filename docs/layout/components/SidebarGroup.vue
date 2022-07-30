<template>
  <section class="sidebar-group">
    <h2 class="title">{{ title }}</h2>
    <RouterLink
      class="link"
      v-for="item, index in children"
      :key="index"
      :to="item.link"
    >{{ item.title }}</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  title: String as PropType<string>,
  children: Array as PropType<Array<{ title: string; link: string }>>
})
</script>

<style lang="scss" scoped>
.sidebar-group {
  font-size: 14px;
}
.title {
  margin: 0;
  font-size: 16px;
}
.link {
  display: block;
  padding: 6px 16px;
  color: var(--c-text-light-2)
}
</style>