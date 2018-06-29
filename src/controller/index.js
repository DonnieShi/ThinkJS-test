const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.assign('title',"我不知道你在说什么")
    return this.display();
  }
};
