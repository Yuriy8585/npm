let shortid = require('short-id');
let crypto = require('crypto');
module.exports={
  generate:function(password){
   let salt=shortid.generate()
   let hasedPassword=crypto.createHmac('sha256',salt)
        .update(password).digest('hex')
      return { salt,hasedPassword }
  },
  unlock: function(password,salt){
    let hasedPassword=crypto.createHmac('sha256',salt)
         .update(password).digest('hex')
       return hasedPassword
  }
}
