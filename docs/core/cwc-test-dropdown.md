# cwc-test-dropdown

Dropdown, example test component. Do not use in production.

```typescript
import '@clr/core/test-dropdown';
```

```html
<cwc-test-dropdown title="click me!">
   Hello World
</cwc-test-dropdown>
```

## Properties

| Property | Attribute | Type      | Default    | Description                            |
|----------|-----------|-----------|------------|----------------------------------------|
| `open`   | `open`    | `boolean` |            | Set open to open or close the dropdown |
| `title`  | `title`   | `string`  | "dropdown" | Set the dropdown button text           |

## Events

| Event        | Detail    | Description                          |
|--------------|-----------|--------------------------------------|
| `openChange` | `boolean` | notify open state change of dropdown |

## Slots

| Name      | Description                       |
|-----------|-----------------------------------|
| `default` | Content slot for dropdown content |

## CSS Custom Properties

| Property                             |
|--------------------------------------|
| `--clr-test-border-color`            |
| `--clr-test-button-background-color` |
| `--clr-test-button-text-color`       |
