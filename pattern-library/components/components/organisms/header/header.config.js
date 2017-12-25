module.exports = {
  name: 'header',
  label: 'Header',
  variants: [
    {
      name: 'default',
      label: 'Default',
    },
    {
      name: 'condensed',
      label: 'Condensed',
      context: {
        classes: 'header--condensed',
        menuLabel: 'Menu',
      }
    },
    {
      name: 'condensed-opened',
      label: 'Condensed Opened',
      context: {
        classes: 'header--condensed',
        menuLabel: 'Close',
        menuOpened: true,
      }
    }
  ]
};