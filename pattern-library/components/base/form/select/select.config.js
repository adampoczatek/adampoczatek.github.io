const faker = require('faker');

module.exports = {
  label: 'Select',
  default: 'select-label-around-first',
  order: 5,
  variants: [
    {
      label: 'Label Around (Before)',
      name: 'select-label-around-first',
      order: 1,
      context: {
        style: {
          labelTop: true,
          wrap: true,
        },
        options: [...Array(5)].map(i => ({
          text: faker.internet.email(),
          value: faker.internet.userName(),
        })),
        label: 'Email address',
        placeholder: 'Select email address...',
        id: 'email',
      }
    },
    {
      label: 'Label Around (After)',
      name: 'select-label-around-last',
      order: 2,
      context: {
        style: {
          labelBottom: true,
          wrap: true,
        },
        options: [...Array(5)].map(i => ({
          text: faker.internet.email(),
          value: faker.internet.userName(),
        })),
        label: 'Email address',
        placeholder: 'Select email address...',
        id: 'email',
      }
    },
    {
      label: 'Label Before Select',
      name: 'select-label-first',
      order: 3,
      context: {
        style: {
          labelTop: true,
        },
        options: [...Array(5)].map(i => ({
          text: faker.internet.email(),
          value: faker.internet.userName(),
        })),
        label: 'Email address',
        placeholder: 'Select email address...',
        id: 'email',
      }
    },
    {
      label: 'Label After Select',
      name: 'select-label-last',
      order: 4,
      context: {
        style: {
          labelBottom: true,
        },
        options: [...Array(5)].map(i => ({
          text: faker.internet.email(),
          value: faker.internet.userName(),
        })),
        label: 'Email address',
        placeholder: 'Select email address...',
        id: 'email',
      }
    },
    {
      label: 'Disabled',
      name: 'select-disabled',
      order: 5,
      context: {
        style: {
          labelBottom: true,
          wrap: true,
        },
        options: [...Array(5)].map(i => ({
          text: faker.internet.email(),
          value: faker.internet.userName(),
        })),
        disabled: true,
        label: 'Email address',
        placeholder: 'Select email address...',
        id: 'email',
      }
    },
    {
      label: 'No Label',
      name: 'select-no-label',
      order: 5,
      context: {
        style: {
          wrap: true,
        },
        options: [...Array(5)].map(i => ({
          text: faker.internet.email(),
          value: faker.internet.userName(),
        })),
        placeholder: 'Select email address...',
        id: 'email',
      }
    },
  ],
};