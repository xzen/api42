module.exports = class Destroy {
  middleware (app) {
    console.log(app);
  }

  run (app) {
    this.middleware(app);
    console.log('destroy');
  }
}
