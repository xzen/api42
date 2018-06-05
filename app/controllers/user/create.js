module.exports = class Create {
  middleware (app) {
    console.log(app);
  }

  run (app) {
    this.middleware(app);
    console.log('create');
  }
}
