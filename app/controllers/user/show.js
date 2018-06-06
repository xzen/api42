module.exports = class Show {
  constructor(app) {
    this.app = app;

    this.run();
  }

  middleware () {
  }

  run () {
    this.middleware();
    console.log('show', this.app);
  }
};
