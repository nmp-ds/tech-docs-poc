<script setup>
import { ref } from 'vue'
import { fSlider } from '../fabric-vue-shim.js'

const model = ref(50)
</script>

<template>
  <div>
    <f-slider v-model="model" />
    <code><pre class="text-right text-12">{{ Number(model).toFixed(2) }}</pre></code>
  </div>
</template>
