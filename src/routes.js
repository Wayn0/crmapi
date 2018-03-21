const AuthenticationConrtoller = require('./controllers/AuthenticationConrtoller.js')
const AuthenticationConrtollerPolicy = require('./policies/AuthenticationControllerPolicy.js')

module.exports = (app) => {
  app.post('/register',
    AuthenticationConrtollerPolicy.register,
    AuthenticationConrtoller.register)
}
