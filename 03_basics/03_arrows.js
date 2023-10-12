const user = {
    username: 'Abhishek',
    price: 999,

    welcomeMessage: function(){
        console.log(`Hey Mr.${this.username}  , welcome to Akaymeals.com`);
        console.log(this);
    }
    
}
user.welcomeMessage()
user.username = 'Tiwari jee'
user.welcomeMessage()
// console.log(this);