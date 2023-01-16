<script setup>
import { fAlert, fButton } from '../fabric-vue-shim.js'
</script>

<template>
  <f-alert :model-value="true" negative title="Oh no Fabric!">
    <p>This is some message text informing the user about the alert.</p>
    <div class="space-x-8">
      <f-button small>Primary CTA</f-button>
      <f-button small quiet>Secondary CTA</f-button>
    </div>
  </f-alert>
</template>
