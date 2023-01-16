<comp-head title="Icons" />

## General information

All available icons can be [viewed here](https://fabric-icons.surge.sh/)

### Example

<icons-example></icons-example>

## Accessibility

Each icon comes with a `title` attribute set to an informative description for screen readers, however, this brings two important considerations.

### When your button has an informative text label

Add the `aria-hidden` attribute to the icon. The label provides enough context for the screen reader, the additional context from the icon's `title` would just add "noise".

### When the icon is lending context to the label

Ensure the icon will be read _after_ the label. If the icon should be visually before the label, the two can be flipped using CSS like so.

```html
<button>
  <span class="inline-flex flex-row-reverse">
    My somewhat informative label
    <svg>...</svg>
  </span>
</button>
```

## Changing icon color

The color of an icon can be changed by setting either the text color or the `color` attribute on the SVG directly.

##### React

```jsx
<Icon color="var(--f-blue-600)"/>
```

##### Vue

```html
<icon-wifi-32 color="var(--f-blue-600)"/>
<!-- or -->
<icon-wifi-32 class="text-blue-600"/>
<!-- or -->
<p class="text-blue-600">Hello Fabric <icon-wifi-32/></p>
```

## Importing icons

::: tip
The naming scheme for framework icons is `'Icon' + NAME + SIZE` - so the examples below would be the 32px Wifi icon.
:::

##### React

```js
import { IconWifi32 } from '@fabric-ds/icons/react'
```

##### Vue

```js
import { IconWifi32 } from '@fabric-ds/icons/vue'
```
