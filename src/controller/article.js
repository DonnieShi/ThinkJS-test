const Base = require('./base.js');

module.exports = class extends Base {
  /*async await  es6中的异步转同步的解决方案，如果不加则是异步操作，这样将获取不到data的数据，
  因为this.assign已经加载完了，model还在读数据，所以在需要用异步转同步。*/
  async indexAction() {

    let article = this.model("article")/*加载model，从db.js配置的数据库中读取article表（think_为db.js中设置
    的前缀，如果设置了前缀这里名称不需要带上前缀,例如think_article 这里使用article即可）*/
    let data = await article.where({articleID:10}).find()//等待model查找articleID为6的用户信息
    //  find 和 select  有区别  select 返回的是个数组   find返回的是第一个
    // return this.display();
    return this.success(data)
  }

  async pppAction(){  //  访问article 下的ppp时会被调用

    let article = this.model("article")
    let data = await article.where({articleID:6}).find()
    console.log(data);

    return this.success(data)
  }

};
