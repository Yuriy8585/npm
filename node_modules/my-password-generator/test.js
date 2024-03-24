let password = require('./index.js')

 a=password.generate('aku');
 console.log(a.salt);
 b= password.unlock('aku',a.salt)
 console.log(a.hasedPassword==b);
