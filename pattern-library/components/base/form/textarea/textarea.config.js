module.exports = {
  label: 'Textarea',
  name: 'input-textarea',
  order: 1,
  default: 'label-first',
  variants: [
    {
      label: 'Label Before Input',
      name: 'label-first',
      order: 1,
      context: {
        style: {
          labelTop: true,
          labelBottom: false,
          wrap: false,
        },
        textarea: true,
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Label After Input',
      name: 'label-last',
      order: 2,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: false,
        },
        textarea: true,
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Label Around (Before)',
      name: 'label-around-before',
      order: 3,
      context: {
        style: {
          labelTop: true,
          labelBottom: false,
          wrap: true,
        },
        type: 'text',
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Label Around (After)',
      name: 'label-around-after',
      order: 4,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: true,
        },
        textarea: true,
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'No Label',
      name: 'no-label',
      order: 5,
      context: {
        style: {
          labelTop: false,
          labelBottom: false,
          wrap: false,
        },
        textarea: true,
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
  ]
};