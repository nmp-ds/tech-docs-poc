<comp-head title="Alert" />

## General information

### Example

<alert-example></alert-example>

## Vue

### Getting started

#### Script

```js
// To use in the entire app
import { Alert } from '@fabric-ds/vue'
app.use(Alert)

// Or just in one component
import { fAlert } from '@fabric-ds/vue'
```

#### Template

```vue-html
<f-alert v-model="model" negative>
  <h1>Hello Fabric</h1>
</f-alert>
```

### API

<api-table vue component="Alert" />
