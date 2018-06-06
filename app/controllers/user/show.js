module.exports = class Show {
  constructor(app) {
    this.app = app;

    this.run();
  }

  middleware () {
    this.app.get('/user/show/:id', (req, res) => {
      res.status(400).json(req.params);
    });
  }

  run () {
    try {
      this.middleware();
    } catch (err) {
      console.log(err);
    }
  }
};
