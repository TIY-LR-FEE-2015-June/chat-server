
/**
 * Should read user id from Authorization header
 * and set it to part of the request body
 * @param  {Request}   req
 * @param  {Response}   res
 * @param  {Next} next : passes control to next policy or controller
 */
module.exports = function(req, res, next) {
  var userId = req.get('Authorization');
  req.options.values = {
    user: userId
  };

  next();
};
