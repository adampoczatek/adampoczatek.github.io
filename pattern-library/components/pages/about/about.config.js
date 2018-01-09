const menu = require('../../navigation');
const navigation = Array.prototype.slice.call(menu);

navigation[1].isActive = true;

module.exports = {
  name: 'about',
  label: 'About',
  context: {
    header: {
      menuLabel: 'Menu',
      navigation: navigation,
    }
  }
};