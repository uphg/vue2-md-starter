<template>
  <input type="text" @input="onInput" />
</template>

<script setup lang="ts">
defineProps({
  value: [String, Number, Boolean]
})
const emit = defineEmits(['input'])

function onInput(event: any) {
  emit('input', event.target.value)
}
</script>