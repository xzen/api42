module.exports = class Create {
  constructor(app) {
    this.app = app;

    this.run();
  }

  middleware () {
  }

  run () {
    this.middleware();
    console.log('create');
  }
};
