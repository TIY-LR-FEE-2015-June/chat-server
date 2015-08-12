/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 *              created with generator: `sails generate controller user`
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res) {
    User.findOrCreate({username: req.body.username}, req.body, function(err, user) {
      if (err) {
        return res.send(err);
      }

      res.jsonx(user);
    });
  }
};

