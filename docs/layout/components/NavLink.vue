<template>
  <RouterLink class="nav-link" :to="to">
    <slot />  
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps({
  to: [String, Object]
})
</script>

<style lang="scss" scoped>
.nav-link {
  padding: 8px 12px;
}
</style>