export const react = {
}

export const vue = {
  Alert: {
    required: [],
    props: [
      ['v-model', 'boolean', undefined, `Controls when the alert shows`],
      ['title', 'string', undefined, `The title for the alert`],
      ['role', 'string', 'alert', `The aria role for the alert`],
      ['negative', 'boolean', undefined, `Creates a negative alert`],
      ['positive', 'boolean', undefined, `Creates a positive alert`],
      ['warning', 'boolean', undefined, `Creates a warning alert`],
      ['info', 'boolean', undefined, `Creates an info alert`],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', undefined, `The pill's label, complicated stuff`],
      ['canClose', 'boolean', false, 'If the pill should be removeable'],
      ['suggestion', 'boolean', false, `If the pill should have suggestion-styling`],
    ]
  },
  Button: {
    required: [],
    props: [
      ['label', 'string', '', 'Interchangable with the default slot for labelling'],
      ['href', 'string', '', 'When set, an anchor tag will be used instead of a button'],
      ['type', 'string', 'button', "Controls the button's type, unused when `href` is present"],
    ],
    slots: [
    ],
    events: [
    ]
  },
  ButtonVariants: {
    titles: ['variant', 'modifiers'],
    rows: [
      ['primary', 'negative, quiet, small, loading'],
      ['secondary', 'quiet, small, loading'],
      ['link', 'small'],
      ['utility', 'small, loading'],
      ['pill', ''],
    ]
  },
  ButtonGroup: {
    required: [],
    props: [
      ['outlined', 'boolean', '', 'Outlines the button-group'],
      ['raised', 'boolean', '', 'Adds shadow to the button-group'],
      ['vertical', 'boolean', '', 'Changes the orientation to vertical'],
    ]
  },
  ButtonGroupItem: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'Used to give the item a selected appearance - e.g. when used with toggles'],
    ]
  },
  Box: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['bleed', 'boolean', '', 'Will make a box full-width on sm-size'],
      ['clickable', 'boolean', '', 'Applies styling to indicate clickability, does NOT add clickaability to the box itself (see `fClickable` for that)'],
      ['bordered', 'boolean', '', 'Adds a lovely border'],
      ['info', 'boolean', '', 'Will style the box with light-blue colors'],
      ['neutral', 'boolean', '', 'Will style the box with light-gray colors'],
    ]
  },
  Clickable: {
    required: [],
    props: [
      ['href', 'string', '', 'When set, an anchor tag will be used instead of a button'],
      ['label', 'boolean', '', 'Will add label-styling to the clickable – for label content, see slots'],
      ['radio', 'boolean', '', 'Will create a radio toggle with label and input elements'],
      ['checkbox', 'boolean', '', 'Will create a checkbox toggle with label and input elements'],
    ]
  },
}

