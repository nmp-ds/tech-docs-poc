# Button Group

## General information

The button group element is purely a presentational element, underlying behavior is determined by the [Clickable](/clickable/) element.

### Example

<button-group-example></button-group-example>

## Vue

### Getting started

#### Script

```js
// To use in the entire app
import { ButtonGroup } from '@fabric-ds/vue'
app.use(ButtonGroup)

// Or just in one component
import { fButtonGroup, fButtonGroupItem, fClickable } from '@fabric-ds/vue'
```

#### Template

```vue-html
<f-button-group>
  <f-button-group-item>
    <f-clickable label @click="handleClick">Hello</f-clickable>
  </f-button-group-item>
  <f-button-group-item>
    <f-clickable label @click="handleOtherClick">Fabric</f-clickable>
  </f-button-group-item>
</f-button-group>
```

### Button Group API

<api-table vue component="ButtonGroup" />

### Button Group Item API

<api-table vue component="ButtonGroupItem" />
