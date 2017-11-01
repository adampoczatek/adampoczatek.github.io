module.exports = {
  label: 'Checkbox',
  name: 'input-checkbox',
  order: 3,
  default: 'label-first',
  variants: [
    {
      label: 'Label Before Input',
      name: 'label-first',
      order: 3,
      context: {
        style: {
          labelTop: true,
          labelBottom: false,
          wrap: false,
        },
        type: 'checkbox',
        label: 'Option 1',
        placeholder: '',
        value: 'Adam',
        id: 'option-1',
        checked: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Label After Input',
      name: 'label-last',
      order: 4,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: false,
        },
        type: 'checkbox',
        label: 'Option 1',
        placeholder: '',
        value: 'Adam',
        id: 'option-1',
        checked: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Label Around (Before)',
      name: 'label-around-first',
      order: 1,
      context: {
        style: {
          labelTop: true,
          labelBottom: false,
          wrap: true,
        },
        type: 'checkbox',
        label: 'Option 1',
        placeholder: '',
        value: 'Adam',
        id: 'option-1',
        checked: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Label Around (After)',
      name: 'label-around-last',
      order: 2,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: true,
        },
        type: 'checkbox',
        label: 'Option 1',
        placeholder: '',
        value: 'Adam',
        id: 'option-1',
        checked: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Disabled (Checked)',
      name: 'disabled-checked',
      order: 5,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: true,
        },
        type: 'checkbox',
        label: 'Option 1',
        placeholder: '',
        value: 'Adam',
        id: 'option-1',
        checked: true,
        disabled: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Disabled (Unchecked)',
      name: 'disabled-uchecked',
      order: 6,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: true,
        },
        type: 'checkbox',
        label: 'Option 1',
        placeholder: '',
        value: 'Adam',
        id: 'option-1',
        checked: false,
        disabled: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
  ]
};