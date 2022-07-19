const bcrypt = require('bcrypt');
module.exports = {
  hashPassword: function (password:string, saltRounds:string) {
    return bcrypt.hash(password, saltRounds)
  },
  verifyPassword: function (password:string, hashedPassword:string) {
    return bcrypt.compare(password, hashedPassword)
  }
};