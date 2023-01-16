<script setup>
import { fButtonGroup, fButtonGroupItem, fClickable } from '../fabric-vue-shim.js'
</script>

<template>
  <f-button-group outlined>
    <f-button-group-item>
      <f-clickable label>Hello</f-clickable>
    </f-button-group-item>
    <f-button-group-item>
      <f-clickable label>Fabric</f-clickable>
    </f-button-group-item>
  </f-button-group>
</template>
