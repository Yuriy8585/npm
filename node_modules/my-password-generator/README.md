# my-password-generator

----


> this npm will give u hassed password from input password and random salt that u can use for save user data and for login. this mpm contain 2 main function generate, and unlock.  generate function u can use for signup or register user, and the unclock function u can use it to login.

----
## usage
> npm install --save my-passwod-generator

----
>let password=require('my-passwod-generator')

----
###use in register
>newpassword= password.generate('thisispassword') -> newpassword is an object contain {salt:' ',hasedpassword:' '} then u can save salt and haseed password in your db

----
###use in login
>if(db.password==password.unlock(inputPassword,db.salt)){
  login=true
}else{
login=true
}
