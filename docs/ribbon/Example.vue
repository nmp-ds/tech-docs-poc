<script setup>
import { ribbon } from '@fabric-ds/css/component-classes'
</script>

<template>
  <div class="space-x-8 text-primary">
    <div :class="[ribbon.base, ribbon.success, 'text-14']">Success</div>
    <div :class="[ribbon.base, ribbon.warning, 'text-14']">Warning</div>
    <div :class="[ribbon.base, ribbon.error, 'text-14']">Error</div>
  </div>
</template>
