//we are requiring in the npm module
const passport = require('passport');
//setting up our first route handler so that if the user tries to use google follow this path.
/*
because we are using app here but not defining it here
so we need to export the module using Node.
module is the variable name
and exports is an object that will be exposed as a module

*/
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  //new route handler
  app.get('/auth/google/callback', passport.authenticate('google'));
};
