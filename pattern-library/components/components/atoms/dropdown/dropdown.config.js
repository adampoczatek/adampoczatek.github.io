module.exports = {
  name: 'dropdown',
  label: 'Dropdown',
  variants: [
    {
      name: 'default',
      label: 'Default',
      order: 1,
      context: {
        text: 'Select user',
        label: 'OMG',
        options: [
          'Adam',
          'Marzena',
          'Lusi',
          'Damian'
        ]
      }
    },
    {
      name: 'disabled',
      label: 'Disabled',
      order: 2,
      context: {
        text: 'Select user',
        isDisabled: true,
        options: [
          'Adam',
          'Marzena',
          'Lusi',
          'Damian'
        ]
      }
    }
  ]
};
