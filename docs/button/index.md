<comp-head title="Button" />

## General information

### Example

<button-example></button-example>

### Accessibility

If the button doesn't have visible text content – e.g. when used with only an icon – an `aria-label` prop must be provided for accessibility.

### Variants

<api-table vue component="ButtonVariants" />

## React

```jsx
import { Button } from '@fabric-ds/react'

<Button>Hello Fabric</Button>
```

## Vue

### Getting started

#### Script

```js
// To use in the entire app
import { Button } from '@fabric-ds/vue'
app.use(Button)

// Or just in one component
import { fButton } from '@fabric-ds/vue'
```

#### Template

```vue-html
<f-button>Hello Fabric</f-button>
```

### API

::: info
All variants and modifiers listed above are valid `boolean` props!
:::

<api-table vue component="Button" />
