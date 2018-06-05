module.exports = class Show {
  middleware (app) {
    console.log(app);
  }

  run (app) {
    this.middleware(app);
    console.log('show');
  }
}
