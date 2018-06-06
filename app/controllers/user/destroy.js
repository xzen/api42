module.exports = class Destroy {
  constructor(app) {
    this.app = app;

    this.run();
  }

  middleware () {
  }

  run () {
    this.middleware();
    console.log('destroy');
  }
};

