# Getting started

## Preface: About Fabric components

Fabric components are built by composing several Tailwind classes together.
In the example below, those classes make the base of a Box component!
This means there's no `.box` CSS class available for writing plain HTML, and this is why most Fabric components are only available through a framework.

```html
<div class="group block relative break-words last-child:mb-0 p-16 rounded-8"></div>
```

## Step 1: Install a Fabric framework

### React

```sh
pnpm add @fabric-ds/react @fabric-ds/icons
```

### Vue

```sh
pnpm add @fabric-ds/vue @fabric-ds/icons
```
