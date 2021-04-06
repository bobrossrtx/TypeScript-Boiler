var userArr = [];
var id = 0;
var User = (function () {
    function User(username, email, age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }
    User.prototype.addUser = function () {
        userArr.push({
            id: id,
            username: this.username,
            email: this.email,
            age: this.age
        });
        id++;
    };
    return User;
}());
var UserEdit = (function () {
    function UserEdit(id, field, value) {
        this.id = id;
        ;
        this.field = field;
        this.value = value;
    }
    UserEdit.prototype.updateUser = function () {
        if (this.field === "age") {
            userArr[this.id] = {
                id: userArr[this.id]["id"],
                username: userArr[this.id]["username"],
                email: userArr[this.id]["email"],
                age: this.value
            };
        }
        if (this.field === "email") {
            userArr[this.id] = {
                id: userArr[this.id]["id"],
                username: userArr[this.id]["username"],
                email: this.value,
                age: userArr[this.id]["age"]
            };
        }
        if (this.field === "username") {
            userArr[this.id] = {
                id: userArr[this.id]["id"],
                username: this.value,
                email: userArr[this.id]["email"],
                age: userArr[this.id]["age"]
            };
        }
    };
    return UserEdit;
}());
var bobrossrtx = new User("Bobrossrtx", "bobrossrtx@gmail.com", 14);
bobrossrtx.addUser();
var googlaz = new User("Googlaz", "giz@mail.com", 22);
googlaz.addUser();
console.log("\n first");
console.log(userArr);
var bobrossrtxEdit = new UserEdit(0, "username", "BobrossrtxEdit");
bobrossrtxEdit.updateUser();
var googlazEdit = new UserEdit(1, "age", 23);
googlazEdit.updateUser();
console.log("\n Second");
console.log(userArr);
//# sourceMappingURL=index.js.map