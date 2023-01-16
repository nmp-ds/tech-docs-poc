<comp-head title="Ribbon" link-name="status-ribbon" />

## General information

### Example

<ribbon-example></ribbon-example>

## Vue

```vue
<script setup>
import { ribbon } from '@fabric-ds/css/component-classes'
</script>

<template>
  <div :class="[ribbon.base, ribbon.info]">Hello Fabric</div>
</template>
```
