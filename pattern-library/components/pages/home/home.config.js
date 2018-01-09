const menu = require('../../navigation');
const navigation = Array.prototype.slice.call(menu);

navigation[0].isActive = true;

module.exports = {
  name: 'home',
  label: 'Home',
  context: {
    header: {
      menuLabel: 'Menu',
      navigation: navigation,
    }
  }
};