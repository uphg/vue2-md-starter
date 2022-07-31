<template>
  <div>
    <t-input v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'InputBase'
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import TInput from 'src/components/TInput.vue'

const value = ref('')
</script>
