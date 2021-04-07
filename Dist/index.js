var userArr = [];
var Users = (function () {
    function Users() {
        this.users = new Map();
    }
    Users.prototype.addUser = function (user) {
        userArr.push(user);
    };
    Users.prototype.getUser = function (id) {
        return userArr[id];
    };
    Users.prototype.editUser = function (id, user) {
        userArr[id] = user;
    };
    return Users;
}());
var User = (function () {
    function User(username, email, age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }
    User.prototype.setUsername = function (username) {
        this.username = username;
        return this;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.id = function () {
        return this.email + '-' + this.age + '.' + this.username;
    };
    return User;
}());
var users = new Users();
var owen = new User("Owen", "owen@gmail.com", 14);
var bob = new User("Bob", "bob@gmail.com", 14);
var updateMe = new User("UpdateMe", "update.me@gmail.com", 100);
users.addUser(owen);
users.addUser(bob);
users.addUser(updateMe);
for (var i = 0; i < userArr.length; i++) {
    console.log(i + ":", userArr[i], "\r\n");
}
console.log("\r\nUser Searched:", users.getUser(1));
var updated = new User("Updated", "updated@gmail.com", 101);
users.editUser(2, updated);
var updatedId = 2;
console.log("\r\nUpdated: " + updatedId, users.getUser(updatedId));
//# sourceMappingURL=index.js.map