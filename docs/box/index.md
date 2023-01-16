<comp-head title="Box" />

## General information

### Example

<box-example></box-example>

### Accessibility

The **Clickable** component should be used to make a box clickable. It should wrap the most informative text in the box for screen-readers, and not the entire content. See each framework for an example.

## React

```jsx
import { Box } from '@fabric-ds/react'

<Box>
  <h1>Hello Fabric</h1>
</Box>
```

## Vue

### Getting started

#### Script

```js
// To use in the entire app
// This will automatically make both f-box and f-clickable available for use
import { Box } from '@fabric-ds/vue'
app.use(Box)

// Or just in one component
import { fBox, fClickable } from '@fabric-ds/vue'
```

#### Template

```html
<f-box neutral>
  <h1>Hello Fabric</h1>
</f-box>
```

### API

<api-table vue component="Box" />
